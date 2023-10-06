import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Annee } from 'src/app/interfaces/annee';
import { Classe } from 'src/app/interfaces/classe';
import { Cours } from 'src/app/interfaces/cours';
import { Module } from 'src/app/interfaces/module';
import { Professeur } from 'src/app/interfaces/professeur';
import { Salle } from 'src/app/interfaces/salle';
import { Semestre } from 'src/app/interfaces/semestre';
import { Session } from 'src/app/interfaces/session';
import { CommunicationService } from 'src/app/services/communication.service';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  isEdit: boolean = false;
  selectedCours: Cours[] = [];
  coursClasses: Cours[] = [];
  isSelectCours: boolean = false;
  filteredCours: Cours[] = [];
  selectedClasseId: number = 1;
  selectedProfesseurId: number = 1;
  sessionData: Partial<Session[]> = [];
  filtreValue: string = '';
  searchText: string = '';
  regexHeure = '^[0-9]{2}:[0-9]{2}$';
  updatedDone: Partial<Session> = {};
  updatedSessionId: number|undefined;
  cours_id: number|undefined;
  @Input() data: {
    cours: Cours[];
    salles: Salle[];
    classes: Classe[];
    modules: Module[];
    professeurs: Professeur[];
    annees: Partial<Annee>;
    semestres: Semestre[];
  } = {
    cours: [],
    classes: [],
    modules: [],
    professeurs: [],
    annees: {},
    salles: [],
    semestres: [],
  };
  useForm: FormGroup = this.fb.group({
    date: ['', Validators.required],
    heure_debut: [
      '',
      [Validators.required, Validators.pattern(this.regexHeure)],
    ],
    heure_fin: ['', [Validators.required, Validators.pattern(this.regexHeure)]],
    en_ligne: [1],
    salle_id: [null],
  });
  ngOnInit(): void {
    this.getAllSession();
    this.shared.updatedSession.subscribe((data) => {
      this.cours_id = data.cours_id;
      this.isEdit = true;
      this.selectedCours = []
      this.selectedCours.push(data.cours);
      this.updatedSessionId = data.id;
      this.useForm.patchValue({
        date: data.date,
        heure_debut: data.heure_debut.split(':')[0] + ':' + data.heure_debut.split(':')[1],
        heure_fin: data.heure_fin.split(':')[0] + ':' + data.heure_fin.split(':')[1],
        en_ligne: data.en_ligne,
        salle_id: data.salle.id
      })
      console.log(data.salle.id);
      
     });
  }

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService,
    private shared: CommunicationService
  ) {}
  getAllSession() {
    this.sessionService.getAll().subscribe((data) => {
      console.log(data.data);
      this.sessionData = data.data;
      this.shared.SendSessionData(data.data);
    });
  }
  filterCours() {
    console.log(this.searchText);

    if (this.searchText.trim() === '') {
      this.filteredCours = [];
    } else {
      this.filteredCours = this.data.cours.filter(
        (cours) =>
          cours.module.libelle
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          cours.classe.libelle
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          cours.semestre.libelle
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          cours.professeur.nom
            .toLowerCase()
            .includes(this.searchText.toLowerCase()) ||
          cours.professeur.prenom
            .toLowerCase()
            .includes(this.searchText.toLowerCase())
      );
    }
  }
  selectCours(id: number) {
    this.selectedCours?.push({
      ...this.data.cours.find((cours) => cours.id === id)!,
    });
    this.isSelectCours = true;
    this.filteredCours = [];
    this.coursClasses = this.coursClasses.filter((cours) => cours.id !== id);
    this.searchText = '';
  }
  cancelSelect(id: number) {
    this.isSelectCours = false;
    this.selectedCours = this.selectedCours.filter((cours) => cours.id !== id);
  }
  ajouterClasse() {
    this.data.cours.forEach((cours) => {
      if (
        cours.module.id == this.selectedCours[0].module.id &&
        cours.professeur.id == this.selectedCours[0].professeur.id &&
        cours.semestre.id == this.selectedCours[0].semestre.id &&
        cours.classe.id !== this.selectedCours[0].classe.id
      ) {
        console.log('cours trouvé');
        if (!this.coursClasses.includes(cours)) {
          this.coursClasses.push(cours);
          console.log(this.coursClasses);
        }
      } else {
        console.log('cours non trouvé');
      }
    });
  }
  addSession() {
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
    console.log(this.useForm.get('salle_id')?.value);

    let duree = 0;
    let effectifGlobale = this.selectedCours.reduce((acc, cours) => {
      return acc + cours.classe.effectif;
    }, 0);
    if (
      this.useForm.get('salle_id')?.value !== null &&
      this.useForm.get('en_ligne')?.value == 0
    ) {
      if (
        effectifGlobale >
        this.data.salles.find(
          (salle) => salle.id == this.useForm.get('salle_id')?.value
        )?.capacite!
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "La capacité de la salle est inférieur à l'effectif des classes",
        });
        return;
      }
    }

    if (heureDebutNumber > heureFinNumber) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "L'heure de début doit être inférieur à l'heure de fin",
      });
      this.useForm.patchValue({
        heure_debut: '',
        heure_fin: '',
      });
      return;
    } else if (heureDebutNumber == heureFinNumber) {
      if (
        minuteDebutNumber > minuteFinNumber ||
        minuteDebutNumber == minuteFinNumber
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "L'heure de début doit être inférieur à l'heure de fin",
        });
        this.useForm.patchValue({
          heure_debut: '',
          heure_fin: '',
        });
        return;
      }
    }
    console.log(splitedDate[1]);
    if (parseInt(splitedDate[0]) < parseInt(splitAnnee[1])) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "La date doit être supérieur à l'année en cours",
      });
      this.useForm.patchValue({
        date: '',
      });
      return;
    }
    if (parseInt(splitedDate[0]) == parseInt(splitAnnee[1])) {
      if (parseInt(splitedDate[1]) < monthActual) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "La date doit être supérieur à l'année en cours et le mois",
        });
        this.useForm.patchValue({
          date: '',
        });
        return;
      } else if (parseInt(splitedDate[1]) == monthActual) {
        if (parseInt(splitedDate[2]) < dayActual) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "La date doit être supérieur à l'année en cours, le mois et le jour",
          });
          this.useForm.patchValue({
            date: '',
          });
          return;
        }
      }
    }
    if (this.selectedCours.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Veuillez sélectionner un cours',
      });
      return;
    }
    duree = Math.round(
      heureFinNumber -
        heureDebutNumber +
        (minuteFinNumber - minuteDebutNumber) / 60
    );
    console.log(this.useForm.getRawValue());
    if(this.isEdit == false){
      this.selectedCours.forEach((cours) => {
        this.sessionService
          .add({
            ...this.useForm.getRawValue(),
            nb_heures: duree,
            cours_id: cours.id,
          })
          .subscribe((res) => {
            console.log(res);
            let response = (res as any).data;  
            this.sessionData.push(response);
          });
      });
      this.resetForm();
    }else{
      this.selectedCours.forEach((cours) => {
        this.sessionService.update({
          ...this.useForm.getRawValue(),
          cours_id: cours.id,
          id: this.updatedSessionId,
          nb_heures: duree
        }).subscribe((res: any) => {
          this.sessionData[this.sessionData.findIndex(item => item?.id == res.data.id)] = res.data;          
          this.isEdit = false;
          this.resetForm();
        });
      });
    }
  }
  handleFormat(){
    if(this.useForm.get('en_ligne')?.value == 1){
      this.useForm.patchValue({
        salle_id: null
      })
    }else{
      this.useForm.patchValue({
        salle_id: 1
      })
    }
    }
    private resetForm() {
      this.useForm.reset();
      this.useForm.patchValue({ en_ligne: 1, salle_id: null });
      this.selectedCours = [];
    }
}
