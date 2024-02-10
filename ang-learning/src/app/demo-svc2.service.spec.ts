import { TestBed } from '@angular/core/testing';

import { DemoSvc2Service } from './demo-svc2.service';

describe('DemoSvc2Service', () => {
  let service: DemoSvc2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSvc2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
