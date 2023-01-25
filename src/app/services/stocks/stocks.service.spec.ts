import { TestBed } from '@angular/core/testing';

import { StocksService } from './stocks.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

const mockService = {
  getTickerInfo: jest.fn()
}

describe('StocksService', () => {
  let service: StocksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: StocksService, useValue: mockService }
      ]
    });
    service = TestBed.inject(StocksService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get Market Holliday', () => { 
    // service.getMarketHolliday()
    // 
    // const req = httpTestingController.expectOne('');
    // expect(req.request.method).toEqual('GET');
    // req.flush({});
  })
});
