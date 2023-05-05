import { TestBed } from '@angular/core/testing';

import { ActioninvService } from './action-front/actioninv.service';

describe('ActioninvService', () => {
  let service: ActioninvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActioninvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
