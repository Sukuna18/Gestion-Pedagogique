import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Etudiant } from '../interfaces/etudiant';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public inscriptionData = new Subject<Etudiant[]>();
  
  SendInscriptionData(data: Etudiant[]){
    this.inscriptionData.next(data);
  }
  
}
