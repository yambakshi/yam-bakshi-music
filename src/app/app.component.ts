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
        big: `${this.cloudinaryPrefix}v1589301599/streaming-platforms/big/spotify-black_rii4x8.png`,
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
        big: `${this.cloudinaryPrefix}v1589304167/streaming-platforms/big/apple-music_qd85pv.png`,
        small: `${this.cloudinaryPrefix}v1589305606/streaming-platforms/small/apple-music_f8fskk.png`
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
        big: `${this.cloudinaryPrefix}v1589301070/streaming-platforms/big/itunes-store_gwv5f6.png`,
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
        big: `${this.cloudinaryPrefix}v1589303303/streaming-platforms/big/deezer_haceax.png`,
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
        big: `${this.cloudinaryPrefix}v1589303227/streaming-platforms/big/youtube_zdjnf6.png`,
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
        big: `${this.cloudinaryPrefix}v1589303525/streaming-platforms/big/amazon-music_bl5vrg.svg`,
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
        big: `${this.cloudinaryPrefix}v1589300977/streaming-platforms/big/bandcamp_vaaq8h.png`,
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
  ];

  socials = [
    "Facebook",
    "Instagram",
    "Twitter"
  ];
}