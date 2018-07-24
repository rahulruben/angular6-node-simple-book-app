import { TestBed, inject } from '@angular/core/testing';

import { BookInfoService } from './book-info.service';

describe('BookInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookInfoService]
    });
  });

  it('should be created', inject([BookInfoService], (service: BookInfoService) => {
    expect(service).toBeTruthy();
  }));
});
