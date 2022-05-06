import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ReqresService } from './reqres.service';

describe('ReqresService', () => {
  let service: ReqresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ReqresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
