import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProjectF } from 'src/app/project.model';
import { PortfolioF } from 'src/app/Portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PorftolioFrontService {

  API_URL="http://localhost:8086/Portfolio/ajouterPortfolio"

  constructor(private http:HttpClient) { }
  addPortfolio(portfolio: PortfolioF) {
    return this.http.post<PortfolioF>(this.API_URL, portfolio);
  }

}
