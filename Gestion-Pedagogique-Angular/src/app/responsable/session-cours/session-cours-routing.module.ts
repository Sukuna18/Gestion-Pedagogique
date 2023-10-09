import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SessionCoursComponent } from './session-cours.component';
import { ListeSessionComponent } from './liste-session/liste-session.component';

const routes:Routes = [
  {path: '', component: SessionCoursComponent},
  {path: 'edit/:id', component: SessionCoursComponent},
  {path: 'liste', component: ListeSessionComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class SessionCoursRoutingModule { }
