import { ProjectfrontService } from './projectfront.sercive';
import { ProjectF } from "src/app/project.model";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-front',
  templateUrl: './project-front.component.html',
  styleUrls: ['./project-front.component.css']
})
export class ProjectFrontComponent implements OnInit {

  isAdding = false;

  Project: ProjectF = new ProjectF();
  clientId: number=0;

  constructor(private ProjectfrontService: ProjectfrontService) { }

  ngOnInit(): void {}

  addProject() {
    this.ProjectfrontService.addProject(this.Project,this.clientId).subscribe(
      (result) => {
        console.log('Project added successfully:', result);
        this.isAdding = false;
        this.Project = new ProjectF(); // Empty the form
      },
      (error) => {
        console.error('Failed to add project:', error);
        this.isAdding = false;
      }
    );
  }

  onSubmit() {
    this.addProject();
  }

}
