import { Injectable } from '@angular/core';
import { RequestSharedService } from './request-shared.service';
import { RestResponse } from '../interfaces/rest-response';
import { Session } from '../interfaces/session';
import { environment } from '../shared/environement';
import { catchError, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends RequestSharedService<RestResponse<Partial<Session>>> {

  override uri(): string {
    return 'sessions';
  }
  searchByDate(date:string){
    return this.http.get(environment.api.baseUrl + `/${this.uri()}?date=${date}`);
  }
  getAnnulatedSessions(){
    return this.http.get('http://127.0.0.1:8000/api/deleted-session').pipe(
      tap((res: any) => {
        console.log(res.data);
      }),
      catchError(this.handleError)
    );
  }
  validerSession(id:number|undefined){
    return this.http.put(`http://127.0.0.1:8000/api/sessions/valide/${id}`, null).pipe(
      tap((res: any) => {
        console.log(res.data);
        Swal.fire({
          title: "Succès",
          icon: "success",
          text: "valider avec succès"
        })
      }),
      catchError(this.handleError)
    );
  }
  invaliderSession(id:number|undefined){
    return this.http.put(`http://127.0.0.1:8000/api/sessions/invalide/${id}`,null).pipe(
      tap((res: any) => {
        console.log(res.data);
        Swal.fire({
          title: "Succès",
          icon: "success",
          text: "invalider avec succès"

        })
      }),
      catchError(this.handleError)
    );
  }
  filtrerParModule(id:number|undefined){
    return this.http.get(`http://127.0.0.1:8000/api/sessions/modules/${id}`).pipe(
      tap((res: any) => {
        console.log(res.data);
      }),
      catchError(this.handleError)
    );
  }
  getStudentsBySession(id:number|undefined){
    return this.http.get(`http://127.0.0.1:8000/api/sessions/eleves/${id}`).pipe(
      tap((res: any) => {
        console.log(res.data);
      }),
      catchError(this.handleError)
    );
  }
  getSessionsByProfesseur(id:number|undefined){}
  getSessionsByClass(id:number|undefined){
    return this.http.get(`http://127.0.0.1:8000/api/sessions/classes/${id}`).pipe(
      tap((res: any) => {
        console.log(res.data);
      }),
      catchError(this.handleError)
    );
  }
}
