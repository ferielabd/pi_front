import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFrontComponent } from './action-front.component';

describe('ActionFrontComponent', () => {
  let component: ActionFrontComponent;
  let fixture: ComponentFixture<ActionFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
