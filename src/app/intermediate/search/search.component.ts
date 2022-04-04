import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, pluck } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('search', {static: true}) search!: ElementRef;


  constructor() { }

  ngAfterViewInit(): void {
    fromEvent(this.search?.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value')
      )
      .subscribe(search => console.log(search))
  }

  ngOnInit(): void {
  }



}
