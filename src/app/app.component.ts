import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "bookcase";

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCKnxItBxFYG49ZdmuFL9fnS6DkT5s8XSA",
      authDomain: "bookcase-bfc57.firebaseapp.com",
      databaseURL: "https://bookcase-bfc57.firebaseio.com",
      projectId: "bookcase-bfc57",
      storageBucket: "bookcase-bfc57.appspot.com",
      messagingSenderId: "100701698565"
    };
    firebase.initializeApp(config);
  }
}
