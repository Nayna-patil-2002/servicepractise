import { TestBed } from '@angular/core/testing';

import { UniqService } from './uniq.service';

describe('UniqService', () => {
  let service: UniqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
