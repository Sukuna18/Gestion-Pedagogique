import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingSessionComponent } from './listing-session/listing-session.component';
import { SessionItemsComponent } from './listing-session/session-items/session-items.component';
import { FormsModule } from '@angular/forms';
import { AttacheRoutingModule } from './attache-routing.module';



@NgModule({
  declarations: [
    ListingSessionComponent,
    SessionItemsComponent
  ],
  imports: [
    CommonModule,
    AttacheRoutingModule,
    FormsModule
  ]
})
export class AttacheModule { }
