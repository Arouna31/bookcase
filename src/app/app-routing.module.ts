import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { BooksListComponent } from "./books-list/books-list.component";
import { BookFormComponent } from "./books-list/book-form/book-form.component";
import { SingleBookComponent } from "./books-list/single-book/single-book.component";

const appRoutes: Routes = [
  {
    path: "auth/signup",
    component: SignupComponent
  },
  {
    path: "auth/signin",
    component: SigninComponent
  },
  {
    path: "books",
    canActivate: [AuthGuardService],
    component: BooksListComponent
  },
  {
    path: "books/new",
    canActivate: [AuthGuardService],
    component: BookFormComponent
  },
  {
    path: "books/view/:id",
    canActivate: [AuthGuardService],
    component: SingleBookComponent
  },
  {
    path: "",
    redirectTo: "books",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "books"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
