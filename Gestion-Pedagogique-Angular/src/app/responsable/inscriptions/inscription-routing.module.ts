import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionsComponent } from './inscriptions.component';
import { ListeInscriptionsComponent } from './liste-inscriptions/liste-inscriptions.component';

const routes: Routes = [
  {path: '', component: InscriptionsComponent},
  {path: 'liste', component: ListeInscriptionsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
