import { TestBed } from '@angular/core/testing';

import { SnackabarService } from './snackabar.service';

describe('SnackabarService', () => {
  let service: SnackabarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackabarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
