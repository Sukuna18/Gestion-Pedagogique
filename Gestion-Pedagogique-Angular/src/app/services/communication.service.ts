import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cours } from '../interfaces/cours';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public cours = new Subject<Cours>();
  public deletedCoursId = new Subject<number|undefined>();
  public updatedCours = new Subject<Cours>();
  public modifiedCours = new Subject<Cours>();
  public role = new BehaviorSubject<any>(null);

  SendDeletedCours(id:number|undefined){
    this.deletedCoursId.next(id);
  }
  SendCours(data: Cours){
    this.cours.next(data);
  }
  SendUpdatedCours(data: Cours){
    this.updatedCours.next(data);
  }
  SendModifiedCours(data: Cours){
    this.modifiedCours.next(data);
  }
  SendRole(data: any){
    this.role.next(data);
  }
  
}
