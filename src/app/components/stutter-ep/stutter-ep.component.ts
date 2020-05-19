import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { MetaTagsService } from '@root/app/services/meta-tags.service';
import { Title } from '@angular/platform-browser';
import { CloudinaryService } from '@root/app/services/cloudinary.service';

@Component({
  selector: 'app-stutter-ep',
  templateUrl: './stutter-ep.component.html',
  styleUrls: ['./stutter-ep.component.scss']
})
export class StutterEpComponent implements OnInit {
  metaData = { title: "Yam Bakshi - Stutter EP" };
  releaseData = {
    descriptionTitle: "Stutter EP",
    favicon: "v1589725229/stutter-ep/favicon_rqrnvr.ico",
    artwork: "v1589194126/stutter-ep/artwork_ehv7fz.png",
    backgroundImg: "v1589194126/stutter-ep/background_qlkzad.png",
    links: {
      "Spotify": "",
      "AppleMusic": "",
      "iTunesStore": "",
      "Deezer": "",
      "YouTubeMusic": "",
      "AmazonMusic": "",
      "Soundcloud": "",
      "Bandcamp": ""
    }
  }

  constructor(
    private titleService: Title,
    private appService: AppService,
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