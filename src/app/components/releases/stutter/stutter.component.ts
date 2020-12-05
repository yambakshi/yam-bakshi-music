import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stutter',
  templateUrl: './stutter.component.html',
  styleUrls: ['./stutter.component.scss']
})
export class StutterComponent implements OnInit {
  releaseData = {
    meta: {
      name: "Stutter",
      type: "SINGLE",
      released: true,
    },
    graphics: {
      favicon: "v1589725576/releases/stutter/favicon_tjbh1o.ico",
      artwork: "v1589704997/releases/stutter/artwork_n4ah6v.png",
      background: "v1589706035/releases/stutter/background_epu6g3.png",
      og: ""
    },
    links: {
      "Spotify": "https://open.spotify.com/track/2fJtgqXs5IUrqIbnpyPpkY?si=V9PVdlIGSxm2HeYRTnIW_g",
      "AppleMusic": "https://music.apple.com/il/album/stutter-single/1497439324",
      "iTunesStore": "https://music.apple.com/il/album/stutter-single/1497439324",
      "Deezer": "https://www.deezer.com/album/129873472?utm_source=deezer&utm_content=album-129873472&utm_term=3486418944_1589705252&utm_medium=web",
      "YouTubeMusic": "https://www.youtube.com/watch?v=PejPHc8Qzxw",
      "AmazonMusic": "https://www.amazon.com/Stutter-Yam-Bakshi/dp/B084F8N245/ref=sr_1_2?dchild=1&keywords=yam+bakshi&qid=1589705342&sr=8-2",
      "Soundcloud": "https://soundcloud.com/yambakshi/stutter",
      "Bandcamp": "https://yambakshi.bandcamp.com/track/stutter-2"
    },
    lyrics: [{
      name: 'Stutter',
      lyrics: `I guess it's best I keep it to myself
Write it down and rip the page
Why did you stop fighting?
How did you become like this?
One after the other

I guess it's best I get it off my chest
Maybe there's a common thread
Sucked into the vacuum
Disappeared without a trace
One after the other

Memories take form
Anything you want
A coward’s decision stuck in the past

It's just like you imagined it
It's just a little scratch
And if you stop fighting
You'll be able to escape
One after the other

These are the grotesque
Impossible to tame
Piranhas that swim around in my brain

For now it'll do
Amplifying the good
So why did you give up?

(Chorus)

For now it'll do
Amplifying the good
So, how did you ended up here?

Steep slope
Treading lightly
Guess not`
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }
}