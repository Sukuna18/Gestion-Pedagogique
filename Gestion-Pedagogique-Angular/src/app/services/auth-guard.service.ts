import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    const userRoles = this.auth.getUserRole();
    const roles = next.data['roles'] as Array<string>;

    if(userRoles && roles){
      const match = userRoles.some(r=> roles.includes(r));
      if(!match){
        this.router.navigate(['home']);
        return false;
      }
    }

    return true;
  }
}
