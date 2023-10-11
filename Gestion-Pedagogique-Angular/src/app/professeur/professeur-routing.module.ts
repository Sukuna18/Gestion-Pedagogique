import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisuelSessionComponent } from './visuel-session/visuel-session.component';
import { VisuelCoursComponent } from './visuel-cours/visuel-cours.component';

const routes: Routes = [
  {path: 'cours', component: VisuelCoursComponent },
  {path: 'sessions', component: VisuelSessionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
