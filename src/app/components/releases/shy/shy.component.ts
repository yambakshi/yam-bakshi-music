import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shy',
  templateUrl: './shy.component.html',
  styleUrls: ['./shy.component.scss']
})
export class ShyComponent implements OnInit {
  releaseData = {
    meta: {
      name: "Shy",
      released: true,
    },
    graphics: {
      favicon: "v1589729776/releases/shy/favicon_xltdu4.ico",
      artwork: "v1589729797/releases/shy/artwork_fdyrjx.png",
      background: "v1589730470/releases/shy/background_b5sidt.png",
      og: ""
    },
    links: {
      "Spotify": "https://open.spotify.com/track/4sj4bL3MmutjSqWcolyjKr",
      "AppleMusic": "https://music.apple.com/il/album/shy-single/1488885785",
      "iTunesStore": "https://music.apple.com/il/album/shy-single/1488885785",
      "Deezer": "https://www.deezer.com/album/120187772?utm_source=deezer&utm_content=album-120187772&utm_term=3486418944_1589728289&utm_medium=web",
      "YouTubeMusic": "https://www.youtube.com/watch?v=vRJm9pqe7-I",
      "AmazonMusic": "https://www.amazon.com/Shy-Explicit-Yam-Bakshi/dp/B081VLWHSG/ref=sr_1_3?dchild=1&keywords=yam+bakshi&qid=1589728368&sr=8-3",
      "Soundcloud": "https://soundcloud.com/yambakshi/shy",
      "Bandcamp": "https://yambakshi.bandcamp.com/track/shy-2"
    },
    lyrics: [{
      name: 'Shy',
      lyrics: `If you'll stay awake
Between early and too late
Circles will appear in the sphere
No one sees a thing
Between you and me
You are a bit skeptical

Go and take a ride on the stupid thing
No one ever listens
No I won’t be surprised
If you won't take me
Flying in your tin can

You are a bit selfish

If you'll stay awake
Between early and too late
Circles will appear in the sphere
No one sees a thing
Between you and me
You are a bit selfish

Go and take a ride on the stupid thing
No one ever listens
No I won’t be surprised
If you won't take me
Flying in your tin can

I smell the pesticides
Connection advertisement
With an appetite
For something far more real

Than what you offer so
Leave me the fuck alone
And I’ll be grateful
For what you give`
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }
}