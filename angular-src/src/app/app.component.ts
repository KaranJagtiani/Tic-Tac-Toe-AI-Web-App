import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-src';

  ngOnInit() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      if (currentTheme == 'dark') {
        document.body.classList.toggle('dark-theme');
      } else if (currentTheme == 'light') {
        document.body.classList.toggle('light-theme');
      }
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.toggle('dark-theme');
    }
  }
}
