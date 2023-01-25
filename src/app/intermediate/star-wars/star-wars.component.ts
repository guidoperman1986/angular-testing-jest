import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, filter, merge, Subject, switchMap, tap } from 'rxjs';
import { Films, People } from 'src/app/models/star-wars.model';
// import { StarWarsService } from 'src/app/services/star-wars/star-wars.service';
import { StarWarsService } from '../../services/star-wars/star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css'],
})
export class StarWarsComponent implements OnInit {
  /* 
    "films": "https://swapi.dev/api/films/",
    "people": "https://swapi.dev/api/people/",
    "planets": "https://swapi.dev/api/planets/",
    "species": "https://swapi.dev/api/species/",
    "starships": "https://swapi.dev/api/starships/",
    "vehicles": "https://swapi.dev/api/vehicles/"
  
  */

  searchOptions = [
    'films',
    'people',
    'planets',
    'species',
    'starships',
    'vehicles',
  ];

  search = new FormControl('', [Validators.required, Validators.minLength(4)]);
  searched!: boolean;
  selectedOption = 'films';
  isLoading = new Subject<boolean>();
  buttonChanged$ = new Subject<string>();

  result: Films[] | People[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    merge(this.search.valueChanges, this.buttonChanged$)
      .pipe(
        filter((value) => value.length > 0),
        debounceTime(1500),
        tap(() => {
          this.isLoading.next(true);
          this.searched = true;
        }),
        switchMap((query) =>
          this.starWarsService.search<Films | People>(
            this.selectedOption,
            query
          )
        ),
        tap(() => this.isLoading.next(false))
      )
      .subscribe((data) => {
        next: {
          if (this.isFilm(data?.results[0])) {
            this.result = data.results as Films[];
          } else {
            this.result = data.results as People[];
          }
        }
      });
  }

  isFilm(result: Films | People): result is Films {
    return (result as Films)?.characters !== undefined;
  }

  set onSelectOption(option: string) {
    this.selectedOption = option;
    this.buttonChanged$.next(this.search.value);
  }

  get searchMessage(): string {
    return `Search for ${this.selectedOption}`;
  }
}
