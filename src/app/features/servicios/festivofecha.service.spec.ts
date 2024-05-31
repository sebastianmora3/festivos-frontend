import { TestBed } from '@angular/core/testing';

import { FestivofechaService } from './festivofecha.service';

describe('FestivofechaService', () => {
  let service: FestivofechaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestivofechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
