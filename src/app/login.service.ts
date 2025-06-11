import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = null;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService) { }

  login(email: string, password: string) {
    const auth = this.firebaseService.auth;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        auth.currentUser?.getIdToken().then((token: string) => {
          this.token = token;
          this.router.navigate(['/']);
        });
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert('Login failed. Please check your credentials.');
      });
  }

  getIdToken() {
    return this.token;
  }

  //Verifica si el usuario está autenticado

  isAutenticado(){
    return this.token != null
  }

  // Cierra la sesión del usuario
  logout() {
    const auth = this.firebaseService.auth;
    auth.signOut()
      .then(() => {
        this.token = null;
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error during logout:', error);
        alert('Logout failed. Please try again.');
      }
    );
}

  }
