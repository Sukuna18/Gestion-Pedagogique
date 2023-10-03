import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cours } from '../interfaces/cours';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public cours = new Subject<Cours>();
  public deletedCoursId = new Subject<number|undefined>();
  SendDeletedCours(id:number|undefined){
    this.deletedCoursId.next(id);
  }
  SendCours(data: Cours){
    this.cours.next(data);
  }
}
