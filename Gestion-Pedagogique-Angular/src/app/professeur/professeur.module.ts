import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import { VisuelSessionComponent } from './visuel-session/visuel-session.component';
import { VisuelCoursComponent } from './visuel-cours/visuel-cours.component';
import { ListeVisuelCoursComponent } from './visuel-cours/liste-visuel-cours/liste-visuel-cours.component';
import { ListeVisuelSessionComponent } from './visuel-session/liste-visuel-session/liste-visuel-session.component';
import { ItemsVisuelSessionComponent } from './visuel-session/liste-visuel-session/items-visuel-session/items-visuel-session.component';
import { ItemsVisuelCoursComponent } from './visuel-cours/liste-visuel-cours/items-visuel-cours/items-visuel-cours.component';


@NgModule({
  declarations: [
    VisuelSessionComponent,
    VisuelCoursComponent,
    ListeVisuelCoursComponent,
    ListeVisuelSessionComponent,
    ItemsVisuelSessionComponent,
    ItemsVisuelCoursComponent
  ],
  imports: [
    CommonModule,
    ProfesseurRoutingModule
  ]
})
export class ProfesseurModule { }
