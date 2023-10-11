import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/interfaces/module';
import { Session } from 'src/app/interfaces/session';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-visuel-session',
  templateUrl: './liste-visuel-session.component.html',
  styleUrls: ['./liste-visuel-session.component.css']
})
export class ListeVisuelSessionComponent implements OnInit {
  @Input() sessions: Session[] = [];
  schedule: any = new Date().toISOString().substring(0, 10);
  userId: number|undefined;
  modules:Module[] = []
  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe((res)=>{
      this.userId = res.data.id;
      this.sessionService.getSessionsByProfesseur(this.userId, this.schedule).subscribe((res) =>{
        this.sessions = res.data;
        console.log(res);
      })
    })
    this.route.data.subscribe(({data}) => {
      this.modules = data.modules;
    });
  }
  constructor(private sessionService: SessionService, private userService:UserService, private route:ActivatedRoute) { }
filterByDate(){
    this.sessionService.getSessionsByProfesseur(this.userId,this.schedule).subscribe((data: any) => {      
      this.sessions = data.data;
    });
}
filtrerParModule(e:Event){ 
  this.sessionService.filtrerParProfModule(+(e.target as HTMLSelectElement).value, this.userId as number).subscribe((res:{data: Session[]}) => {
    this.sessions = res.data;
    console.log(this.sessions);
    
  });
}
}
