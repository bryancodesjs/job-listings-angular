import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //authentication variables
  email: string = '';
  password: string = '';
  user: string = '';
  title = 'job-listings-angular';

  constructor(public auth: AuthService){}

  signIn() {
    this.user = this.email;
    this.auth.signIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signOut() {
    this.auth.signOut();
  }
}
