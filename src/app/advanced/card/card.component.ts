import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() message!: string;

  @ContentChild('header')
  cardHeaderData!: ElementRef;

  @ContentChildren('header')
  cardHeaderChildren!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    alert(this.message);
  }

  ngAfterViewInit(): void {
    console.log(this.cardHeaderData);
  }

  ngAfterContentInit() {
    this.cardHeaderData.nativeElement.style.color = 'blue';

    console.log('two headers for the card');
    console.log(this.cardHeaderChildren);
  }
}
