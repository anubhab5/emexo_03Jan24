import { Component } from '@angular/core';
import { DemoSvcService } from './demo-svc.service';
import { DemoSvc2Service } from './demo-svc2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   *
   */
  studentName = 'MY NAME IS AJAY';

  currentDate = new Date();

  priceOfBook = 20;

  gender = 'female';

  arr = [
    {
      header: ' One',
      subHeader: 'This is sub 1',
      isShown: true,
    },
    {
      header: ' Two',
      subHeader: 'This is sub 2',
      isShown: false,
    },
    {
      header: ' Three',
      subHeader: 'This is sub 3',
      isShown: true,
    },
  ];

  constructor(svc: DemoSvcService, svc2: DemoSvc2Service) {
    // const svc = new DemoSvcService();
    const myName = svc.getMyName();

    console.log(myName);
  }

  customEventListener(data: string) {
    console.log(`in parent component ${data}`);
  }

  serviceDemo() {}
}
