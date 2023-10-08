import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/interfaces/session';
import { CommunicationService } from 'src/app/services/communication.service';
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
deleteSession(id: number) {
  this.sessionService.delete(id).subscribe((data: any) => {
    this.data = this.data.filter((session) => session.id !== id);
  });
}
get totalPages(): number {
  return Math.ceil(this.data.length / this.itemsPerPage);
}

setCurrentPage(pageNumber: number): void {
  if (pageNumber >= 1 && pageNumber <= this.totalPages) {
    this.currentPage = pageNumber;
  }
}

get paginatedArticles(): Session[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.data.slice(startIndex, startIndex + this.itemsPerPage);
}
filtrerByHour(e: any){
}
}
