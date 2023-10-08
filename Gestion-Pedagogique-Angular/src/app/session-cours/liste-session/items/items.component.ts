import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/interfaces/session';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  ngOnInit(): void {}
@Input() data: Partial<Session> ={} 
@Output() deletedId: EventEmitter<number> = new EventEmitter();
constructor(private router: Router) { }
deleteItem(id: number | undefined) {
  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Supprimer',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      this.deletedId.emit(id as number);
    }
  })
}
  updateItem() {
    this.router.navigate(['sessions/edit', this.data.id]);
  }
}
