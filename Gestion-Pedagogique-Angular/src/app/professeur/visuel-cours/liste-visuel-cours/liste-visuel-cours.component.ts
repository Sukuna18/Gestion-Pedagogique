import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';

@Component({
  selector: 'app-liste-visuel-cours',
  templateUrl: './liste-visuel-cours.component.html',
  styleUrls: ['./liste-visuel-cours.component.css']
})
export class ListeVisuelCoursComponent implements OnInit{
  ngOnInit(): void {}
  constructor() { }
@Input() cours: Cours[] = [];
currentPage: number = 1;
itemsPerPage: number = 5;
get totalPages(): number {
  return Math.ceil(this.cours.length / this.itemsPerPage);
}
changePage(offset: number): void {
  const newPage = this.currentPage + offset;
  if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
}
}
setCurrentPage(pageNumber: number): void {
  if (pageNumber >= 1 && pageNumber <= this.totalPages) {
    this.currentPage = pageNumber;
  }
}

get paginatedArticles(): Cours[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.cours.slice(startIndex, startIndex + this.itemsPerPage);
}
}
