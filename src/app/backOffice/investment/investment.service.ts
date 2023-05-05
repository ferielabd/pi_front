import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class investmentService {

  API_URL="http://localhost:8086/Investment/afficherInvestment"

  constructor(private http:HttpClient) { }
  getInvestments() : Observable<string[]>{
    return this.http.get<string[]>(this.API_URL);
  }
}
