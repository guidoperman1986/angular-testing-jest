import { Component, OnInit, ViewChild } from '@angular/core';
import { AtributeDirective } from '../attribute.directive';

@Component({
  selector: 'app-example-directive',
  templateUrl: './example-directive.component.html',
  styleUrls: ['./example-directive.component.css'],
})
export class ExampleDirectiveComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  condition = true;

  constructor() {}

  ngOnInit(): void {}

  @ViewChild(AtributeDirective)
  highlighted!: AtributeDirective;

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }
}
