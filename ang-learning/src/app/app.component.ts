import { Component } from '@angular/core';

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

  priceOfBook = 25;

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

  constructor() {}

  customEventListener(data: string) {
    console.log(`in parent component ${data}`);
  }

  serviceDemo() {}
}
