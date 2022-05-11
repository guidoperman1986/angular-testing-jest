import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterContentInit {
  @Input() message!: string;

  @ContentChild('header')
  cardHeaderData: ElementRef = {
    nativeElement: undefined,
  };

  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    alert(this.message);
  }

  ngAfterContentInit() {
    this.cardHeaderData.nativeElement.style.color = 'blue';
  }
}
