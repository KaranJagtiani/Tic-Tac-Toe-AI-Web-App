import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  response: String;
  error = '';
  interimText = '';
  finalisedText: Observable<string>;
  observer: Observer<string>;

  listening = false;
  language = 'en-IN';
  listener: any;

  userInputs: any = [];

  finalDisplayText: string;

  constructor() {}

  ngOnInit(): void {
    $('#play-video').on('click', function (e) {
      e.preventDefault();
      $('#video-overlay').addClass('open');

      $('.video-overlay-close').on('click', function (e) {
        e.preventDefault();
        $('.video-overlay.open').removeClass('open').find('iframe').remove();
      });
    });
  }
}
