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
  @Input() data:any = [];
  useForm:FormGroup = this.fb.group({
    classe_id: [1],
    professeur_id: [1],
    module_id: [1],
    semestre_id: [1],
    heure_globale: [0],
  });
ngOnInit(): void {}
constructor(private fb:FormBuilder, private communicationService: CommunicationService) { }
  addCours(){
    this.communicationService.SendCours(this.useForm.getRawValue());
  }
}
