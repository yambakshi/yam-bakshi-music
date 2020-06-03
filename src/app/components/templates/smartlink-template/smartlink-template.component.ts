import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '@services/app.service';
import { MetaTagsService } from '@services/meta-tags.service';
import { Title } from '@angular/platform-browser';
import { CloudinaryService } from '@services/cloudinary.service';
import { PlatformsService } from '@root/app/services/platforms.service';

@Component({
  selector: 'smartlink-template',
  templateUrl: './smartlink-template.component.html',
  styleUrls: ['./smartlink-template.component.scss']
})
export class SmartlinkTemplateComponent implements OnInit {
  @Input() releaseData;
  lyricsExpanded: boolean = false;
  showLyrics: boolean = false;

  constructor(
    private titleService: Title,
    private appService: AppService,
    private metaTagsService: MetaTagsService,
    private cloudinaryService: CloudinaryService,
    public platformsService: PlatformsService,
  ) { }

  ngOnInit(): void {
    const { meta, graphics } = this.releaseData;
    const title = `Yam Bakshi - ${meta.name}`;

    this.titleService.setTitle(title);
    this.metaTagsService.setMetaTags({
      title,
      artwork: graphics.artwork
    });

    this.releaseData.graphics.favicon = `${this.cloudinaryService.prefix}${graphics.favicon}`;
    this.releaseData.graphics.artwork = `${this.cloudinaryService.prefix}${graphics.artwork}`;
    this.releaseData.graphics.backgroundImg = `${this.cloudinaryService.prefix}${graphics.backgroundImg}`;
    this.appService.setAppFavicon(this.releaseData.graphics.favicon);
  }

  get releasePlatforms(): string[] {
    return Object.keys(this.releaseData.links);
  }

  toggleLyricsExpand(): void {
    this.lyricsExpanded = !this.lyricsExpanded;
  }

  toggleShowLyrics(): void {
    this.showLyrics = !this.showLyrics;
  }
}