import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class portfolioService {

  API_URL="http://localhost:8086/Portfolio/afficherPortfolio"

constructor(private http:HttpClient) { }
getPortfolios() : Observable<string[]>{
  return this.http.get<string[]>(this.API_URL);


  }
}
