import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-visuel-session',
  templateUrl: './visuel-session.component.html',
  styleUrls: ['./visuel-session.component.css']
})
export class VisuelSessionComponent implements OnInit {
constructor(private sessionService:SessionService, private userService: UserService){}
ngOnInit(): void {
  
}
}
