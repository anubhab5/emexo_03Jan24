import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Input()
  myDemo: string = '';

  @Output()
  myEvent = new EventEmitter();

  cardBody = 'This is a long string';

  constructor() {
    // this.cardHeader = {
    //   header: '',
    //   subHeader: 'string',
    // };
  }

  submitClicked() {
    console.log('Submit clicked');
    this.myEvent.emit('test data');
  }

  changeDone(data: any) {
    console.log(data.target.value);

    this.myEvent.emit();
  }
}
