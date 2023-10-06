import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  changePage(offset: number): void {
    const newPage = this.currentPage + offset;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.pageChange.emit(newPage);
    }
  }
  // get totalPages(): number {
  //   return Math.ceil(this.data.length / this.itemsPerPage);
  // }
  
  // setCurrentPage(pageNumber: number): void {
  //   if (pageNumber >= 1 && pageNumber <= this.totalPages) {
  //     this.currentPage = pageNumber;
  //   }
  // }

  // get paginatedArticles(): Cours[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  // }
}