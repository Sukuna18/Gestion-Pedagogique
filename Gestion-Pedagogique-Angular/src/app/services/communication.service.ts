import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cours } from '../interfaces/cours';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  public cours = new Subject<Cours>();
  public deletedCoursId = new Subject<number|undefined>();
  public updatedCours = new Subject<Cours>();
  public modifiedCours = new Subject<Cours>();
  public sessionData = new Subject<Session[]>();
  public sessionId = new Subject<number>();
  public updatedSession = new Subject<Session>();
  public doneUpdate = new Subject<Session>();

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
  SendSessionData(data: Session[]){
    this.sessionData.next(data);
  }
  SendSessionId(id: number){
    this.sessionId.next(id);
  }
  SendUpdatedSession(data: Session){
    this.updatedSession.next(data);
  }
  SendDoneUpdate(data: Session){
    this.doneUpdate.next(data);
  }
  
}
