import { Component, OnInit } from '@angular/core';
import { investmentService } from './investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  constructor(private service:investmentService) { }
  listProjects:any =[];

  ngOnInit(): void {
    this.service.getInvestments().subscribe(res=>{console.log(res);
      this.listProjects=res});
  }

  }


