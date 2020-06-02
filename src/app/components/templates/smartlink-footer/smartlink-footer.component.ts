import { Component, OnInit } from '@angular/core';
import { PlatformsService } from '@root/app/services/platforms.service';

@Component({
  selector: 'smartlink-footer',
  templateUrl: './smartlink-footer.component.html',
  styleUrls: ['./smartlink-footer.component.scss']
})
export class SmartlinkFooterComponent implements OnInit {
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

  constructor(
    public platformsService: PlatformsService) { }

  ngOnInit(): void {
  }
}