import { Injectable } from '@angular/core';
import {AuthorEntity, BookEntity} from '../model/bookEntity';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

const Url = 'http://localhost:8080/books-api/';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public getBook(id: string): Observable<BookEntity> {
    return this.http.get<BookEntity>(Url + 'books/' + id);
  }

  public addBook(book: BookEntity): Observable<BookEntity> {
    return this.http.post<BookEntity>(Url + 'books', book);
  }

  public addBookAuthor(id: number, author: AuthorEntity): Observable<AuthorEntity> {
    return this.http.post<AuthorEntity>(Url + 'books/' + id + '/authors', author);
  }

  public getAuthorsNamed(firstName: string, lastName: string): Observable<any> {
    const options = {params: new HttpParams().set('firstName', firstName).set('lastName', lastName)};
    return this.http.get<any>(Url + 'authors', options).pipe(
      map(response => response._embedded ? response._embedded.authors : undefined )
    );
  }

  public updateBookAuthors(bookId: number, authorId: number): Observable<any> {
    return this.http.patch(Url + 'books/' + bookId + '/authors/' + authorId, {});
  }
}
