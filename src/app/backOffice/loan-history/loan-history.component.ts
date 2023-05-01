import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanHistoryService } from 'src/app/loan-history.service';

@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.css']
})
export class LoanHistoryComponent implements OnInit {

  creditHistory: any = {};
  

  constructor(
    private route: ActivatedRoute,
    private loanHistoryService: LoanHistoryService
  ) { }

  ngOnInit(): void {
    const idS = this.route.snapshot.paramMap.get('id')!;
    const  id = parseInt(idS);

    this.loanHistoryService.getCreditHistory(id).subscribe(data => {
      this.creditHistory = data;
    });
  }
}
