import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { InscriptionService } from 'src/app/services/inscription.service';
import Swal from 'sweetalert2';

@Component({
  selector: '[app-items-inscriptions]',
  templateUrl: './items-inscriptions.component.html',
  styleUrls: ['./items-inscriptions.component.css'],
})
export class ItemsInscriptionsComponent {
 @Input() user: User | undefined;
 @Output() deletedId: EventEmitter<number> = new EventEmitter();
 deleteItem(){
  Swal.fire({
    title: 'Vous êtes sûr?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimez-le!',
    cancelButtonText: 'Non, garde-le'
  }).then((result) => {
    if (result.isConfirmed) {
      this.deletedId.emit(this.user?.id);
    }})
  }
}
