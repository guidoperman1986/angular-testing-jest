import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  filter,
  fromEvent,
  map,
  Observable,
  pluck,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Reqres, ReqresData, ReqResInput } from 'src/app/models/reqres';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('search', { static: true }) search!: ElementRef;
  loading!: boolean;
  results!: Reqres;
  userData!: ReqresData;

  dataPerPage!: Reqres;

  examples = ['example 1', 'example 2', 'example 3', 'example 4', 'example 5'];
  filteredExamples!: Observable<string[]>;
  myControl = new FormControl();

  reqResFormControl = new FormControl();
  reqResExamples: ReqResInput[] = [
    { value: 'Page 1', key: '1' },
    { value: 'Page 2', key: '2' },
    { value: 'Page 3', key: '3' },
    { value: 'Page 4', key: '4' },
  ];

  reqResFiltered!: Observable<{ value: string; key: string }[]>;

  displayedColumns = [
    'email-column',
    'firstName-column',
    'lastName-column',
    'avatar-column'
  ];

  constructor(private reqResService: ReqresService) {}

  ngAfterViewInit(): void {
    fromEvent(this.search?.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        filter((value) => !isNaN(parseFloat(value as string))),
        tap(() => ((this.loading = true), (this.userData = {} as ReqresData))),
        switchMap((value) => this.reqResService.getRequest(value as number))
      )
      .subscribe((search) => (this.results = search));
  }

  selectUser(value: string) {
    this.reqResService.getUserData(value).subscribe((userData) => {
      this.userData = userData;
    });
  }

  ngOnInit(): void {
    this.filteredExamples = this.myControl.valueChanges.pipe(
      startWith(''),
      // map(value => (typeof value === 'string' ? value : value)),
      map((example) => (example ? this.filter(example) : this.examples.slice()))
    );

    this.reqResFiltered = this.reqResFormControl.valueChanges.pipe(
      startWith(''),
      map((reqRes) =>
        reqRes ? this.reqResFilter(reqRes) : this.reqResExamples.slice()
      )
    );
  }

  displayFn(example: string) {
    return example;
  }

  filter(value: string): string[] {
    const valueInLowerCase = value.toLowerCase();

    return this.examples.filter((example) =>
      example.toLowerCase().includes(valueInLowerCase)
    );
  }

  reqResFilter(value: string): ReqResInput[] {
    return this.reqResExamples.filter((reqRes) =>
      reqRes.value.toLowerCase().includes(value.toLowerCase())
    );
  }

  reqResDisplayFn(value: string) {
    return value;
  }

  onSelectPage(page: string) {
    this.reqResService
      .getRequest(page as unknown as number)
      .subscribe(data => this.dataPerPage = data);
  }
}
