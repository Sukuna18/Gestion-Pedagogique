import { Injectable } from '@angular/core';
import { RequestSharedService } from './request-shared.service';
import { RestResponse } from '../interfaces/rest-response';
import { Cours } from '../interfaces/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends RequestSharedService<RestResponse<Partial<Cours>>> {
    override uri(): string {
      return 'cours';
    }
}
