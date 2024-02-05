import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  cardData!: {
    header: string;
    subHeader: string;
    isShown: boolean;
  };

  cardBody = 'This is a long string';

  constructor() {
    // this.cardHeader = {
    //   header: '',
    //   subHeader: 'string',
    // };
  }
}
