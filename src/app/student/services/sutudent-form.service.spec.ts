import { TestBed } from '@angular/core/testing';

import { SutudentFormService } from './student-form.service';

describe('SutudentFormService', () => {
  let service: SutudentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SutudentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
