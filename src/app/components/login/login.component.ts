import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

//Sse utiliza para decorar una clase y definir un componente. Proporciona metadatos que describen cómo se debe comportar y presentar el componente.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Variable para almacenar el nombre de usuario ingresado en el formulario
  password: string = ''; // Variable para almacenar la contraseña ingresada en el formulario
   constructor(private authService: AuthService) {} // Inyección de dependencia del servicio AuthService
   login(): void {
    this.authService.login(this.username, this.password) // Llamada al método de inicio de sesión del servicio AuthService
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