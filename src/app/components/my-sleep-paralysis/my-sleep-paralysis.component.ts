import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { MetaTagsService } from '@services/meta-tags.service';
import { Title } from '@angular/platform-browser';
import { CloudinaryService } from '@services/cloudinary.service';

@Component({
  selector: 'app-my-sleep-paralysis',
  templateUrl: './my-sleep-paralysis.component.html',
  styleUrls: ['./my-sleep-paralysis.component.scss']
})
export class MySleepParalysisComponent implements OnInit {
  metaData = { title: "Yam Bakshi - My Sleep Paralysis" };
  releaseData = {
    released: true,
    descriptionTitle: "My Sleep Paralysis",
    favicon: "v1590919056/my-sleep-paralysis/favicon_x7n4fg.ico",
    artwork: "v1590919074/my-sleep-paralysis/artwork_hopfb9.png",
    backgroundImg: "v1590919059/my-sleep-paralysis/background_zmrrpe.png",
    links: {
      "Spotify": "",
      "AppleMusic": "",
      "iTunesStore": "",
      "Deezer": "",
      "YouTubeMusic": "",
      "AmazonMusic": "",
      "Soundcloud": "https://soundcloud.com/yambakshi/my-sleep-paralysis/s-BQADo",
      "Bandcamp": ""
    }
  }

  constructor(
    private titleService: Title,
    private appService: AppService,
    private metaTagsService: MetaTagsService,
    private cloudinaryService: CloudinaryService
  ) {
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