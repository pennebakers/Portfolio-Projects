import { Injectable } from '@angular/core';
import { user } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor() { }
  logout() :void{
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
}
}
