import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks/stocks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
})
export class StocksComponent implements OnInit {
  marketHolliday$!: Observable<any>;

  trackByFn: any[] = [
    { id: 10, name: 'Carlos' },
    { id: 11, name: 'Ramiro' },
    { id: 12, name: 'Rodrigo' },
    { id: 13, name: 'Marcelo' },
    { id: 14, name: 'Mario' },
  ];

  constructor(private stockService: StocksService) {
    console.log(this);
  }

  ngOnInit(): void {}

  getTickerInfo() {}

  getMarketHolliday = () => {
    this.marketHolliday$ = this.stockService.getMarketHolliday();
  };

  getTickerNews() {}

  trackByFnExample(index: number, item: any) {
    return item.id;
  }

  changeArray() {
    this.trackByFn = [
      { id: 11, name: 'Ramiro' },
      { id: 10, name: 'Carlos' },
      { id: 12, name: 'Rodrigo' },
      { id: 13, name: 'Marcelo' },
      { id: 14, name: 'Mario' },
    ];
  }
}
