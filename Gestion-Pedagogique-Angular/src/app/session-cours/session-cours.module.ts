import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCoursRoutingModule } from './session-cours-routing.module';
import { SessionCoursComponent } from './session-cours.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeSessionComponent } from './liste-session/liste-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SessionCoursComponent,
    FormulaireComponent,
    ListeSessionComponent,
  ],
  imports: [
    CommonModule,
    SessionCoursRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SessionCoursModule { }
