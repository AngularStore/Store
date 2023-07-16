import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://koajstoreapi.onrender.com/api/users';

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }
}
 