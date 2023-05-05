import { TestimonialsService } from './testimonials.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor(private service:TestimonialsService) { }
  listProjects:any =[];
  listSortedProjects:any =[];


  ngOnInit(): void {

    this.service.getProjectsFront().subscribe(res => {
      console.log(res);
      this.listProjects = res;
    }
    );




  }
  onSubmit() {this.service.getProjectsFrontSorted().subscribe(res2 => {
    console.log(res2);
    this.listSortedProjects = res2;
  });
}
}

