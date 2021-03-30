import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getProfile() {
    return this.http.get(this.url + 'profil');
  }
}
