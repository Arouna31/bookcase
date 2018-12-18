import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookcase';

  constructor() {

    const config = {
      apiKey: 'AIzaSyA4e0sRmlG0i-51Wm2m74Xha4uJz7vVagw',
      authDomain: 'bookcase-36b01.firebaseapp.com',
      databaseURL: 'https://bookcase-36b01.firebaseio.com',
      projectId: 'bookcase-36b01',
      storageBucket: '',
      messagingSenderId: '709763908044'
    };
    firebase.initializeApp(config);

  }
}
