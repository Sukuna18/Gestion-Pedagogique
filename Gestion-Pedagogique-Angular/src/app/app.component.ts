import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userInfo: any = {};
  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe((res:any) => {     
      this.userInfo = res.data;
    });
  }
  title = 'Gestion-Pedagogique-Angular';
  constructor(private authService: AuthService,  private router: Router, private userService:UserService) {  }
  logout(){
    Swal.fire({
      title: 'Déconnexion',
      text: "Voulez-vous vraiment vous déconnecter ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().subscribe();
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.router.navigate(['/login']);
      }
    })
  }
  isLogin(){
    if(this.router.url === '/login' || this.router.url === '/inscription') return true;
    return false;
  }
  isResponsable():boolean{
    let roles = localStorage.getItem('role');
    if(roles){
      if(JSON.parse(roles).includes('responsable')){
        return true;
      }
    }
    return false;
  }
  isAttache(){
    let roles = localStorage.getItem('role');
    if(roles){
      if(JSON.parse(roles).includes('attache')){
        return true;
      }
    }
    return false;
  }
  isProfesseur(){
    let roles = localStorage.getItem('role');
    if(roles){
      if(JSON.parse(roles).includes('professeur')){
        return true;
      }
    }
    return false;
  }
}
