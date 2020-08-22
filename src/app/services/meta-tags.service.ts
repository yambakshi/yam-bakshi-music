import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class MetaTagsService {
    isBrowser: boolean;
    googleSiteVerification: string = 'AYSmVReqZft_P875ZtkU0APwURAkJy9hzsPdpVyWMp0'
    siteName: string = "Yam Bakshi - Official Website";
    description: string = "Yam Bakshi - Official Website";

    constructor(
        @Inject(PLATFORM_ID) platformId: Object,
        private meta: Meta
        ) { 
            this.isBrowser = isPlatformBrowser(platformId);
        }

    setMetaTags({ title, artwork }): void {
        const url = this.isBrowser ? window.location.href : 'https://www.yambakshimusic.com"';

        // Twitter OG
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: this.siteName });
        this.meta.updateTag({ name: 'twitter:title', content: title });
        this.meta.updateTag({ name: 'twitter:description', content: this.description });
        this.meta.updateTag({ name: 'twitter:image', content: artwork });

        // Facebook OG
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: this.description });
        this.meta.updateTag({ property: 'og:image', content: artwork });
        this.meta.updateTag({ property: 'og:url', content: url });

        // Google Verification
        this.meta.updateTag({ property: 'google-site-verification', content: this.googleSiteVerification });
    }
}