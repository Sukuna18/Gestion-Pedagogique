import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Session } from 'src/app/interfaces/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: '[app-items-presence]',
  templateUrl: './items-presence.component.html',
  styleUrls: ['./items-presence.component.css']
})
export class ItemsPresenceComponent {
@Input() data: User = {} as User;
@Input() session: Session = {} as Session;
constructor(private sessionService: SessionService) { }
handlePresence(){
  this.sessionService.updatePresence(this.data.id as number).subscribe((res: any) => {
    this.data.present = res.presence;
  });
}
}
