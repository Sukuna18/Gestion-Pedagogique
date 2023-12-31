import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { InscriptionsComponent } from './inscriptions.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeInscriptionsComponent } from './liste-inscriptions/liste-inscriptions.component';
import { ItemsInscriptionsComponent } from './liste-inscriptions/items-inscriptions/items-inscriptions.component';



@NgModule({
  declarations: [
    InscriptionsComponent,
    FormulaireComponent,
    ListeInscriptionsComponent,
    ItemsInscriptionsComponent
  ],
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class InscriptionsModule { }
