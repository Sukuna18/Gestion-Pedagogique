import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingSessionComponent } from './listing-session/listing-session.component';
import { SessionItemsComponent } from './listing-session/session-items/session-items.component';
import { FormsModule } from '@angular/forms';
import { AttacheRoutingModule } from './attache-routing.module';
import { ValiderPresenceComponent } from './valider-presence/valider-presence.component';
import { ListePresenceComponent } from './valider-presence/liste-presence/liste-presence.component';
import { ItemsPresenceComponent } from './valider-presence/liste-presence/items-presence/items-presence.component';



@NgModule({
  declarations: [
    ListingSessionComponent,
    SessionItemsComponent,
    ValiderPresenceComponent,
    ListePresenceComponent,
    ItemsPresenceComponent
  ],
  imports: [
    CommonModule,
    AttacheRoutingModule,
    FormsModule
  ]
})
export class AttacheModule { }
