import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directive',
  templateUrl: './example-directive.component.html',
  styleUrls: ['./example-directive.component.css']
})
export class ExampleDirectiveComponent implements OnInit {

  numbers = [1,2,3,4,5];
  condition = true;

  constructor() { }

  ngOnInit(): void {
  }

}
