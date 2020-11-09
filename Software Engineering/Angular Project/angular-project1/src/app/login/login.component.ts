import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { Router } from '@angular/router';  
import { user } from 'src/app/user';  
import { USERS } from '../mock-users';
import { AuthService } from '../auth.service' ; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class Login implements OnInit {

  constructor(  private formBuilder : FormBuilder,
    private router: Router,
    private authService: AuthService) { 
  
  }
model: user[]=USERS;
loginForm: FormGroup;  
message: string;  
returnUrl: string;  


ngOnInit() {
  this.loginForm=this.formBuilder.group({
    username: ['',Validators.required],
    password: ['',Validators.required]

  });
  this.returnUrl='/employee101';
  this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  login() {  
    for (let i:number =0;i<4;i++) {
      if (this.f.username.value == this.model[i]["username"] && this.f.password.value == this.model[i]["password"]) {  
      
        console.log("Login successful");  
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', this.f.username.value);  
        this.router.navigate([this.returnUrl]);  
      }  
    }
  }  
}  


