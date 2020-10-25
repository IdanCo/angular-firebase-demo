import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AngularFireAuth) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut(): void {
    this.authService.signOut();
  }

}
