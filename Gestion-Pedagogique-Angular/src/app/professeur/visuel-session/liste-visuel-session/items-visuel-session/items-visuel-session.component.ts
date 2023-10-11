import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/interfaces/session';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: '[app-items-visuel-session]',
  templateUrl: './items-visuel-session.component.html',
  styleUrls: ['./items-visuel-session.component.css']
})
export class ItemsVisuelSessionComponent implements OnInit{
  @Input() user_id:number|undefined;
  @Input() session:Session|undefined;
  isNotificiationSent:boolean = false;
  done: boolean = false;
  constructor(private notification: NotificationsService){}
  ngOnInit(): void {

  }
  annulerCours(){
    this.isNotificiationSent = true;
    this.notification.sendCancelledNotification(this.user_id as number).subscribe((res)=>{
      this.isNotificiationSent = false;
      this.done = true;
    });
  }

}
