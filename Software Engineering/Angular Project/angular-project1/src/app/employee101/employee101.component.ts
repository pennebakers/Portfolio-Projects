import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../auth.service';  

@Component({
  selector: 'app-employee101',
  templateUrl: './employee101.component.html',
  styleUrls: ['./employee101.component.css']
})
export class Employee101Component implements OnInit {
  username:string;
  constructor(private router: Router, private authService: AuthService) { }
  
  

  ngOnInit(): void {
    this.username=localStorage.getItem('token');
  }

logout(){
  console.log('logout');
  this.authService.logout();
  this.router.navigate(['/login']);
}


}
