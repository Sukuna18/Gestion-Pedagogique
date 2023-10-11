import { Component, Input, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';

@Component({
  selector: '[app-items-visuel-cours]',
  templateUrl: './items-visuel-cours.component.html',
  styleUrls: ['./items-visuel-cours.component.css']
})
export class ItemsVisuelCoursComponent implements OnInit {
  ngOnInit(): void {
    
  }
@Input() cours: Cours|undefined;
}
