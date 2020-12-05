import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lyrics-screen',
  templateUrl: './lyrics-screen.component.html',
  styleUrls: [
    './lyrics-screen.component.common.scss',
    './lyrics-screen.component.desktop.scss',
    './lyrics-screen.component.mobile.scss'
  ]
})
export class LyricsScreenComponent implements OnInit {
  @Input() lyrics;
  lyricsExpandState: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.lyrics.forEach(song => this.lyricsExpandState.push(false));
  }

  toggleExpandLyrics(i: number): void {
    this.lyricsExpandState[i] = !this.lyricsExpandState[i];
  }
}