import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {

  apiKey: "AIzaSyAlpKgYrhBRI87p1V41owQhTDhyGl8e0x4",

  authDomain: "tienda-online2-17c30.firebaseapp.com",

  databaseURL: "https://tienda-online2-17c30-default-rtdb.firebaseio.com",

  projectId: "tienda-online2-17c30",

  storageBucket: "tienda-online2-17c30.firebasestorage.app",

  messagingSenderId: "354571208653",

  appId: "1:354571208653:web:4953e17f4378983a9aa684"

};

public auth: Auth;
public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
