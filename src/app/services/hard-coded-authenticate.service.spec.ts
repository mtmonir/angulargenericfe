import { TestBed } from '@angular/core/testing';

import { HardCodedAuthenticateService } from './hard-coded-authenticate.service';

describe('HardCodedAuthenticateService', () => {
  let service: HardCodedAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
