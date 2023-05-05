import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  API_URLL="http://localhost:8086/Project/afficherProjet"
  API_URL2="http://localhost:8086/Project/sortedByROIScore"


  constructor(private http:HttpClient) { }
  getProjectsFrontSorted() : Observable<string[]>{
    return this.http.get<string[]>(this.API_URL2);
  }
  getProjectsFront() : Observable<string[]>{
    return this.http.get<string[]>(this.API_URLL);
  }

}
