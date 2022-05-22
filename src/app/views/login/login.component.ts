import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  email = '';
  password = '';
  emailReg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  validEmail = false;
  emptyPassword = false;
  error = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  validateEmail(email: string){
    if(this.emailReg.test(email)){
      this.validEmail = true
    } else {
      this.validEmail = false
      this.error = true;
    }
  }
  signIn(){
    this.resetValidation()
    this.loading = true;
    this.validateEmail(this.email);
    if(!this.validEmail){
      this.loading = false;
    }
    if(this.password == "" || this.password == null || this.password == undefined){
      this.loading = false;
      this.emptyPassword = true;
      this.error = true;
    }
    if(!this.error){
      this.auth.signIn(this.email,this.password)
    }
  }
  resetValidation(){
    this.validEmail = false;
    this.emptyPassword = false;
    this.error = false;
    this.loading = false;
  }
} 
