import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';
import { CommunicationService } from 'src/app/services/communication.service';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
@Input() cours: Cours = {} as Cours;
  constructor(private CommunicationService: CommunicationService) { }

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
        this.CommunicationService.SendDeletedCours(id);
      }
    })
  }
  editItems(){
    this.CommunicationService.SendUpdatedCours(this.cours as Cours);
  }
}
