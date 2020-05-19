import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '@services/app.service';
import { PlatformsService } from '@services/platforms.service';
import { MetaTagsService } from '@root/app/services/meta-tags.service';
import { CloudinaryService } from '@root/app/services/cloudinary.service';

@Component({
  selector: 'app-stutter-ep-pre-save',
  templateUrl: './stutter-ep-pre-save.component.html',
  styleUrls: ['./stutter-ep-pre-save.component.scss']
})
export class StutterEpPreSaveComponent implements OnInit {
  metaData = { title: "Yam Bakshi - Stutter EP" };
  releaseData = {
    favicon: `v1589725229/stutter-ep/favicon_rqrnvr.ico`,
    artwork: `v1589194126/stutter-ep/artwork_ehv7fz.png`,
    backgroundImg: `v1589194126/stutter-ep/background_qlkzad.png`,
  }

  constructor(
    private titleService: Title,
    private appService: AppService,
    public platformsService: PlatformsService,
    private metaTagsService: MetaTagsService,
    private cloudinaryService: CloudinaryService) {
    this.titleService.setTitle(this.metaData.title);
    this.metaTagsService.setMetaTags({
      title: this.metaData.title,
      artwork: this.releaseData.artwork
    });

    this.releaseData.favicon = `${this.cloudinaryService.prefix}${this.releaseData.favicon}`;
    this.releaseData.artwork = `${this.cloudinaryService.prefix}${this.releaseData.artwork}`;
    this.releaseData.backgroundImg = `${this.cloudinaryService.prefix}${this.releaseData.backgroundImg}`;
    this.appService.setAppFavicon(this.releaseData.favicon);
  }

  ngOnInit(): void {
  }
}