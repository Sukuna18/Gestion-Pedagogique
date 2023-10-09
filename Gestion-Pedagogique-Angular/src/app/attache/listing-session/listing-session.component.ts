import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from 'src/app/interfaces/module';
import { Session } from 'src/app/interfaces/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-listing-session',
  templateUrl: './listing-session.component.html',
  styleUrls: ['./listing-session.component.css']
})
export class ListingSessionComponent {
  all: Module[] = [];
  data: Session[] = [];
  heureDeroule:number|undefined
  today = new Date();
  constructor(private sessionService: SessionService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.sessionService.getAll().subscribe((data: any) => {  
      console.log(data.data);
      this.data = data.data;
      this.heureDeroule = data.data.reduce((acc:any, cours:Session) => {
        return acc + cours.nb_heures;
      }, 0);
    });
    this.route.data.subscribe(({data}) => {
      this.all = data.modules;
    });

  }
filterByDate(e: any){
    this.sessionService.searchByDate((e.target.value)).subscribe((data: any) => {      
      this.data = data.data;
      this.heureDeroule = this.data.reduce((acc, session) => {
        return acc + session.nb_heures;
      }, 0);
    });
}
filtrerByEtat(e:Event){
  const value = +(e.target as HTMLSelectElement).value;
  this.sessionService.getAll().subscribe((response: {data:Session[]}) => {
    if(value === 1){
      this.data = response.data.filter((session) => session.terminer)
    }else if(value === 0){
      this.data = response.data.filter((session) => !session.terminer)
    }
  });
}
filtrerParModule(e:Event){
  this.sessionService.filtrerParModule(+(e.target as HTMLSelectElement).value).subscribe((data: any) => {
    this.data = data.data;
    this.heureDeroule = this.data.reduce((acc, session) => {
      return acc + session.nb_heures;
    }, 0);
  });
}
filtrerParProfesseur(e:Event){}
}
