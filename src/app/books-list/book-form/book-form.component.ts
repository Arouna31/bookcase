import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BooksService } from "src/app/services/book.service";
import { Router } from "@angular/router";
import { Book } from "src/app/models/book.model";

@Component({
  selector: "app-book-form",
  templateUrl: "./book-form.component.html",
  styleUrls: ["./book-form.component.scss"]
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  fileIsUploading: Boolean = false;
  fileUrl: string;
  fileUploaded: Boolean = false;

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
    if (this.fileUrl && this.fileUrl !== "") {
      newBook.picture = this.fileUrl;
      console.log(newBook.picture);
    }
    this.booksService.createNewBook(newBook);
    this.router.navigate(["/books"]);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then((url: string) => {
      this.fileUrl = url;
      console.log(this.fileUrl);
      this.fileIsUploading = false;
      this.fileUploaded = true;
    });
  }

  onDetectFile(event) {
    this.onUploadFile(event.target.files[0]);
  }
}
