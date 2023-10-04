import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http.post('http://127.0.0.1:8000/api/login', { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        console.log(response.user.role);
        localStorage.setItem('role', JSON.stringify(response.user.role)); 
      }
      ),
      catchError((error) => { 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login ou mot de passe incorrecte !',
        });
        throw error;
      })
    );

  }

  logout() {
    return this.http.post('http://127.0.0.1:8000/api/logout', {}).pipe(
      tap((response)=>{
        console.log(response);
        
      }),
      catchError(error =>{
        throw error;
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getUserRole(): string[] | null {
    let roles = localStorage.getItem('role');
    if(!roles)    return null;
    console.log(roles);
    
    return JSON.parse(roles);
  }
}
