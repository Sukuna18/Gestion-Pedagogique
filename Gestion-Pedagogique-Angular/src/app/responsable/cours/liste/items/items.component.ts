import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from 'src/app/interfaces/cours';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
@Input() cours: Cours = {} as Cours;
@Output() deletedId: EventEmitter<number> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {  }
  deleteItems(id:number|undefined){
    Swal.fire({
      title: 'Vouller vous vraiment supprimer ce cours',
      text: "Cette action est irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Annuler',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletedId.emit(id as number);
      }
    })
  }
  editItems(){
    this.router.navigate(['/cours/edit', this.cours.id]);
  }
}
