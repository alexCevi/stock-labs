import { TestBed } from '@angular/core/testing';

import { StockOneService } from './stock-one.service';

describe('StockOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockOneService = TestBed.get(StockOneService);
    expect(service).toBeTruthy();
  });
});
