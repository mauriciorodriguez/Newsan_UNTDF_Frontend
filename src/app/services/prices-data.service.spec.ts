import { TestBed } from '@angular/core/testing';

import { PricesDataService } from './prices-data.service';

describe('PricesDataService', () => {
  let service: PricesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
