import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBH8muZo8N3RWIa9Z-EYvh3xYTtY8d1nk8',
  authDomain: 'angular-firebase-demo-aec89.firebaseapp.com',
  databaseURL: 'https://angular-firebase-demo-aec89.firebaseio.com',
  projectId: 'angular-firebase-demo-aec89',
  storageBucket: 'angular-firebase-demo-aec89.appspot.com',
  messagingSenderId: '1087489410952',
  appId: '1:1087489410952:web:f8644352bf37a8d9445c3d',
  measurementId: 'G-QVTGT1XK2F'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
