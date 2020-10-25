import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Message {
  text: string;
  date?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit(): void {
    this.messages$ = this.db
      .collection<Message>(
        'messages',
        ref => ref.orderBy('date', 'desc')
      ).valueChanges();
  }

  onSend(message: HTMLInputElement): void {
    const text = message.value;
    const date = new Date();

    this.db
      .collection<Message>('messages')
      .add({
        text,
        date
      }).then(docRef => console.log('Document written with ID: ', docRef.id))
        .catch(error => console.error('Error adding document: ', error));

    message.value = ''; // clear input field
  }
}
