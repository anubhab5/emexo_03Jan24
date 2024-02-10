import { Injectable } from '@angular/core';
import { DemoSvc2Service } from './demo-svc2.service';

@Injectable()
export class DemoSvcService {
  public myName: string = 'Ajay';

  constructor(demoSvc2: DemoSvc2Service) {}

  getMyName() {
    return this.myName;
  }

  setMyName(name: string) {
    this.myName = name;
  }
}
