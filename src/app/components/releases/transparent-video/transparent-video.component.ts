import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transparent-video',
  templateUrl: './transparent-video.component.html',
  styleUrls: ['./transparent-video.component.scss']
})
export class TransparentVideoClipComponent implements OnInit {
  releaseData = {
    meta: {
      name: "Transparent",
      released: true,
    },
    graphics: {
      favicon: "v1589725229/releases/transparent-video/favicon_ltjq6j.ico",
      artwork: "v1589194126/releases/transparent-video/artwork_uyhsdq.png",
      background: "v1589194126/releases/transparent-video/background_eqorfd.png",
      og: 'v1598125384/releases/transparent-video/og_hkzgee.png'
    },
    links: {
      "YouTube": "https://www.youtube.com/watch?v=gMXQjf8idXc",
      "Spotify": "https://open.spotify.com/track/2LPIpfeEpUVEKOq8tK9LmH?si=C7nvJoMyS-KPayI-JjYg5w",
      "AppleMusic": "https://music.apple.com/il/album/transparent/1510122304?i=1510122997",
      "Soundcloud": "https://soundcloud.com/yambakshi/transparent"
    },
    lyrics: [
    {
      name: 'Transparent',
      lyrics: `A drug that changes
My behavior
And pulls me further away from you

Soft as a feather
I'll calm your anger
I'll eat the pieces that you can't chew

Move the curtains
Leave them open
Let the sunbeams into the room

Because I know I can't
Romanticize my suicide
I'll come prepared

So that when the clock strikes twelve
I'll overcome both my fear of heights
And my fear of death

I'll crash`
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }
}