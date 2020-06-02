import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-sleep-paralysis',
  templateUrl: './my-sleep-paralysis.component.html',
  styleUrls: ['./my-sleep-paralysis.component.scss']
})
export class MySleepParalysisComponent implements OnInit {
  releaseData = {
    meta: {
      name: "My Sleep Paralysis",
      released: false,
    },
    graphics: {
      favicon: "v1590919056/my-sleep-paralysis/favicon_x7n4fg.ico",
      artwork: "v1590919074/my-sleep-paralysis/artwork_hopfb9.png",
      backgroundImg: "v1590919059/my-sleep-paralysis/background_zmrrpe.png",
    },
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

  constructor() { }

  ngOnInit(): void {
  }
}