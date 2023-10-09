import { Component } from '@angular/core';
import { Session } from 'src/app/interfaces/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-listing-session',
  templateUrl: './listing-session.component.html',
  styleUrls: ['./listing-session.component.css']
})
export class ListingSessionComponent {
  data: Session[] = [];
  today = new Date();
  currentPage: number = 1;
  itemsPerPage: number = 2;
  constructor(private sessionService: SessionService) { }
  ngOnInit(): void {
    this.sessionService.getAll().subscribe((data: any) => {  
      console.log(data.data);
        
      this.data = data.data;
    });
  }
filterByDate(e: any){
    this.sessionService.searchByDate((e.target.value)).subscribe((data: any) => {      
      this.data = data.data;
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
}
