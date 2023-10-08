import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours.component';
import { ListeComponent } from './liste/liste.component';

const routes:Routes = [
  {path: '', component: CoursComponent},
  {path: 'edit/:id', component: CoursComponent},
  {path: 'liste', component: ListeComponent}
 

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
