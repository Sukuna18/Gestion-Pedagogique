import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListingSessionComponent } from './listing-session/listing-session.component';
import { ValiderPresenceComponent } from './valider-presence/valider-presence.component';
const routes:Routes =[
  {path: '', component: ListingSessionComponent},
  {path: 'presence/:id', component: ValiderPresenceComponent}
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
