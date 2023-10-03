import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cours } from 'src/app/interfaces/cours';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit{
  isEdit:boolean = false;
  upatedId:number|undefined;
  @Input() data:any = [];
  useForm:FormGroup = this.fb.group({
    classe_id: [1],
    professeur_id: [1],
    module_id: [1],
    semestre_id: [1],
    heure_globale: [0],
  });
ngOnInit(): void {
  this.communicationService.updatedCours.subscribe((data:Cours) => {
    console.log(data);
    this.upatedId = data.id;
    this.isEdit = true;
    this.useForm.patchValue({
      classe_id: data.classe.id,
      professeur_id: data.professeur.id,
      module_id: data.module.id,
      semestre_id: data.semestre.id,
      heure_globale: data.heure_globale,
    });
  }
  );
}
constructor(private fb:FormBuilder, private communicationService: CommunicationService) { }
  addCours(){
    this.communicationService.SendCours(this.useForm.getRawValue());
  }
  editerCours(){
    this.communicationService.SendModifiedCours({...this.useForm.getRawValue(), id: this.upatedId});
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
