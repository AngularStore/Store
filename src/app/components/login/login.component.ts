import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

//Sse utiliza para decorar una clase y definir un componente. Proporciona metadatos que describen cómo se debe comportar y presentar el componente.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          // Aquí puedes manejar la respuesta de la API después de verificar el acceso
          console.log(response);
        },
        error => {
          // Aquí puedes manejar el error de la API en caso de autenticación fallida
          console.error(error);
        }
      );
  }
}