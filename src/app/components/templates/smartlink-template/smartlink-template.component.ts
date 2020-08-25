import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '@services/app.service';
import { Title } from '@angular/platform-browser';
import { CloudinaryService } from '@services/cloudinary.service';
import { PlatformsService } from '@root/app/services/platforms.service';

@Component({
  selector: 'smartlink-template',
  templateUrl: './smartlink-template.component.html',
  styleUrls: [
    './smartlink-template.component.common.scss',
    './smartlink-template.component.desktop.scss',
    './smartlink-template.component.mobile.scss'
  ]
})
export class SmartlinkTemplateComponent implements OnInit {
  @Input() releaseData;
  showLyricsActive: boolean = true;
  showLyrics: boolean = false;

  constructor(
    private titleService: Title,
    private appService: AppService,
    private cloudinaryService: CloudinaryService,
    public platformsService: PlatformsService,
  ) { }

  ngOnInit(): void {
    const { graphics } = this.releaseData;
    const { favicon, artwork, background, og } = graphics;
    const { prefix } = this.cloudinaryService;

    this.releaseData.graphics.favicon = `${prefix}${favicon}`;
    this.releaseData.graphics.artwork = `${prefix}${artwork}`;
    this.releaseData.graphics.background = `${prefix}${background}`;
    this.releaseData.graphics.og = `${prefix}${og}`;

    this.titleService.setTitle(this.appService.name);
    this.appService.setMetadata(this.releaseData.graphics)
  }

  get releasePlatforms(): string[] {
    return Object.keys(this.releaseData.links);
  }

  toggleShowLyrics(): void {
    this.showLyricsActive = false;
    this.showLyrics = !this.showLyrics;
  }
}