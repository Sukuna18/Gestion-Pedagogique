import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';
import { CommunicationService } from 'src/app/services/communication.service';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  constructor(private coursService: CoursService, private shared: CommunicationService) { }
  data: Cours[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;

  ngOnInit(): void {
    this.coursService.getAll().subscribe((res: {data:Cours[]}) => {
      this.data = res.data;
    });
  }
  deleteCours(id: number) {
    this.coursService.delete(id).subscribe((res: any) => {
      this.data = this.data.filter((cours) => cours.id !== id);
    });
  }
  filtrerParEtat(e:Event) {
    const value = +(e.target as HTMLSelectElement).value;
    this.coursService.getAll().subscribe((res: {data:Cours[]}) => {
      value ? this.data = res.data.filter((cours) => cours.termine) : this.data = res.data.filter((cours) => !cours.termine);
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

  get paginatedArticles(): Cours[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }
}
