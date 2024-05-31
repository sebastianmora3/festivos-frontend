import { TestBed } from '@angular/core/testing';

import { FestivoanioService } from './festivoanio.service';

describe('FestivoanioService', () => {
  let service: FestivoanioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivoanioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
