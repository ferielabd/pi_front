import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  API_URL="http://localhost:8086/Project/afficherProjet"

  constructor(private http:HttpClient) { }
  getProjects() : Observable<string[]>{
    return this.http.get<string[]>(this.API_URL);
  }
}
