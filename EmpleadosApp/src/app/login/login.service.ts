import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  constructor(private router: Router, private cookieService: CookieService) { }

  login(email: string, password: string) {
    // Iniciar sesión con correo electrónico y contraseña utilizando la autenticación de Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
        // Obtener el token de autenticación del usuario
        firebase.auth().currentUser?.getIdToken()
        .then((token: string) => {
           // Establecer el token de autenticación y navegar a la página de inicio
            this.token = token;
            this.cookieService.set('token', this.token);
            this.router.navigate(['/']);
          }
        )
      }
    )
  }

  getIdToken() {
    return this.cookieService.get('token');
  }
  estaLogeado() {
    return this.cookieService.get('token');
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.token = "";
      this.cookieService.set('token', this.token);
      this.router.navigate(['/']);
      window.location.reload();
    }).catch(error => {
      console.error('Error al hacer logout:', error);
    });
  }

}
