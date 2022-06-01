import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log(window.scrollY)
  }
  signOut(){
    localStorage.removeItem('magnetUserRef');
    this.auth.signOut();
    this.router.navigateByUrl('/')
  }
  
}
