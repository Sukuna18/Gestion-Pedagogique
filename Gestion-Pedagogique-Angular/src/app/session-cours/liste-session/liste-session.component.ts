import { Component, OnInit } from '@angular/core';
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
  constructor(private shared: CommunicationService, private sessionService: SessionService) { }
  ngOnInit(): void {
    this.shared.sessionData.subscribe(data => {  
      this.data = data;
    });
    this.shared.sessionId.subscribe((id) => {
      this.sessionService.delete(id).subscribe(response => {
        this.data = this.data.filter(item => item.id !== id);
      });
    });
  }
filterByDate(e: any){
    this.sessionService.searchByDate((e.target.value)).subscribe((data: any) => {      
      this.data = data.data;
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
}
