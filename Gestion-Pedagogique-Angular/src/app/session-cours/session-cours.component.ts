import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annee } from '../interfaces/annee';
import { Classe } from '../interfaces/classe';
import { Cours } from '../interfaces/cours';
import { Module } from '../interfaces/module';
import { Professeur } from '../interfaces/professeur';
import { Salle } from '../interfaces/salle';
import { CommunicationService } from '../services/communication.service';
import { Semestre } from '../interfaces/semestre';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-cours',
  templateUrl: './session-cours.component.html',
  styleUrls: ['./session-cours.component.css']
})
export class SessionCoursComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  data: { cours: Cours[], salles: Salle[], classes: Classe[], modules:Module[], professeurs: Professeur[], annees: Annee, semestres: Semestre[]} = {cours: [], classes: [], modules:[], professeurs:[],salles:[], semestres:[], annees:Object.create(null)}; 
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {
      this.data = data;
    });
  }

    
}
