import { EventEmitter, Output, ViewChild } from '@angular/core';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[attribute]',
  exportAs: 'hl',
})
export class AtributeDirective {
  /* @Input('attribute') */
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor(private element: ElementRef) {
    /* this.element.nativeElement.style.background = 'red'; */
  }

  // it's needed to crate a css class for this to work. In this case check in styles.css
  // there is a red class for this.
  /* @HostBinding('className')
  get cssClasses() {
    return 'red';
  } */

  @HostBinding('class.red')
  get cssClasses() {
    return this.isHighlighted;
  }

  /* @HostBinding('style.border')
  get cssStyle() {
    return '3px dashed green';
  } */

  @HostListener('mouseover', ['$event'])
  mouseOver($event: MouseEvent) {
    console.log($event);

    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
