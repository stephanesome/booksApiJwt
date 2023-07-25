import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BooksComponent} from './books/books.component';
import {BookComponent} from './books/book/book.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {adminGuard} from "./authentication/admin.guard";
import {SignupComponent} from "./signup/signup.component";
import {loggedInGuard} from "./authentication/logged-in.guard";

const booksRoutes: Routes = [
  {path: ':id', component: BookComponent}
];

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ adminGuard  ]
  },
  {path: 'books', component: BooksComponent,
    canActivate: [ loggedInGuard ],
    children: booksRoutes
  },
  { path: 'signup', component: SignupComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
