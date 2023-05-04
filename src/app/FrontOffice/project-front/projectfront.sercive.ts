import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProjectF } from 'src/app/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectfrontService {

  API_URL="http://localhost:8086/Project/addProject"

  constructor(private http:HttpClient) { }
  addProject(project: ProjectF): Observable<ProjectF> {
    return this.http.post<ProjectF>(this.API_URL, project);
}
}
