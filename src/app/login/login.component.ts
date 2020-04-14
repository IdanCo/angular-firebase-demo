import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    this.auth.signOut();
  }
}
