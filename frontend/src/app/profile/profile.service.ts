import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(){
    var currentUser = JSON.parse(localStorage.getItem('token') || '{}');
    var token = currentUser.access_token;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<any>('http://localhost:3000/profile', { headers });
  }
}
