import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styleUrls: ['./counter-route.component.css'],
})
export class CounterRouteComponent implements OnInit {
  counter!: number;
  countdown!: number;
  countCompleted = new BehaviorSubject<boolean>(false);

  constructor(private ar: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const initalValue = Number(this.ar.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initalValue) ? 10 : initalValue;
    this.countdown = isNaN(initalValue) ? 10 : initalValue;

    this.countCompleted.subscribe(
      (completed) =>
        completed &&
        (this.openSnackBar('La cuenta fue completada'),
        this.countCompleted.next(false))
    );
  }

  increaseBy(value: number) {
    this.counter += value;
  }

  increaseInitialTimer(value: number) {
    this.countdown += value;
  }

  get time() {
    return this.countdown / 60 < 1 ? 'segundos' : 'minutos';
  }

  startCountdown() {
    timer(0, 1000)
      .pipe(takeWhile(() => this.countdown > 0))
      .subscribe(() => {
        this.countdown -= 1;

        if (this.countdown === 0) this.countCompleted.next(true);
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok');
  }
}
