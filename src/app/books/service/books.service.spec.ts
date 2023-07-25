import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
