import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { coursResolver } from './resolver/cours.resolver';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'cours',
    loadChildren: () =>
      import('./cours/cours.module').then((m) => m.CoursModule),
    resolve: { cours: coursResolver },
    canActivate: [AuthGuardService],
    data: { roles: ['responsable'] },
  },
  {
    path: 'sessions',
    loadChildren: () =>
      import('./session-cours/session-cours.module').then(
        (m) => m.SessionCoursModule
      ),
    canActivate: [AuthGuardService],
    data: { roles: ['responsable'] },
    resolve: { data: coursResolver },
  },
  {
    path: 'home', component: PublicComponent, 
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
