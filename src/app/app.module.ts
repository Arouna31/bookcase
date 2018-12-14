import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BooksListComponent } from './books-list/books-list.component';
import { SingleBookComponent } from './books-list/single-book/single-book.component';
import { BookFormComponent } from './books-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BookService } from './services/book.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'auth/signup',
    component: SignupComponent
  },
  {
    path: 'auth/signin',
    component: SigninComponent
  },
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'books/new',
    component: BookFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BooksListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
