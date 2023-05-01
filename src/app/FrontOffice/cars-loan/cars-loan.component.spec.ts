import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsLoanComponent } from './cars-loan.component';

describe('CarsLoanComponent', () => {
  let component: CarsLoanComponent;
  let fixture: ComponentFixture<CarsLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
