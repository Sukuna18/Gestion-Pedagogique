import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from '../interfaces/cours';
import { CommunicationService } from '../services/communication.service';
import { Classe } from '../interfaces/classe';
import { Module } from '../interfaces/module';
import { Professeur } from '../interfaces/professeur';
import { Annee } from '../interfaces/annee';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit{
  data: { cours: Cours[], classes: Classe[], modules:Module[], professeurs: Professeur[], annees: Annee[]}|undefined; 
  constructor(private activatedRoute: ActivatedRoute, private communicationService: CommunicationService, private coursService:CoursService) { }
ngOnInit(): void {
  this.activatedRoute.data.subscribe(({cours}) =>{
    this.data = cours;
  });
  this.communicationService.cours.subscribe((data:Cours) =>{ 
    this.coursService.add(data).subscribe((cours:any) => {
      this.data?.cours.push(cours.data as Cours);
    });
  }
  );
}
}
