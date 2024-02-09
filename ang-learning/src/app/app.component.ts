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
  studentName = 'Ajay';

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
}
