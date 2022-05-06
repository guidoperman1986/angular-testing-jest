import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap, tap } from 'rxjs';
import { Result } from 'src/app/models/movie';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-autocomplete-with-api',
  templateUrl: './autocomplete-with-api.component.html',
  styleUrls: ['./autocomplete-with-api.component.css'],
})
export class AutocompleteWithApiComponent implements OnInit {
  selectedMovie!: Result;
  searchMovieCtrl = new FormControl();
  isLoading!: boolean;
  filteredMovies: Result[] = [];
  errorMsg?: string;
  noResults!: boolean;

  constructor(private utilService: UtilityService) {}

  ngOnInit(): void {
    this.searchMovieCtrl.valueChanges
        .pipe(
          filter(value => value?.length > 2),
          distinctUntilChanged(),
          debounceTime(1500),
          tap(()=>{
            this.filteredMovies = [];
            this.isLoading = true;
          }),
          switchMap((value) => this.utilService.searchMovie(value)
            .pipe(
              finalize(()=>{
                this.isLoading = false;
                (!this.filteredMovies.length) ? this.noResults = true : this.noResults = false;
              })
            ))
        ).subscribe(results=> this.filteredMovies = results)

  }

  clearSelection() {}

  onSelected() {
    console.log(this.selectedMovie)
  }

  displayWith(value: any) {
    return value?.Title;
  }
}
