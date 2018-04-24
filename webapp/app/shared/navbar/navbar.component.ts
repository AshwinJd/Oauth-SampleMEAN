import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  logout(): void{
    this.authservice.logout();
    this.router.navigate(['/login'])
  }

}
