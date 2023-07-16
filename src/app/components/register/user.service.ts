import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // URL de la API para el registro de usuarios
  private apiUrl = 'https://koajstoreapi.onrender.com/api/users';
  constructor(private http: HttpClient) { }
  // Método para registrar un usuario
  registerUser(user: any) {
    // Realiza una solicitud POST a la API con la URL y el objeto de usuario
    return this.http.post(this.apiUrl, user);
  }
}