import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/interfaces/session';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-session-items]',
  templateUrl: './session-items.component.html',
  styleUrls: ['./session-items.component.css']
})
export class SessionItemsComponent {
  ngOnInit(): void {
   this.tempsRestant = (this.data.cours?.heure_globale as number) - (this.data.nb_heures  as number)
  }
  isValidate: boolean = false;
@Input() data: Partial<Session> ={} 
@Output() deletedId: EventEmitter<number> = new EventEmitter();
tempsRestant: number|undefined;
@Input() heureDeroule:number|undefined
constructor(private router: Router, private sessionService: SessionService) { }

validerSession(){
  this.sessionService.validerSession(this.data.id).subscribe((res)=>{
    this.isValidate = true
  });
}
invaliderSession(){
  this.sessionService.invaliderSession(this.data.id).subscribe((res)=>{
    this.isValidate = false
  });
}
getPresence(){
  this.router.navigate(['/attache/presence', this.data.id]);
}

}
