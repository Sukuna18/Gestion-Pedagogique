import { Injectable } from '@angular/core';
import { RequestSharedService } from './request-shared.service';
import { RestResponse } from '../interfaces/rest-response';
import { Etudiant } from '../interfaces/etudiant';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService extends RequestSharedService<RestResponse<Partial<Etudiant>>> {
override uri(): string {
    return 'inscriptions';
}
addInscriptions(etudiants: Etudiant[], classe_id: number, annee_scolaire_id: number) {
  const httpOptions = {
    headers: { 'Content-Type': 'application/json' },
  };
  return this.http.post('http://127.0.0.1:8000/api/inscriptions', {etudiants, classe_id, annee_scolaire_id}, httpOptions).pipe(
    tap((res: any) => {
      console.log(res);
    }
    ),
    catchError(this.handleError),
  );
}
}
