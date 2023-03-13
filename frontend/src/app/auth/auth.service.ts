import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn  = false;

  constructor(private http :HttpClient) { }

  login(username:string, password:string){
    return this.http.post('http://localhost:3000/auth/login',{
      username: username,
      password: password
    });
  }


}
