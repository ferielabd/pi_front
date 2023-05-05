import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProjectF } from 'src/app/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectfrontService {

  API_URL="http://localhost:8086/Project/addprojects"

  constructor(private http:HttpClient) { }
  addProject(project: ProjectF, clientId: number): Observable<ProjectF> {
    const url = `${this.API_URL}?clientId=${clientId}`;
    return this.http.post<ProjectF>(url, project);
}
}
