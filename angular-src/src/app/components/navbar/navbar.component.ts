import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let id = localStorage.getItem('id_token');
    this.loggedIn = id ? true : false;
    console.log(this.loggedIn);
  }
}
