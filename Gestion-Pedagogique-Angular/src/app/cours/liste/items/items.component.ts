import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: '[app-items]',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
@Input() cours: Cours|undefined;
  constructor(private CommunicationService: CommunicationService) { }

  ngOnInit(): void {  }
  deleteItems(id:number|undefined){
    this.CommunicationService.SendDeletedCours(id);
  }
  editItems(id:number|undefined){
    
  }
}
