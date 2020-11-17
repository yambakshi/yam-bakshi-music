import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PlatformsService } from '@root/app/services/platforms.service';

@Component({
  selector: 'linktone-template',
  templateUrl: './linktone-template.component.html',
  styleUrls: [
    './linktone-template.component.common.scss',
    './linktone-template.component.desktop.scss',
    './linktone-template.component.mobile.scss'
  ]
})
export class LinktoneTemplateComponent implements OnInit {
    @Input() releaseData;
    @ViewChild('headerTabs') headerTabs: ElementRef;
    @ViewChild('tabsLine') tabsLine: ElementRef;

    moreMusic = [
      "Spotify",
      "AppleMusic",
      "Deezer",
      "YouTubeMusic",
      "Bandcamp",
      "Soundcloud"
    ];
  
    socials = [
      "Facebook",
      "Instagram",
      "Twitter",
      "Genius"
    ];

    linktoneTabs: string[] = [
      "MAIN",
      "LYRICS",
      "CREDITS",
      "GALLERY",
      "PRESS",
      "PRESS KIT",
      "DOWNLOAD",
    ]

    selectedTab: number = 0;
    selectedSong: number = 0;

    constructor(
      private renderer: Renderer2,
      public platformsService: PlatformsService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
      this.setTabsLine(this.selectedTab);
    }

    setTabsLine(i: number): void {
      let tabWidth = this.headerTabs.nativeElement.children[i].offsetWidth;
      let tabLeft = this.headerTabs.nativeElement.children[i].offsetLeft;
      this.renderer.setStyle(this.tabsLine.nativeElement, 'left', `${tabLeft}px`);
      this.renderer.setStyle(this.tabsLine.nativeElement, 'width', `${tabWidth}px`);
    }

    selectSong(i: number): void {
      this.selectedSong = i;
    }

    selectTab(i: number): void {
      this.selectedTab = i;
      this.setTabsLine(i);
    }
}