import { Injectable } from '@angular/core';
import { RequestSharedService } from './request-shared.service';
import { RestResponse } from '../interfaces/rest-response';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends RequestSharedService<RestResponse<Partial<Session>>> {

  override uri(): string {
    return 'sessions';
  }
}
