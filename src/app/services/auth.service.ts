import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  invalidLogin: boolean = false;
  
  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
    ) { 
    //this.userData = angularFireAuth.authState;
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.userData = user;
        console.log(this.userData)
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== 'null' ? true : false;
  }

  signIn(email:string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Successfully signed in!');
      this.ngZone.run(() => {
          this.router.navigate(['admin-panel']);
        });
      
    })
    .catch(err => {
      console.log('Something is wrong: ', err.message);
      this.invalidLogin = true;
    })
  }

  signOut() {
    this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }
}
