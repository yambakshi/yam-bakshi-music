import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { MetaTagsService } from '@services/meta-tags.service';
import { Title } from '@angular/platform-browser';
import { CloudinaryService } from '@services/cloudinary.service';
import { PlatformsService } from '@services/platforms.service';

@Component({
  selector: 'app-my-sleep-paralysis-pre-save',
  templateUrl: './my-sleep-paralysis-pre-save.component.html',
  styleUrls: ['./my-sleep-paralysis-pre-save.component.scss']
})
export class MySleepParalysisPreSaveComponent implements OnInit {
  metaData = { title: "Yam Bakshi - My Sleep Paralysis" };
  releaseData = {
    favicon: "v1590919056/my-sleep-paralysis/favicon_x7n4fg.ico",
    artwork: "v1590919074/my-sleep-paralysis/artwork_hopfb9.png",
    backgroundImg: "v1590919059/my-sleep-paralysis/background_zmrrpe.png",
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
