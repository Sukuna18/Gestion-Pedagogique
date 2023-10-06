import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCoursRoutingModule } from './session-cours-routing.module';
import { SessionCoursComponent } from './session-cours.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListeSessionComponent } from './liste-session/liste-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './liste-session/items/items.component';



@NgModule({
  declarations: [
    SessionCoursComponent,
    FormulaireComponent,
    ListeSessionComponent,
    ItemsComponent,
  ],
  imports: [
    CommonModule,
    SessionCoursRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SessionCoursModule { }
