import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-liste-inscriptions',
  templateUrl: './liste-inscriptions.component.html',
  styleUrls: ['./liste-inscriptions.component.css']
})
export class ListeInscriptionsComponent implements OnInit{
  data: User[] = [];
  isLoaded: boolean = true;
ngOnInit(): void {
  this.getAll();
}
constructor(private inscriptionService:InscriptionService) { 
}
getAll(){
  this.inscriptionService.getAll().subscribe((res)=>{
    console.log(res);
    this.isLoaded = false;
    this.data = res.data;
  })
}
deleteUser(id: number){
  this.inscriptionService.delete(id).subscribe((res)=>{
    this.data = this.data.filter((user)=>user.id !== id);
      console.log(res);

  })
}
currentPage: number = 1;
itemsPerPage: number = 5;
get totalPages(): number {
  return Math.ceil(this.data.length / this.itemsPerPage);
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

get paginatedArticles(): User[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  return this.data.slice(startIndex, startIndex + this.itemsPerPage);
}
}
