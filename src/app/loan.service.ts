import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {


  constructor( private http: HttpClient) { }

 
  getAllCredits(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/EASE/Credit/AllLoan');
  }
}
