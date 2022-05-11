import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  cityControl!: FormControl;

  cities = ['London', 'Paris', 'Moscow', 'New York', 'Karachi', 'Sydney'];

  data$!: Observable<any>;

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    this.cityControl = new FormControl('');

    this.data$ = this.cityControl.valueChanges.pipe(
      switchMap((city) => this.utilityService.getWeatherForCity(city))
    );
  }
}
