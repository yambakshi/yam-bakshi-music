import { Component, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'lyrics-screen',
  templateUrl: './lyrics-screen.component.html',
  styleUrls: [
    './lyrics-screen.component.common.scss',
    './lyrics-screen.component.desktop.scss',
    './lyrics-screen.component.mobile.scss'
  ]
})
export class LyricsScreenComponent {
  @Input() lyrics;
  @Input() visible: boolean;
  @ViewChild('accordion') accordion: ElementRef;
  accordionState: boolean[] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.lyrics.forEach((song, i) => this.accordionState.push(i === 0));
  }

  ngOnChanges() {
    this.visible && this.showFirstLyrics();
  }

  showFirstLyrics(): void {
    const lyricsHeaderElement = this.accordion.nativeElement.firstChild.firstChild;
    this.toggleAccordion(lyricsHeaderElement, 0);
  }

  onAccordionClick($event, i: number): void {
    $event.stopPropagation();
    const lyricsHeaderElement = this.accordion.nativeElement.children[i].firstChild;
    this.accordionState[i] = !this.accordionState[i];
    this.toggleAccordion(lyricsHeaderElement, i);
  }

  toggleAccordion(lyricsHeaderElement, i: number): void {
    lyricsHeaderElement.classList.toggle("active");

    const lyricsContentElement = lyricsHeaderElement.nextElementSibling;
    const maxHeight = this.accordionState[i] ? `${lyricsContentElement.scrollHeight}px` : null;
    this.renderer.setStyle(lyricsContentElement, 'maxHeight', maxHeight);
  }
}