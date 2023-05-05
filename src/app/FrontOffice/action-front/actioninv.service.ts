import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDTO } from './action-front';

@Injectable({
  providedIn: 'root'
})
export class ActioninvService {
  private BASE_URL = 'http://localhost:8086';

  constructor(private http: HttpClient) {}

  createInvestment(userId: number, projectId: number, portfolioId: number, ResponseDTO: ResponseDTO) {
    const url = `${this.BASE_URL}/users/${userId}/investments/${projectId}/${portfolioId}`;
    return this.http.post(url, ResponseDTO);
  }}
