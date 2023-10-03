import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SessionCoursComponent } from './session-cours.component';

const routes:Routes = [
  {path: '', component: SessionCoursComponent},
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
