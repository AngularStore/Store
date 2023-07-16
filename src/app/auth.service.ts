import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = 'https://koajstoreapi.onrender.com/api/login'; // URL de la API de login
  private usersUrl = 'https://koajstoreapi.onrender.com/api/users'; // URL de la API de usuarios

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password }; // Datos de login
    return this.http.post(this.loginUrl, body);
  }

  createUser(user: any): Observable<any> {
    const body = { user };
    return this.http.post(this.usersUrl, body);
  }  
  

}

