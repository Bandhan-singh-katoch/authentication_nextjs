import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private route:Router){}

  loginForm = this.fb.group({
    username:['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit(){
    const data = JSON.stringify(this.loginForm.value);
    const username = this.loginForm.value.username as string;
    const password = this.loginForm.value.password as string;

    this.authService.login(username, password).subscribe((res)=>{
      localStorage.setItem('token', JSON.stringify(res)); 
      console.log(res);
      this.route.navigate(['/profile']);
    });
  }
  
  
} 
