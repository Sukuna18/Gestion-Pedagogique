import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Annee } from 'src/app/interfaces/annee';
import { Classe } from 'src/app/interfaces/classe';
import { Cours } from 'src/app/interfaces/cours';
import { Module } from 'src/app/interfaces/module';
import { Professeur } from 'src/app/interfaces/professeur';
import { Salle } from 'src/app/interfaces/salle';
import { Semestre } from 'src/app/interfaces/semestre';
import { AllService } from 'src/app/services/all.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  selectedCours: Cours[] = [];
  coursClasses: Cours[] = [];
  isSelectCours: boolean = false;
  filteredCours: Cours[] = [];
  selectedClasseId: number = 1;
  selectedProfesseurId: number = 1;
  filtreValue: string = '';
  searchText: string = ''; 
  regexHeure = '^[0-9]{2}:[0-9]{2}$';
  @Input() data: { cours: Cours[], salles: Salle[], classes: Classe[], modules:Module[], professeurs: Professeur[], annees:Partial<Annee>, semestres: Semestre[]} = {cours: [], classes: [], modules:[], professeurs:[], annees:{}, salles:[], semestres:[]}; 
  ngOnInit(): void {
    console.log(this.data.annees.libelle);
    
  }
  useForm:FormGroup = this.fb.group({
    date: ['', Validators.required],
    heure_debut: ['',[ Validators.required, Validators.pattern(this.regexHeure)]],
    heure_fin: ['', [Validators.required, Validators.pattern(this.regexHeure)]],
    en_ligne: [1],
    salle_id: [1],

  });
    constructor(private fb: FormBuilder, private sessionService: SessionService) { }
  
    filterCours() {
      console.log(this.searchText);
      
      if (this.searchText.trim() === '') {
        
      
        this.filteredCours = [];
      } else {
        
        
        this.filteredCours = this.data.cours.filter((cours) => 
          cours.module.libelle.toLowerCase().includes(this.searchText.toLowerCase()) ||
          cours.classe.libelle.toLowerCase().includes(this.searchText.toLowerCase()) ||
          cours.semestre.libelle.toLowerCase().includes(this.searchText.toLowerCase()) ||
          cours.professeur.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
          cours.professeur.prenom.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    }
    selectCours(id:number){
      this.selectedCours?.push({...this.data.cours.find(cours => cours.id === id)!});
      this.isSelectCours = true;
      this.filteredCours = [];
      this.coursClasses = this.coursClasses.filter(cours => cours.id !== id);
      this.searchText = ''; 
    }
    cancelSelect(id:number){
      this.isSelectCours = false;
      this.selectedCours = this.selectedCours.filter(cours => cours.id !== id);
    }
    ajouterClasse(){
      this.data.cours.forEach(cours =>{ 
        if((cours.module.id == this.selectedCours[0].module.id) && (cours.professeur.id == this.selectedCours[0].professeur.id) && (cours.semestre.id == this.selectedCours[0].semestre.id) && (cours.classe.id !== this.selectedCours[0].classe.id)){
          console.log("cours trouvé");
          if(!this.coursClasses.includes(cours)){
            this.coursClasses.push(cours);
            console.log(this.coursClasses);
          }
          
        }else{
          console.log("cours non trouvé");
        }
      });
      }
addSession(){
          let heureDebut = this.useForm.get('heure_debut')?.value;
          let heureFin = this.useForm.get('heure_fin')?.value;
          let heureDebutSplit = heureDebut.split(':');
          let heureFinSplit = heureFin.split(':');
          let heureDebutNumber = parseInt(heureDebutSplit[0]);
          let heureFinNumber = parseInt(heureFinSplit[0]);
          let minuteDebutNumber = parseInt(heureDebutSplit[1]);
          let minuteFinNumber = parseInt(heureFinSplit[1]);
          let date = this.useForm.get('date')?.value;
          let splitedDate = date.split('-');
          let splitAnnee = (this.data.annees.libelle as string).split('-');
          let dayActual = new Date().getDate();
          let monthActual = new Date().getMonth() + 1;
          console.log(dayActual, monthActual);

          let duree = 0;
          if(heureDebutNumber > heureFinNumber){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'L\'heure de début doit être inférieur à l\'heure de fin',
            })
            this.useForm.patchValue({
              heure_debut: '',
              heure_fin: '',
            });
            return;
          }else if(heureDebutNumber == heureFinNumber){
            if(minuteDebutNumber > minuteFinNumber || minuteDebutNumber == minuteFinNumber){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'L\'heure de début doit être inférieur à l\'heure de fin',
              })
              this.useForm.patchValue({
                heure_debut: '',
                heure_fin: '',
              });
              return;
            }
          }
          console.log(splitedDate[1]);
          if(parseInt(splitedDate[0]) < parseInt(splitAnnee[1])){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'La date doit être supérieur à l\'année en cours',
            })
            this.useForm.patchValue({
              date: '',
            });
            return;
          }
          if(parseInt(splitedDate[0]) == parseInt(splitAnnee[1])){
            if(parseInt(splitedDate[1]) < monthActual){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La date doit être supérieur à l\'année en cours et le mois',
              })
              this.useForm.patchValue({
                date: '',
              });
              return;

            }else if(parseInt(splitedDate[1]) == monthActual){
              if(parseInt(splitedDate[2]) < dayActual){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'La date doit être supérieur à l\'année en cours, le mois et le jour',
                })
                this.useForm.patchValue({
                  date: '',
                });
                return;
              }
            }
          }
          if(this.selectedCours.length == 0){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Veuillez sélectionner un cours',
            })
            return;
          }
          duree = Math.round((heureFinNumber - heureDebutNumber) + ((minuteFinNumber - minuteDebutNumber)/60));
          console.log(this.useForm.getRawValue());
          this.selectedCours.forEach(cours => {
            this.sessionService.add({...this.useForm.getRawValue(), nb_heures: cours.heure_globale - duree, cours_id: cours.id}).subscribe();
          });
          
        }
    
}
