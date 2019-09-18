import { TestBed } from '@angular/core/testing';

import { HttpUtilitiesService } from './http-utilities.service';

describe('HttpUtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpUtilitiesService = TestBed.get(HttpUtilitiesService);
    expect(service).toBeTruthy();
  });
});
