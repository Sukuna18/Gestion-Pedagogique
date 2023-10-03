import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() data: Cours[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 2;

  ngOnInit(): void {}

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
