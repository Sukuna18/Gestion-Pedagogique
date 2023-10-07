import { Component, OnInit } from '@angular/core';
import { csvToJson } from '../shared/utils';
import { Etudiant } from '../interfaces/etudiant';
import { InscriptionService } from '../services/inscription.service';
import { AllService } from '../services/all.service';
import { Classe } from '../interfaces/classe';
import { Annee } from '../interfaces/annee';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css'],
})
export class InscriptionsComponent implements OnInit {
  classes: Classe[] = [];
  classe_id: number = 1;
  annees: Annee|undefined;
  ngOnInit(): void {
    this.allService.getAll().subscribe((res: any) => {
      this.classes = res.classes;
      this.annees = res.annees;
      console.log(this.classes);
    }
    );
    this.shared.inscriptionData.subscribe((etudiant: Etudiant[]) => {
      console.log(etudiant);
    });
  }
  constructor(private inscriptionService: InscriptionService, private allService: AllService, private shared: CommunicationService) {}

}
