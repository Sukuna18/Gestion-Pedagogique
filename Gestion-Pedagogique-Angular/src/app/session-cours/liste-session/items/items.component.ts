import { Component, Input } from '@angular/core';
import { Session } from 'src/app/interfaces/session';
import { CommunicationService } from 'src/app/services/communication.service';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
@Input() data: Partial<Session> ={} 
constructor(private shared: CommunicationService) { }
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
      this.shared.SendSessionId(id as number);
    }
  })
}
  updateItem() {
    this.shared.SendUpdatedSession(this.data as Session);
  }
}
