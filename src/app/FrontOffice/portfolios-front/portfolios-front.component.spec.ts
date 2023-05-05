import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosFrontComponent } from './portfolios-front.component';

describe('PortfoliosFrontComponent', () => {
  let component: PortfoliosFrontComponent;
  let fixture: ComponentFixture<PortfoliosFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliosFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliosFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
