import { Component, Input, OnInit } from '@angular/core';
import { Annee } from 'src/app/interfaces/annee';
import { Classe } from 'src/app/interfaces/classe';
import { Etudiant } from 'src/app/interfaces/etudiant';
import { CommunicationService } from 'src/app/services/communication.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { csvToJson } from 'src/app/shared/utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  etudiants: Etudiant[] = [];
  @Input() classes: Classe[] = [];
  classe_id: number = 1;
  isFileSelected: boolean = false;
  @Input() annees: Annee|undefined;
  ngOnInit(): void {}
  constructor(private inscriptionService: InscriptionService, private shared:CommunicationService) {}
  handleImport(e: Event) {
    let files = (e.target as HTMLInputElement).files;
    if (!files) return;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
     let json =  csvToJson(reader.result as string);
     console.log(json);
     this.etudiants = json as Etudiant[];
    };
    this.isFileSelected = true;
  }
  addStudent() {
    console.log(this.etudiants, this.classe_id, this.annees?.id);
    
    this.inscriptionService.addInscriptions(this.etudiants, this.classe_id, this.annees?.id as number).subscribe((res: any) => {
      console.log(res);
      Swal.fire({
        title : 'Succès',
        icon : 'success',
        text : 'Insriptions effectuées avec succès',
    });   
   }
    );
    
  }
}
