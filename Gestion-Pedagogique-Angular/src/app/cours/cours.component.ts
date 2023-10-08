import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from '../interfaces/cours';
import { Classe } from '../interfaces/classe';
import { Module } from '../interfaces/module';
import { Professeur } from '../interfaces/professeur';
import { Annee } from '../interfaces/annee';
import { Semestre } from '../interfaces/semestre';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit{
  data: { cours: Cours[], classes: Classe[], modules:Module[], professeurs: Professeur[], annees: Partial<Annee>, semestres:Semestre[]} = {cours: [], classes: [], modules:[], professeurs:[], annees:{}, semestres: []}; 
  constructor(private activatedRoute: ActivatedRoute) { }
ngOnInit(): void {
  this.activatedRoute.data.subscribe(({cours}) =>{
    this.data = cours;
  });
}
}
