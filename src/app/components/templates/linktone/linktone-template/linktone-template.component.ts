import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PlatformsService } from '@root/app/services/platforms.service';
import { CloudinaryService } from '@services/cloudinary.service';

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
  @ViewChild('linktoneBody') linktoneBody: ElementRef;

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

  constructor(
    private renderer: Renderer2,
    public platformsService: PlatformsService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setTabsLine(this.selectedTab);
    let selectedElement = this.linktoneBody.nativeElement.children[this.selectedTab];
    this.renderer.setStyle(selectedElement, 'display', 'flex');
  }

  setTabsLine(i: number): void {
    let selectedTab = this.headerTabs.nativeElement.children[i];
    let tabWidth = selectedTab.offsetWidth;
    let tabLeft = selectedTab.offsetLeft;
    this.renderer.setStyle(this.tabsLine.nativeElement, 'left', `${tabLeft}px`);
    this.renderer.setStyle(this.tabsLine.nativeElement, 'width', `${tabWidth}px`);
  }

  selectTab(i: number): void {
    if (i === this.selectedTab) return;
    let deselectedElement = this.linktoneBody.nativeElement.children[this.selectedTab];
    this.renderer.setStyle(deselectedElement, 'display', 'none');
    this.selectedTab = i;
    this.setTabsLine(i);
    let selectedElement = this.linktoneBody.nativeElement.children[this.selectedTab];
    this.renderer.setStyle(selectedElement, 'display', 'flex');
  }
}