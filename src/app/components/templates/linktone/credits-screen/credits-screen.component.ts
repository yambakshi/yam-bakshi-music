import { Component, Input } from '@angular/core';

@Component({
  selector: 'credits-screen',
  templateUrl: './credits-screen.component.html',
  styleUrls: [
    './credits-screen.component.common.scss',
    './credits-screen.component.desktop.scss',
    './credits-screen.component.mobile.scss'
  ]
})
export class CreditsScreenComponent {
  @Input() releaseData;

  constructor() {
  }
}