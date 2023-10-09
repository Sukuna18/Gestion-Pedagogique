import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { CoursRoutingModule } from './cours-routing.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CoursComponent } from './cours.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeComponent } from './liste/liste.component';
import { ItemsComponent } from './liste/items/items.component';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component'; 



@NgModule({
  declarations: [
    CoursComponent,
    FormulaireComponent,
    ListeComponent,
    ItemsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CoursModule { }
