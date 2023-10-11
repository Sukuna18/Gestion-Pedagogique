import { Injectable } from '@angular/core';
import { RequestSharedService } from './request-shared.service';
import { RestResponse } from '../interfaces/rest-response';
import { Cours } from '../interfaces/cours';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends RequestSharedService<RestResponse<Partial<Cours>>> {
    override uri(): string {
      return 'cours';
    }
    getCoursByProfesseurId(id: number){
      return this.http.get(`http://127.0.0.1:8000/api/cours/professeur/${id}`).pipe(
        tap((res)=>{
          console.log(res);
        }
      ),
      catchError(this.handleError)
      );
    }
}
