import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '@services/app.service';
import { PlatformsService } from '@services/platforms.service';
import { MetaTagsService } from '@root/app/services/meta-tags.service';

@Component({
  selector: 'app-stutter-ep-pre-save',
  templateUrl: './stutter-ep-pre-save.component.html',
  styleUrls: ['./stutter-ep-pre-save.component.scss']
})
export class StutterEpPreSaveComponent implements OnInit {
  cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
  metaData = { title: "Yam Bakshi - Stutter EP" };
  releaseData = {
    favicon: `${this.cloudinaryPrefix}v1589725229/stutter-ep/favicon_rqrnvr.ico`,
    artwork: `${this.cloudinaryPrefix}v1589194126/stutter-ep/artwork_ehv7fz.png`,
    backgroundImg: `${this.cloudinaryPrefix}v1589194126/stutter-ep/background_qlkzad.png`,
  }

  constructor(
    private titleService: Title,
    private appService: AppService,
    public platformsService: PlatformsService,
    private metaTagsService: MetaTagsService) {
    this.titleService.setTitle(this.metaData.title);
    this.appService.setAppFavicon(this.releaseData.favicon);
    this.metaTagsService.setMetaTags({
      title: this.metaData.title,
      artwork: this.releaseData.artwork
    });
  }

  ngOnInit(): void {
  }
}