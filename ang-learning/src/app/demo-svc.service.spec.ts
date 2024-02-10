import { TestBed } from '@angular/core/testing';

import { DemoSvcService } from './demo-svc.service';

describe('DemoSvcService', () => {
  let service: DemoSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
