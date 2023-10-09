import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { coursResolver } from './resolver/cours.resolver';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PublicComponent } from './public/public.component';
import { UiDesignTestComponent } from './ui-design-test/ui-design-test.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'cours',
    loadChildren: () =>
      import('./responsable/cours/cours.module').then((m) => m.CoursModule),
    resolve: { cours: coursResolver },
    canActivate: [AuthGuardService],
    data: { roles: ['responsable'] },
  },
  {
    path: 'sessions',
    loadChildren: () =>
      import('./responsable/session-cours/session-cours.module')
      .then(
        (m) => m.SessionCoursModule
      ),
    canActivate: [AuthGuardService],
    data: { roles: ['responsable'] },
    resolve: { data: coursResolver },
  },
  {
    path: 'inscriptions', loadChildren: () => import('./responsable/inscriptions/inscriptions.module').then(m => m.InscriptionsModule),
    canActivate: [AuthGuardService],
    data: { roles: ['responsable'] },
  },
  {
    path: 'attache', loadChildren: () => import('./attache/attache.module').then(m => m.AttacheModule),
    canActivate: [AuthGuardService],
    data: { roles :['attache']}
  },
  {
    path: 'home', component: PublicComponent, 
  },
  {
    path:'test', component: UiDesignTestComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
