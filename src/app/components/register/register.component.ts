import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  fullname: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';

  constructor(private authService: AuthService) {}

  register(): void {
  const user = {
    username: this.username,
    password: this.password,
    fullname: this.fullname,
    email: this.email,
    phone: this.phone,
    address: this.address
  };

  this.authService.createUser(user).subscribe(
    response => {
      console.log('Usuario creado exitosamente', response);
      // Aquí puedes redirigir al usuario a otra página o realizar cualquier acción adicional después de crear el usuario
    },
    error => {
      console.error('Error al crear el usuario', error);
      // Aquí puedes manejar el error y mostrar un mensaje al usuario
    }
  );
}

  

}
