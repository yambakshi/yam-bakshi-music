import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stutter',
  templateUrl: './stutter.component.html',
  styleUrls: ['./stutter.component.scss']
})
export class StutterComponent implements OnInit {
  cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
  releaseData = {
    title: "Yam Bakshi - Stutter",
    descriptionTitle: "Stutter",
    favicon: `${this.cloudinaryPrefix}v1589725576/stutter/favicon_tjbh1o.ico`,
    artwork: `${this.cloudinaryPrefix}v1589704997/stutter/artwork_n4ah6v.png`,
    backgroundImg: `${this.cloudinaryPrefix}v1589706035/stutter/background_epu6g3.png`,
    links: {
      "Spotify": "https://open.spotify.com/track/2fJtgqXs5IUrqIbnpyPpkY?si=V9PVdlIGSxm2HeYRTnIW_g",
      "AppleMusic": "https://music.apple.com/il/album/stutter-single/1497439324",
      "iTunesStore": "https://music.apple.com/il/album/stutter-single/1497439324",
      "Deezer": "https://www.deezer.com/album/129873472?utm_source=deezer&utm_content=album-129873472&utm_term=3486418944_1589705252&utm_medium=web",
      "YouTubeMusic": "https://www.youtube.com/watch?v=PejPHc8Qzxw",
      "AmazonMusic": "https://www.amazon.com/Stutter-Yam-Bakshi/dp/B084F8N245/ref=sr_1_2?dchild=1&keywords=yam+bakshi&qid=1589705342&sr=8-2",
      "Soundcloud": "https://soundcloud.com/yambakshi/stutter",
      "Bandcamp": "https://yambakshi.bandcamp.com/track/stutter-2"
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