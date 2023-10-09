import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classe } from 'src/app/interfaces/classe';
import { Session } from 'src/app/interfaces/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-liste-session',
  templateUrl: './liste-session.component.html',
  styleUrls: ['./liste-session.component.css']
})
export class ListeSessionComponent implements OnInit{
  data: Session[] = [];
  today = new Date();
  currentPage: number = 1;
  itemsPerPage: number = 2;
  classes: Classe[] = [];
  constructor(private sessionService: SessionService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.sessionService.getAll().subscribe((data: any) => {  
      console.log(data.data);
      this.data = data.data;
    });
    this.route.data.subscribe(({data}) => {
      this.classes = data.classes;
    });
  }
filterByDate(e: any){
    this.sessionService.searchByDate((e.target.value)).subscribe((data: any) => {      
      this.data = data.data;
    });
}
deleteSession(id: number) {
  this.sessionService.delete(id).subscribe((data: any) => {
    this.data = this.data.filter((session) => session.id !== id);
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
    else{
      this.sessionService.getAnnulatedSessions().subscribe((session)=>{
        this.data = session.data
      })
    }
  });
}
filterByClasse(e: Event){
  this.sessionService.getSessionsByClass(+(e.target as HTMLSelectElement).value).subscribe((data: any) => {
    this.data = data.data;
  });
}
}
