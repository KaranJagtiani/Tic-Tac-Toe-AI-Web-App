import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-toggler',
  templateUrl: './dark-toggler.component.html',
  styleUrls: ['./dark-toggler.component.scss'],
})
export class DarkTogglerComponent implements OnInit {
  darkTheme: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      console.log('Light');
      this.darkTheme = false;
    } else {
      this.darkTheme = true;
      console.log('Dark');
    }
  }

  onValChange() {
    this.darkTheme = !this.darkTheme;
    console.log('Dark Theme:', this.darkTheme);
    if (this.darkTheme) {
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-theme');
      } else {
        document.body.classList.toggle('dark-theme');
      }
    } else {
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-theme');
      } else {
        document.body.classList.toggle('dark-theme');
      }
    }
  }
}
