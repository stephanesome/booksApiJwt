import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterOutlet } from '@angular/router';
import {Book} from './book/book';

export const booksRoutes: Routes = [
  {path: ':id', component: Book}
];

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrls: ['./books.css'],
  imports: [RouterOutlet]
})
export class Books {
  constructor(private router: Router, private route: ActivatedRoute) { }

  submit(value: string): void {
    this.router.navigate(['./', value], {relativeTo: this.route}).then(r => {});
  }
}
