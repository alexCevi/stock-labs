import { TestBed } from '@angular/core/testing';

import { StockTwoService } from './stock-two.service';

describe('StockTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockTwoService = TestBed.get(StockTwoService);
    expect(service).toBeTruthy();
  });
});
