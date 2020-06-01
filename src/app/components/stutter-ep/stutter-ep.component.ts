import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { MetaTagsService } from '@services/meta-tags.service';
import { Title } from '@angular/platform-browser';
import { CloudinaryService } from '@services/cloudinary.service';

@Component({
  selector: 'app-stutter-ep',
  templateUrl: './stutter-ep.component.html',
  styleUrls: ['./stutter-ep.component.scss']
})
export class StutterEpComponent implements OnInit {
  metaData = { title: "Yam Bakshi - Stutter EP" };
  releaseData = {
    released: true,
    descriptionTitle: "Stutter EP",
    favicon: "v1589725229/stutter-ep/favicon_rqrnvr.ico",
    artwork: "v1589194126/stutter-ep/artwork_ehv7fz.png",
    backgroundImg: "v1589194126/stutter-ep/background_qlkzad.png",
    links: {
      "Spotify": "https://open.spotify.com/album/4Rjpjmd2QvNsfwAz6Mst7M?si=p32BbfvBRVqBZTNmuek1Qw",
      "AppleMusic": "https://music.apple.com/il/album/stutter-ep/1510122304",
      "iTunesStore": "https://music.apple.com/il/album/stutter-ep/1510122304",
      "Deezer": "https://www.deezer.com/album/144372412?utm_source=deezer&utm_content=album-144372412&utm_term=3486418944_1590269988&utm_medium=web",
      "YouTubeMusic": "https://www.youtube.com/watch?v=sa_JQ1aZcRs&list=OLAK5uy_l6CpVywxDEHoxDk-u5knBF97iz5Q3whRQ",
      "AmazonMusic": "https://www.amazon.com/Stutter-EP-Explicit-Yam-Bakshi/dp/B0886GC83K/ref=sr_1_3?dchild=1&keywords=yam+bakshi&qid=1590271060&sr=8-3",
      "Soundcloud": "https://soundcloud.com/yambakshi/sets/stutter-ep",
      "Bandcamp": "https://yambakshi.bandcamp.com/album/stutter-ep"
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