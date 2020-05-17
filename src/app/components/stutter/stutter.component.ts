import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stutter',
  templateUrl: './stutter.component.html',
  styleUrls: ['./stutter.component.scss']
})
export class StutterComponent implements OnInit {
  title: string = "Yam Bakshi - Stutter";
  descriptionTitle: string = "Stutter";
  cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
  favicon: string = `${this.cloudinaryPrefix}v1589725576/stutter/favicon_tjbh1o.ico`;
  artwork: string = `${this.cloudinaryPrefix}v1589704997/stutter/artwork_n4ah6v.png`;
  backgroundImg: string = `${this.cloudinaryPrefix}v1589706035/stutter/background_epu6g3.png`;
  platforms = {
    "Spotify": {
      cta: "Stream",
      links: {
        artistPage: "https://open.spotify.com/artist/6oz7LyT8COPHziKlASn0HP?si=O6l70OKySc2OagtaW2x_Hg",
        release: "https://open.spotify.com/track/2fJtgqXs5IUrqIbnpyPpkY?si=V9PVdlIGSxm2HeYRTnIW_g"
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
        release: "https://music.apple.com/il/album/stutter-single/1497439324"
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
        artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
        release: "https://music.apple.com/il/album/stutter-single/1497439324"
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
        release: "https://www.deezer.com/album/129873472?utm_source=deezer&utm_content=album-129873472&utm_term=3486418944_1589705252&utm_medium=web"
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
        release: "https://www.youtube.com/watch?v=PejPHc8Qzxw"
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
        artistPage: "https://www.amazon.com/s?k=Yam+Bakshi&i=digital-music&search-type=ss&ref=ntt_srch_drd_B081VD9MDY",
        release: "https://www.amazon.com/Stutter-Yam-Bakshi/dp/B084F8N245/ref=sr_1_2?dchild=1&keywords=yam+bakshi&qid=1589705342&sr=8-2"
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
        release: "https://soundcloud.com/yambakshi/stutter"
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
        release: "https://yambakshi.bandcamp.com/track/stutter-2"
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
      links: {
        artistPage: "https://www.instagram.com/yam_bakshi",
      },
      icons: {
        alt: "Instagram",
        small: `${this.cloudinaryPrefix}v1588180496/socials/instagram_agdiii.svg`,
      }
    },
    "Twitter": {
      links: {
        artistPage: "https://twitter.com/yambakshi",
      },
      icons: {
        alt: "Twitter",
        small: `${this.cloudinaryPrefix}v1588180496/socials/twitter_hdbalh.svg`,
      }
    },
    "Genius": {
      links: {
        artistPage: "https://genius.com/artists/Yam-bakshi",
        release: "https://genius.com/Yam-bakshi-stutter-lyrics"
      },
      icons: {
        alt: "Genius",
        small: `${this.cloudinaryPrefix}v1589731581/socials/genius_lh2ntf.png`,
        big: ""
      }
    }
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
    "Twitter",
    "Genius"
  ];

  constructor(
    private titleService: Title,
    private appService: AppService) {
    this.titleService.setTitle(this.title);
    this.appService.setAppFavicon(this.favicon);
  }

  ngOnInit(): void {
  }
}