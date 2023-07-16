import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    username:'',
    password: '',
    fullName: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private userService: UserService) { }

  register() {
    this.userService.registerUser(this.user)
      .subscribe(
        response => {
          console.log('Usuario registrado exitosamente');
          // Puedes realizar alguna acción adicional después del registro exitoso, como redirigir a otra página.
        },
        error => {
          console.error('Error al registrar el usuario:', error);
          // Maneja el error de acuerdo a tus necesidades.
        }
      );
  }
}
