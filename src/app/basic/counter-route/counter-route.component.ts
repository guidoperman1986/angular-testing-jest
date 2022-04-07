import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styleUrls: ['./counter-route.component.css']
})
export class CounterRouteComponent implements OnInit {
  counter!: number;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {
    const initalValue = Number(this.ar.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initalValue) ? 10 : initalValue;
  }

  increaseBy(value: number) {
    this.counter += value;
  }

}
