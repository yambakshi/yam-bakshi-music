import { Component, OnInit, Input } from '@angular/core';
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

    selectedTab: number = 0;
    selectedSong: number = 0;

    constructor(
      public platformsService: PlatformsService) {
    }

    ngOnInit(): void {
    }

    selectSong(i: number): void {
      this.selectedSong = i;
    }
}