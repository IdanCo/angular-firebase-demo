import {Component, OnInit} from '@angular/core';
import {AngularFirestore, QueryFn} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

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

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    const queryFn: QueryFn = ref => ref.orderBy('date', 'desc');
    this.messages$ = this.db.collection<Message>('messages', queryFn).valueChanges();
  }

  onSend(inputElement: HTMLInputElement) {
    const text = inputElement.value;
    const date = new Date();

    if (!text) return;

    this.db
      .collection('messages')
      .add({ text, date })
      .then(docRef => console.log('Document written with ID: ', docRef.id))
      .catch(error => console.error('Error adding document: ', error));

    inputElement.value = '';
  }
}
