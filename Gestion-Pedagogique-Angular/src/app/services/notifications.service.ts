import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http:HttpClient) { }
  sendCancelledNotification(id:number){
    return this.http.get(`http://127.0.0.1:8000/api/mail/annuler/${id}`).pipe(
      tap((res:any)=>{
        Swal.fire({
          icon: 'success',
          title: 'Notification envoyée',
          text: 'La notification a été envoyée avec succès',
          showConfirmButton: false,
          timer: 1500
        })
      }),
      catchError((err)=>{
        throw err;
      })
    );
  }
  
}
