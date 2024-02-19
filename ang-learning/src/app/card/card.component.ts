import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  product!: Product;

  @Output()
  myEvent = new EventEmitter();

  cardBody = 'This is a long string';

  constructor(private route: Router) {
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

  navigate(prod: Product) {
    this.route.navigate([`product/${prod.id}`]);
    // this.route.navigate([`about-us`]);
  }
}
