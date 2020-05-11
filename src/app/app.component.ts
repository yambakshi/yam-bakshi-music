import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
  platforms = {
    "Spotify": {
      cta: "Stream",
      links: {
        artistPage: "https://open.spotify.com/artist/6oz7LyT8COPHziKlASn0HP?si=O6l70OKySc2OagtaW2x_Hg",
        release: ""
      },
      icons: {
        alt: "Spotify",
        big: `${this.cloudinaryPrefix}v1588182100/streaming-platforms/big/spotify_gtsbmd.png`,
        small: `${this.cloudinaryPrefix}v1588185204/streaming-platforms/small/spotify_kmpedi.svg`
      }
    },
    "AppleMusic": {
      cta: "Stream",
      links: {
        artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
        release: ""
      },
      icons: {
        alt: "Apple Music",
        big: `${this.cloudinaryPrefix}v1588337095/streaming-platforms/big/apple-music_lhjro4.png`,
        small: `${this.cloudinaryPrefix}v1588442101/streaming-platforms/small/apple-music_klh2ue.png`
      }
    },
    "iTunesStore": {
      cta: "Download",
      links: {
        artistPage: "",
        release: ""
      },
      icons: {
        alt: "iTunes Store",
        big: `${this.cloudinaryPrefix}v1589202159/streaming-platforms/big/itunes_a9zifr.png`,
      }
    },
    "Deezer": {
      cta: "Stream",
      links: {
        artistPage: "https://www.deezer.com/artist/79338092?utm_source=deezer&utm_content=artist-79338092&utm_term=3486418944_1588442193&utm_medium=web",
        release: ""
      },
      icons: {
        alt: "Deezer",
        big: `${this.cloudinaryPrefix}v1588182100/streaming-platforms/big/deezer_l1k1w5.png`,
        small: `${this.cloudinaryPrefix}v1588443162/streaming-platforms/small/deezer_o9cayg.png`,
      }
    },
    "YouTubeMusic": {
      cta: "Stream",
      links: {
        artistPage: "https://www.youtube.com/user/yambakshi?sub_confirmation=1",
        release: ""
      },
      icons: {
        alt: "YouTube Music",
        big: `${this.cloudinaryPrefix}v1589201516/streaming-platforms/big/youtube_bvfphs.png`,
        small: `${this.cloudinaryPrefix}v1588180498/streaming-platforms/small/youtube_l3tpk7.svg`,
      }
    },
    "AmazonMusic": {
      cta: "Stream",
      links: {
        artistPage: "",
        release: ""
      },
      icons: {
        alt: "Amazon Music",
        big: `${this.cloudinaryPrefix}v1589201606/streaming-platforms/big/amazon_music_mtns1y.png`,
      }
    },
    "Soundcloud": {
      cta: "Stream",
      links: {
        artistPage: "https://soundcloud.com/yambakshi",
        release: ""
      },
      icons: {
        alt: "Soundcloud",
        size: { width: 46.8, height: 26.68 },
        big: `${this.cloudinaryPrefix}v1589201729/streaming-platforms/big/soundcloud_jlev55.png`,
        small: `${this.cloudinaryPrefix}v1588180497/streaming-platforms/small/soundcloud_i4kych.png`,
      }
    },
    "Bandcamp": {
      cta: "Stream",
      links: {
        artistPage: "https://yambakshi.bandcamp.com/",
        release: ""
      },
      icons: {
        alt: "Bandcamp",
        big: `${this.cloudinaryPrefix}v1589201840/streaming-platforms/big/bandcamp_vvtrjv.png`,
        small: `${this.cloudinaryPrefix}v1588444379/streaming-platforms/small/bandcamp_thcf1t.png`,
      }
    },
    "Facebook": {
      links: {
        artistPage: "https://www.facebook.com/yambakshimusic",
      },
      icons: {
        alt: "Facebook",
        small: `${this.cloudinaryPrefix}v1588180496/socials/facebook_trxpoj.svg`,
      }
    },
    "Instagram": {
      cta: "Stream",
      links: {
        artistPage: "https://www.instagram.com/yam_bakshi",
      },
      icons: {
        alt: "Instagram",
        small: `${this.cloudinaryPrefix}v1588180496/socials/instagram_agdiii.svg`,
      }
    },
    "Twitter": {
      cta: "Stream",
      links: {
        artistPage: "https://twitter.com/yambakshi",
      },
      icons: {
        alt: "Twitter",
        small: `${this.cloudinaryPrefix}v1588180496/socials/twitter_hdbalh.svg`,
      }
    },
  };

  releasePlatforms = [
    "Spotify",
    "AppleMusic",
    "iTunesStore",
    "Deezer",
    "YouTubeMusic",
    "AmazonMusic",
    "Soundcloud",
    "Bandcamp"
  ];

  moreMusic = [
    "Spotify",
    "AppleMusic",
    "Deezer",
    "YouTubeMusic",
    "Bandcamp",
    "Soundcloud"
  ]

  socials = [
    "Facebook",
    "Instagram",
    "Twitter"
  ]
}