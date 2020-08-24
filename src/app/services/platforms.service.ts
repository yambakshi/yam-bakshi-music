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
                    big: 'v1598175552/streaming-platforms/big/spotify_fn5uyo.svg',
                    small: 'v1588185204/streaming-platforms/small/spotify_kmpedi.svg'
                }
            },
            "AppleMusic": {
                artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
                cta: "Stream",
                icons: {
                    alt: "Apple Music",
                    big: 'v1598173711/streaming-platforms/big/apple-music_iwexff.svg',
                    small: 'v1598175788/streaming-platforms/small/apple-music_ufk7r9.svg'
                }
            },
            "iTunesStore": {
                artistPage: "https://music.apple.com/il/artist/yam-bakshi/1488408087",
                cta: "Download",
                icons: {
                    alt: "iTunes Store",
                    big: 'v1598174410/streaming-platforms/big/itunes-store_hvdse8.svg',
                }
            },
            "Deezer": {
                artistPage: "https://www.deezer.com/artist/79338092?utm_source=deezer&utm_content=artist-79338092&utm_term=3486418944_1588442193&utm_medium=web",
                cta: "Stream",
                icons: {
                    alt: "Deezer",
                    big: 'v1598174219/streaming-platforms/big/deezer_db5y77.svg',
                    small: 'v1598176127/streaming-platforms/small/deezer_rxxsar.svg',
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
            "YouTube": {
                artistPage: "https://www.youtube.com/user/yambakshi?sub_confirmation=1",
                cta: "Watch",
                icons: {
                    alt: "YouTube",
                    big: 'v1598175330/streaming-platforms/big/youtube_c1l08l.svg',
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
                    big: 'v1598174636/streaming-platforms/big/soundcloud_wkbfge.svg',
                    small: 'v1598176337/streaming-platforms/small/soundcloud_g9ltsq.svg',
                }
            },
            "Bandcamp": {
                artistPage: "https://yambakshi.bandcamp.com",
                cta: "Stream",
                icons: {
                    alt: "Bandcamp",
                    big: 'v1598173968/streaming-platforms/big/bandcamp_qbxwlz.svg',
                    small: 'v1598175959/streaming-platforms/small/bandcamp_lgpgan.svg',
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
                    small: 'v1598173432/socials/genius_xxlnbl.svg',
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