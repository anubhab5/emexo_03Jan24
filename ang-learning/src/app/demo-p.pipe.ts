import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DemoPPipe implements PipeTransform {
  transform(priceAmount: number, discountPercent: number): number {
    return priceAmount * (1 - discountPercent / 100); // 20% discount and it is flat
  }
}
