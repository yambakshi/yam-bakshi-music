import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shy',
  templateUrl: './shy.component.html',
  styleUrls: ['./shy.component.scss']
})
export class ShyComponent implements OnInit {
  cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
  releaseData = {
    title: "Yam Bakshi - Shy",
    descriptionTitle: "Shy",
    favicon: `${this.cloudinaryPrefix}v1589729776/shy/favicon_xltdu4.ico`,
    artwork: `${this.cloudinaryPrefix}v1589729797/shy/artwork_fdyrjx.png`,
    backgroundImg: `${this.cloudinaryPrefix}v1589730470/shy/background_b5sidt.png`,
    links: {
      "Spotify": "https://open.spotify.com/track/4sj4bL3MmutjSqWcolyjKr",
      "AppleMusic": "https://music.apple.com/il/album/shy-single/1488885785",
      "iTunesStore": "https://music.apple.com/il/album/shy-single/1488885785",
      "Deezer": "https://www.deezer.com/album/120187772?utm_source=deezer&utm_content=album-120187772&utm_term=3486418944_1589728289&utm_medium=web",
      "YouTubeMusic": "https://www.youtube.com/watch?v=vRJm9pqe7-I",
      "AmazonMusic": "https://www.amazon.com/Shy-Explicit-Yam-Bakshi/dp/B081VLWHSG/ref=sr_1_3?dchild=1&keywords=yam+bakshi&qid=1589728368&sr=8-3",
      "Soundcloud": "https://soundcloud.com/yambakshi/shy",
      "Bandcamp": "https://yambakshi.bandcamp.com/track/shy-2"
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