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
      favicon: "v1603385851/releases/my-sleep-paralysis/favicon_cktpgx.ico",
      artwork: "v1603385859/releases/my-sleep-paralysis/artowrk_txdb0i.jpg",
      background: "v1603385971/releases/my-sleep-paralysis/background_aaj03j.jpg",
      og: "v1603385853/releases/my-sleep-paralysis/og_mvghix.jpg"
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
    },
    lyrics: [{
      name: 'My Sleep Paralysis',
      lyrics: `Grains of sand slip out of your hand
It seems that you've got no other options
Lucid dreams or nightmares
Coexist with yourself, return to the path
A fraction of a second
Right before you take the shot

Look to me

But instead, you’re probably dead
Do exactly as instructed
And if it should happen
Coexist with yourself
You were so close

Close to me`
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }
}