import { PorftolioFrontService } from './portfoliofront.service';
import { ProjectfrontService } from './../project-front/projectfront.sercive';
import { portfolioService } from './../../backOffice/portfolio/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioF } from 'src/app/Portfolio.model';

@Component({
  selector: 'app-portfolios-front',
  templateUrl: './portfolios-front.component.html',
  styleUrls: ['./portfolios-front.component.css']
})
export class PortfoliosFrontComponent implements OnInit {

  portfolio: PortfolioF = new PortfolioF();

  constructor(private PorftolioFrontService: PorftolioFrontService) { }

  ngOnInit(): void {}
    addPortfolio() {

      this.PorftolioFrontService.addPortfolio(this.portfolio).subscribe(res => {
      console.log('Project added successfully:', res);
    })
  }}


