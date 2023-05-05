import { Component, OnInit } from '@angular/core';
import { portfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private service:portfolioService) { }
  listPortfolios:any =[];

  ngOnInit(): void {
    this.service.getPortfolios().subscribe(res=>{console.log(res);
      this.listPortfolios=res});
  }


}

