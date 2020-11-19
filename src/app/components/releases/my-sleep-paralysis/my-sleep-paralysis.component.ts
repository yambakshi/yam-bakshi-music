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
      type: "SINGLE",
      released: true,
    },
    graphics: {
      favicon: "v1603385851/releases/my-sleep-paralysis/favicon_cktpgx.ico",
      artwork: "v1603385859/releases/my-sleep-paralysis/artowrk_txdb0i.jpg",
      background: "v1603385971/releases/my-sleep-paralysis/background_aaj03j.jpg",
      og: "v1604051923/releases/my-sleep-paralysis/og_k04ckg.jpg"
    },
    links: {
      "Spotify": "https://open.spotify.com/track/3NCrzhT8ma585iIDvCILPV?si=xRRjtABISpm_TmCfXR28Yg",
      "AppleMusic": "https://music.apple.com/il/album/my-sleep-paralysis/1535847255?i=1535847256",
      "iTunesStore": "https://music.apple.com/il/album/my-sleep-paralysis/1535847255?i=1535847256",
      "Deezer": "https://deezer.page.link/Nidb9tx46hGKzMxUA",
      "YouTubeMusic": "https://www.youtube.com/watch?v=4zGZQvbxhwU&list=OLAK5uy_nbNk4dBto4gNv-bLWpn610p1t3SqSQoQw",
      "AmazonMusic": "https://www.amazon.com/My-Sleep-Paralysis-Yam-Bakshi/dp/B08L7244RM/ref=sr_1_11?dchild=1&keywords=yam+bakshi&qid=1605260732&sr=8-11",
      "Soundcloud": "https://soundcloud.com/yambakshi/my-sleep-paralysis",
      "Bandcamp": "https://yambakshi.bandcamp.com/track/my-sleep-paralysis-2"
    },
    lyrics: [{
      name: 'My Sleep Paralysis',
      lyrics: `Grains of sand slip out of your hand
It seems that you've got no other options
Lucid dreams or nightmares
Coexist with yourself, return to the path
A fraction of a second
Right before you take the shot

Look at me

But instead, you’re probably dead
Do exactly as instructed
And if it should happen
Coexist with yourself
You were so close

Close to me`
    }],
    credits: `מילים ולחן: ים בקשי
הפקה: ים בקשי
עיבוד: ים בקשי
מיקס: ארן לביא וים בקשי
מאסטר: ארן לביא

שירה: ים בקשי
קלידים: ים בקשי
גיטרות: ים בקשי
בס: ים בקשי
תופים: עמית כהן

טכנאי הקלטת תופים: איתמר אפשר
תופים הוקלטו באולפני ברדו

עיצוב עטיפה: עומר ענבר
צילום תמונת עטיפה: רן עזרא

יצירת קשר
איש קשר: ים בקשי
yambakshi@gmail.com :מייל
טלפון: 052-4232753`
  }

  constructor() { }

  ngOnInit(): void {
  }
}