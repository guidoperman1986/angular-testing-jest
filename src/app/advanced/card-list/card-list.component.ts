import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent
  implements OnInit, AfterContentInit, AfterContentChecked
{
  @ContentChild(CardComponent, { static: true }) card!: CardComponent;

  constructor() {}

  ngOnInit(): void {
    console.log(this.card);
  }

  ngAfterContentInit() {}

  ngAfterContentChecked(): void {
    console.log(this.card);
  }
}
