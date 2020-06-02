import { Injectable } from '@angular/core';
import { CloudinaryService } from './cloudinary.service';

@Injectable()
export class PlatformsService {
    platforms: {
        [key: string]: {
            artistPage: string;
            cta?: string;
            icons: {
                alt: string;
                small?: string;
                big?: string;
                size?: { width: number; height: number }
            }
        }
    } = {
            "Spotify": {
                artistPage: "https://open.spotify.com/artist/6oz7LyT8COPHziKlASn0HP?si=O6l70OKySc2OagtaW2x_Hg",
                cta: "Stream",
                icons: {
                    alt: "Spotify",
                    big: 'v1589301599/streaming-platforms/big/spotify-black_rii4x8.png',
                    small: 'v1588185204/streaming-platforms/small/spotify_kmpedi.svg'
                }
            },
            "AppleMusic": {
                artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
                cta: "Stream",
                icons: {
                    alt: "Apple Music",
                    big: 'v1589304167/streaming-platforms/big/apple-music_qd85pv.png',
                    small: 'v1589305606/streaming-platforms/small/apple-music_f8fskk.png'
                }
            },
            "iTunesStore": {
                artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
                cta: "Download",
                icons: {
                    alt: "iTunes Store",
                    big: 'v1589301070/streaming-platforms/big/itunes-store_gwv5f6.png',
                }
            },
            "Deezer": {
                artistPage: "https://www.deezer.com/artist/79338092?utm_source=deezer&utm_content=artist-79338092&utm_term=3486418944_1588442193&utm_medium=web",
                cta: "Stream",
                icons: {
                    alt: "Deezer",
                    big: 'v1589303303/streaming-platforms/big/deezer_haceax.png',
                    small: 'v1588443162/streaming-platforms/small/deezer_o9cayg.png',
                }
            },
            "YouTubeMusic": {
                artistPage: "https://www.youtube.com/user/yambakshi?sub_confirmation=1",
                cta: "Stream",
                icons: {
                    alt: "YouTube Music",
                    big: 'v1589303227/streaming-platforms/big/youtube_zdjnf6.png',
                    small: 'v1588180498/streaming-platforms/small/youtube_l3tpk7.svg',
                }
            },
            "AmazonMusic": {
                artistPage: "https://www.amazon.com/s?k=yam+bakshi&ref=nb_sb_noss_2",
                cta: "Download",
                icons: {
                    alt: "Amazon Music",
                    big: 'v1589303525/streaming-platforms/big/amazon-music_bl5vrg.svg',
                }
            },
            "Soundcloud": {
                artistPage: "https://soundcloud.com/yambakshi",
                cta: "Stream",
                icons: {
                    alt: "Soundcloud",
                    size: { width: 46.8, height: 26.68 },
                    big: 'v1589201729/streaming-platforms/big/soundcloud_jlev55.png',
                    small: 'v1588180497/streaming-platforms/small/soundcloud_i4kych.png',
                }
            },
            "Bandcamp": {
                artistPage: "https://yambakshi.bandcamp.com",
                cta: "Stream",
                icons: {
                    alt: "Bandcamp",
                    big: 'v1589300977/streaming-platforms/big/bandcamp_vaaq8h.png',
                    small: 'v1588444379/streaming-platforms/small/bandcamp_thcf1t.png',
                }
            },
            "Facebook": {
                artistPage: "https://www.facebook.com/yambakshimusic",
                icons: {
                    alt: "Facebook",
                    small: 'v1588180496/socials/facebook_trxpoj.svg',
                }
            },
            "Instagram": {
                artistPage: "https://www.instagram.com/yam_bakshi",
                icons: {
                    alt: "Instagram",
                    small: 'v1588180496/socials/instagram_agdiii.svg',
                }
            },
            "Twitter": {
                artistPage: "https://twitter.com/yambakshi",
                icons: {
                    alt: "Twitter",
                    small: 'v1588180496/socials/twitter_hdbalh.svg',
                }
            },
            "Genius": {
                artistPage: "https://genius.com/artists/Yam-bakshi",
                icons: {
                    alt: "Genius",
                    small: 'v1589731581/socials/genius_lh2ntf.png',
                }
            }
        };

    constructor(private cloudinaryService: CloudinaryService) {
        Object.values(this.platforms).forEach(({ icons }) => {
            if (icons.small !== undefined) {
                icons.small = `${this.cloudinaryService.prefix}${icons.small}`;
            }

            if (icons.big !== undefined) {
                icons.big = `${this.cloudinaryService.prefix}${icons.big}`;
            }
        })
    }
}