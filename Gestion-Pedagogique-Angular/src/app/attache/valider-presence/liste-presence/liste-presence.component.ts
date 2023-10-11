import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { Session } from 'src/app/interfaces/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-liste-presence',
  templateUrl: './liste-presence.component.html',
  styleUrls: ['./liste-presence.component.css']
})
export class ListePresenceComponent implements OnInit{
  data: Session = {} as Session;
  isLoaded:boolean = true;
  students: User[] = [];
  constructor(private sessionService: SessionService, private route: ActivatedRoute) { }
ngOnInit(): void {
 this.route.params.subscribe(params => {
  const id = params['id'];
  this.sessionService.getById(id).subscribe((res: any) => {
    console.log(res.data);
    this.data = res.data;
    this.getStudentsBySession();
  }
  );
  
 });
}
getStudentsBySession() {

  this.sessionService.getUserBySession(this.data.id).subscribe((res: any) => {
    console.log(res.data);
    this.students = res.data;
    this.isLoaded = false;
  }
  );
}
}
