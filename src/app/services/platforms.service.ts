import { Injectable } from '@angular/core';

@Injectable()
export class PlatformsService {
    cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
    platforms = {
        "Spotify": {
            cta: "Stream",
            artistPage: "https://open.spotify.com/artist/6oz7LyT8COPHziKlASn0HP?si=O6l70OKySc2OagtaW2x_Hg",
            icons: {
                alt: "Spotify",
                big: `${this.cloudinaryPrefix}v1589301599/streaming-platforms/big/spotify-black_rii4x8.png`,
                small: `${this.cloudinaryPrefix}v1588185204/streaming-platforms/small/spotify_kmpedi.svg`
            }
        },
        "AppleMusic": {
            cta: "Stream",
            artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
            icons: {
                alt: "Apple Music",
                big: `${this.cloudinaryPrefix}v1589304167/streaming-platforms/big/apple-music_qd85pv.png`,
                small: `${this.cloudinaryPrefix}v1589305606/streaming-platforms/small/apple-music_f8fskk.png`
            }
        },
        "iTunesStore": {
            cta: "Download",
            artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
            icons: {
                alt: "iTunes Store",
                big: `${this.cloudinaryPrefix}v1589301070/streaming-platforms/big/itunes-store_gwv5f6.png`,
            }
        },
        "Deezer": {
            cta: "Stream",
            artistPage: "https://www.deezer.com/artist/79338092?utm_source=deezer&utm_content=artist-79338092&utm_term=3486418944_1588442193&utm_medium=web",
            icons: {
                alt: "Deezer",
                big: `${this.cloudinaryPrefix}v1589303303/streaming-platforms/big/deezer_haceax.png`,
                small: `${this.cloudinaryPrefix}v1588443162/streaming-platforms/small/deezer_o9cayg.png`,
            }
        },
        "YouTubeMusic": {
            cta: "Stream",
            artistPage: "https://www.youtube.com/user/yambakshi?sub_confirmation=1",
            icons: {
                alt: "YouTube Music",
                big: `${this.cloudinaryPrefix}v1589303227/streaming-platforms/big/youtube_zdjnf6.png`,
                small: `${this.cloudinaryPrefix}v1588180498/streaming-platforms/small/youtube_l3tpk7.svg`,
            }
        },
        "AmazonMusic": {
            cta: "Download",
            artistPage: "https://www.amazon.com/s?k=yam+bakshi&ref=nb_sb_noss_2",
            icons: {
                alt: "Amazon Music",
                big: `${this.cloudinaryPrefix}v1589303525/streaming-platforms/big/amazon-music_bl5vrg.svg`,
            }
        },
        "Soundcloud": {
            cta: "Stream",
            artistPage: "https://soundcloud.com/yambakshi",
            icons: {
                alt: "Soundcloud",
                size: { width: 46.8, height: 26.68 },
                big: `${this.cloudinaryPrefix}v1589201729/streaming-platforms/big/soundcloud_jlev55.png`,
                small: `${this.cloudinaryPrefix}v1588180497/streaming-platforms/small/soundcloud_i4kych.png`,
            }
        },
        "Bandcamp": {
            cta: "Stream",
            artistPage: "https://yambakshi.bandcamp.com",
            icons: {
                alt: "Bandcamp",
                big: `${this.cloudinaryPrefix}v1589300977/streaming-platforms/big/bandcamp_vaaq8h.png`,
                small: `${this.cloudinaryPrefix}v1588444379/streaming-platforms/small/bandcamp_thcf1t.png`,
            }
        },
        "Facebook": {
            artistPage: "https://www.facebook.com/yambakshimusic",
            icons: {
                alt: "Facebook",
                small: `${this.cloudinaryPrefix}v1588180496/socials/facebook_trxpoj.svg`,
            }
        },
        "Instagram": {
            artistPage: "https://www.instagram.com/yam_bakshi",
            icons: {
                alt: "Instagram",
                small: `${this.cloudinaryPrefix}v1588180496/socials/instagram_agdiii.svg`,
            }
        },
        "Twitter": {
            artistPage: "https://twitter.com/yambakshi",
            icons: {
                alt: "Twitter",
                small: `${this.cloudinaryPrefix}v1588180496/socials/twitter_hdbalh.svg`,
            }
        },
        "Genius": {
            artistPage: "https://genius.com/artists/Yam-bakshi",
            icons: {
                alt: "Genius",
                small: `${this.cloudinaryPrefix}v1589731581/socials/genius_lh2ntf.png`,
                big: ""
            }
        }
    };

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

    constructor() { }
}