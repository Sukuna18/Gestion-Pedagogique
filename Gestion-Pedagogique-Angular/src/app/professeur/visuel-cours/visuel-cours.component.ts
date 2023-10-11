import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/interfaces/cours';
import { CoursService } from 'src/app/services/cours.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-visuel-cours',
  templateUrl: './visuel-cours.component.html',
  styleUrls: ['./visuel-cours.component.css']
})
export class VisuelCoursComponent implements OnInit {
  userInfo: any;
  data: Cours[] = [];
    constructor(private userService: UserService, private coursService: CoursService) { }

    ngOnInit(): void {
      this.userService.getConnectedUser().subscribe((res)=>{
        this.userInfo = res.data;
        console.log(this.userInfo);
        this.coursService.getCoursByProfesseurId(this.userInfo.id).subscribe((res:any)=>{
          this.data = res.data;
        });
      });
    }

}
