import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from './home/home';
import {About} from './about/about';
import {Contact} from './contact/contact';
import {Books} from './books/books';
import {Book} from './books/book/book';
import {Login} from './login/login';
import {Admin} from './admin/admin';
import {adminGuard} from "./authentication/admin.guard";
import {Signup} from "./signup/signup";
import {loggedInGuard} from "./authentication/logged-in.guard";

const booksRoutes: Routes = [
  {path: ':id', component: Book}
];

const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'contact', component: Contact},
  { path: 'login', component: Login },
  {
    path: 'admin',
    component: Admin,
    canActivate: [ adminGuard  ]
  },
  {path: 'books', component: Books,
    canActivate: [ loggedInGuard ],
    children: booksRoutes
  },
  { path: 'signup', component: Signup },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: Home}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
