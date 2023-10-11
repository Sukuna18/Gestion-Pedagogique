import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public inscriptionData = new Subject<User[]>();
  
  SendInscriptionData(data: User[]){
    this.inscriptionData.next(data);
  }
  
}
