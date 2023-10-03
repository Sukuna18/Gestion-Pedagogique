import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
@Input() data: Cours[]|undefined;
ngOnInit(): void {
  console.log(this.data);
  
}
}
