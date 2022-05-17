import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  showCookieForm = false;
  constructor() { }

  ngOnInit(): void {
    this.checkCookies();
  }
  checkCookies(){
    const consent = localStorage.getItem('magnetCookieConsent');
    console.log(consent);
    if(consent != null){
      this.showCookieForm = false;
    } else {
      this.showCookieForm = true;
    }
  }
  approveCookies(){
    localStorage.setItem('magnetCookieConsent', 'true');
    this.checkCookies();
  }
}
