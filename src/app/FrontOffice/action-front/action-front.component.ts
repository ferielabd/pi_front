import { Component, OnInit } from '@angular/core';
import { ActioninvService } from './actioninv.service';
import { ResponseDTO } from './action-front';

@Component({
  selector: 'app-action-front',
  templateUrl: './action-front.component.html',
  styleUrls: ['./action-front.component.css']
})
export class ActionFrontComponent implements OnInit {

  responseDTO: ResponseDTO = new ResponseDTO();
  userId: number = 0;
  projectId: number = 0;
  portfolioId: number = 0;

  constructor(private actioninvService: ActioninvService) {}

  ngOnInit(): void {
  }

  createInvestment(): void {
    const investmentDTO = new ResponseDTO();
    investmentDTO.investmentId = this.responseDTO.investmentId;
    investmentDTO.amount = this.responseDTO.amount;
    investmentDTO.createdAt = this.responseDTO.createdAt;

    this.actioninvService.createInvestment(this.userId, this.projectId, this.portfolioId, this.responseDTO)
      .subscribe(response => {
        this.responseDTO = response as ResponseDTO;
        console.log('Investment created:', this.responseDTO);
      });
    }}
