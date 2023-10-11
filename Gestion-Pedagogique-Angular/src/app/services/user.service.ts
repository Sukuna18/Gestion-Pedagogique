import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp:HttpClient) { }
  getConnectedUser(){
    return this.htpp.get('http://127.0.0.1:8000/api/user').pipe(
      tap((response:any)=>{
        console.log(response);
      }),
      catchError(error=>{
        throw error;
      }
      )
    );
  }
}
