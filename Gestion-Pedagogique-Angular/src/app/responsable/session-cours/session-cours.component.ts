import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annee } from 'src/app/interfaces/annee';
import { Classe } from 'src/app/interfaces/classe';
import { Cours } from 'src/app/interfaces/cours';
import { Module } from 'src/app/interfaces/module';
import { Professeur } from 'src/app/interfaces/professeur';
import { Salle } from 'src/app/interfaces/salle';
import { Semestre } from 'src/app/interfaces/semestre';

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
