import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Annee } from 'src/app/interfaces/annee';
import { Classe } from 'src/app/interfaces/classe';
import { Cours } from 'src/app/interfaces/cours';
import { Module } from 'src/app/interfaces/module';
import { Professeur } from 'src/app/interfaces/professeur';
import { Semestre } from 'src/app/interfaces/semestre';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit{
  isEdit:boolean = false;
  upatedId:number|undefined;
  @Input()  data: { cours: Cours[], classes: Classe[], modules:Module[], professeurs: Professeur[], annees: Partial<Annee>, semestres: Semestre[]} = {cours: [], classes: [], modules:[], professeurs:[], annees:{}, semestres: []}; 

  useForm:FormGroup = this.fb.group({
    classe_id: [1],
    professeur_id: [1],
    module_id: [1],
    semestre_id: [1],
    heure_globale: [0],
  });

  ngOnInit(): void {
    console.log(this.data);
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.isEdit = true;
        this.upatedId = id;
        this.coursService.getById(id).subscribe((response: any) => {
          this.useForm.patchValue({
            classe_id: response.data.classe.id, 
            professeur_id: response.data.professeur.id, 
            module_id: response.data.module.id, 
            semestre_id: response.data.semestre.id, 
            heure_globale: response.data.heure_globale, 
          });
        });
      } else {
        // Mode d'ajout : utilisez les valeurs par défaut
        this.isEdit = false;
        this.upatedId = undefined;
        this.useForm.patchValue({
          classe_id: 1, 
          professeur_id: 1, 
          module_id: 1, 
          semestre_id: 1, 
          heure_globale: 0, 
        });
      }
      console.log(this.useForm.getRawValue());
    });
  }
  
constructor(private fb:FormBuilder, private route:ActivatedRoute, private coursService: CoursService) { }
  addCours(){
    this.coursService.add(this.useForm.getRawValue()).subscribe();
  }
  editerCours(){
    this.coursService.update({...this.useForm.getRawValue(), id: this.upatedId}).subscribe();
    this.isEdit = false;
  }
  handleGlobalHour(){
    if(this.useForm.value.heure_globale < 0 || typeof this.useForm.value.heure_globale !== 'number'){
      this.useForm.patchValue({
        heure_globale: 0
      });
    }
    if(this.useForm.value.heure_globale > 100){
      this.useForm.patchValue({
        heure_globale: 100
      });
    }
  }
}
