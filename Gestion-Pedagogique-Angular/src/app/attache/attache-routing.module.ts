import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListingSessionComponent } from './listing-session/listing-session.component';
const routes:Routes =[
  {path: '', component: ListingSessionComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AttacheRoutingModule { }
