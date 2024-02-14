import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlighter]',
})
export class DemoDirDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
