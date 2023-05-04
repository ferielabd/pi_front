import { ProjectfrontService } from './projectfront.sercive';
import { ProjectF } from "src/app/project.model";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-front',
  templateUrl: './project-front.component.html',
  styleUrls: ['./project-front.component.css']
})
export class ProjectFrontComponent implements OnInit {
  
  Project:ProjectF=new ProjectF();
  constructor(private ProjectfrontService: ProjectfrontService) { }

  ngOnInit(): void {}

  addProject() {
    this.ProjectfrontService.addProject(this.Project).subscribe(
      (result) => {
        console.log('Project added successfully:', result);
      },
      (error) => {
        console.error('Failed to add project:', error);
      }
    );
  }


}
