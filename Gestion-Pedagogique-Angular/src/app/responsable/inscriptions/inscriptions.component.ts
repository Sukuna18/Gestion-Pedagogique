import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/interfaces/etudiant';
import { AllService } from 'src/app/services/all.service';
import { Classe } from 'src/app/interfaces/classe';
import { Annee } from 'src/app/interfaces/annee';
import { CommunicationService } from 'src/app/services/communication.service';

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
  constructor(private allService: AllService, private shared: CommunicationService) {}

}
