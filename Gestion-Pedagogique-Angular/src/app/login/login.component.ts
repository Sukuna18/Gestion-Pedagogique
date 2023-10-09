import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  token: string|null = '';
  Users: any = [];
  role:any;
  constructor(private authService: AuthService, private route: Router) {}
  ngOnInit(): void {}
  loginAccount() {
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password).subscribe((response: any) => {
     if(response.token){
        this.role = this.authService.getUserRole();
          let match = this.role.some((r: any) => ['responsable', 'attache', 'professeur'].includes(r));
          if(match){
            this.route.navigate(['/home']);
          }
      Swal.fire({
        icon: 'success',
        title: 'Connexion réussie !',
        showConfirmButton: false,
        timer: 1500
      });
     }else{
      return;
     }
    });
  }
}

