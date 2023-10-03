import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { coursResolver } from './resolver/cours.resolver';

const routes: Routes = [
  {path: '', redirectTo: 'cours', pathMatch: 'full'},
  {path: 'cours', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule), resolve: {cours: coursResolver}},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
