import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    constructor(private service:ProjectService) { }
  listP:any =[];

  ngOnInit(): void {
    this.service.getProjects().subscribe(res=>{console.log(res);
      this.listP=res});
  }
  }


