import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-stutter-ep',
  templateUrl: './stutter-ep.component.html',
  styleUrls: ['./stutter-ep.component.scss']
})
export class StutterEpComponent implements OnInit {
  cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
  releaseData = {
    title: "Yam Bakshi - Stutter EP",
    descriptionTitle: "Stutter EP",
    favicon: `${this.cloudinaryPrefix}v1589725229/stutter-ep/favicon_rqrnvr.ico`,
    artwork: `${this.cloudinaryPrefix}v1589194126/stutter-ep/artwork_ehv7fz.png`,
    backgroundImg: `${this.cloudinaryPrefix}v1589194126/stutter-ep/background_qlkzad.png`,
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
    private appService: AppService) {
    this.titleService.setTitle(this.releaseData.title);
    this.appService.setAppFavicon(this.releaseData.favicon);
  }

  ngOnInit(): void {
  }
}