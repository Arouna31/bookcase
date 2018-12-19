import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BooksService } from "src/app/services/book.service";
import { Router } from "@angular/router";
import { Book } from "src/app/models/book.model";
import * as firebase from "firebase";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.scss"]
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ["", Validators.required],
      author: ["", Validators.required]
    });
  }

  onSaveBook() {
    const title: string = this.bookForm.get("title").value;
    const author: string = this.bookForm.get("author").value;
    const newBook: Book = new Book(title, author);
    this.booksService.createNewBook(newBook);
    this.router.navigate(["/books"]);
  }

  uploadFile(file: File) {
    return new Promise((resolve, reject) => {
      const almostUniqueFileName = Date.now().toString();
      const upload = firebase
        .storage()
        .ref()
        .child(`images/${almostUniqueFileName}${file.name}`);
    });
  }
}
