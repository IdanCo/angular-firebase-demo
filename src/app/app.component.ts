import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

interface Message {
  text: string;
  date?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private db: AngularFirestore) {
  }

  onSend(message: HTMLInputElement): void {
    const text = message.value;
    const date = new Date();

    this.db.collection<Message>('messages').add({
      text,
      date
    }).then(docRef => console.log('Document written with ID: ', docRef.id))
      .catch(error => console.error('Error adding document: ', error));

    message.value = ''; // clear input field
  }
}
