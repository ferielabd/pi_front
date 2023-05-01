import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanHistoryService {
  constructor(private http: HttpClient) { }

  getCreditHistory(id: number): Observable<any> {
    const url = `http://localhost:8080/EASE/Credit/AllLoan/loanHis/${id}`;
    return this.http.get(url);
  }
}
