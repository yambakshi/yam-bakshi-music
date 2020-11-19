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

  images = {
    avatar: '/v1605622365/gallery/avatar_kftj3u.jpg',
    gallery: [
      { url: '/v1605714414/gallery/1_py52ie.jpg', description: 'Transparent Video Shoot #1 (Alon Daniel)' },
      { url: '/v1605714414/gallery/4_olunpi.jpg', description: 'PR Photoshoot (Eran Ezra)' },
      { url: '/v1605714475/gallery/2_ix0c4v.jpg', description: 'Transparent Video Shoot #2 (Alon Daniel)' },
      { url: '/v1605714414/gallery/3_jpzp7x.jpg', description: 'Levontin 7, Tel Aviv, December 3, 2020 (Eran Ezra)' },
      { url: '/v1605714414/gallery/5_ltedcl.jpg', description: 'Hoodna Bar, Tel Aviv, February 15, 2020 (Eran Ezra)' },
    ]
  }

  selectedTab: number = 0;
  selectedSong: number = 0;
  lyricsExpandState: boolean[] = [];

  constructor(
    private renderer: Renderer2,
    public platformsService: PlatformsService,
    private cloudinaryService: CloudinaryService) {
  }

  ngOnInit(): void {
    const { prefix } = this.cloudinaryService;
    const { avatar } = this.images;
    this.releaseData.graphics.avatar = `${prefix}${avatar}`;
    this.releaseData.lyrics.forEach(song => this.lyricsExpandState.push(false));
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

  selectSong(i: number): void {
    this.selectedSong = i;
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

  toggleExpandLyrics(i: number): void {
    this.lyricsExpandState[i] = !this.lyricsExpandState[i];
  }
}