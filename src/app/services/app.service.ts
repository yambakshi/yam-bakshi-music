import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';


@Injectable()
export class AppService {
    name: string = 'Yam Bakshi';
    url: string = 'https://www.yambakshimusic.com';
    description: string = 'Yam Bakshi - Official Website';
    author: string = 'Yam Bakshi';
    fbAppId: string = '197844390286201';
    googleSiteVerification: string = 'AYSmVReqZft_P875ZtkU0APwURAkJy9hzsPdpVyWMp0';
    og: { width: string, height: string } = { width: '1200', height: '628' };

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private meta: Meta) { }

    setMetadata({ og, favicon }) {
        this.setLink('shortcut icon', favicon);
        this.setLink('canonical', this.document.URL);
        this.setLink('image_src', og);
        this.setMetaTags(og);
    }

    setLink(rel: string, href: string) {
        this.document.querySelector(`head > link[rel="${rel}"]`).setAttribute('href', href);
    }

    setMetaTags(og: string): void {
        // Facebook OG
        this.meta.updateTag({ property: 'fb:app_id', content: this.fbAppId });
        this.meta.updateTag({ property: 'og:site_name', content: this.name },);
        this.meta.updateTag({ property: 'og:title', content: this.name });
        this.meta.updateTag({ property: 'og:url', content: this.url });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:description', content: this.description });
        this.meta.updateTag({ property: 'og:image', content: og });
        this.meta.updateTag({ property: 'og:image:width', content: this.og.width });
        this.meta.updateTag({ property: 'og:image:height', content: this.og.height });

        // Generic Meta Tags
        this.meta.updateTag({ content: this.name }, 'itemprop="name"');
        this.meta.updateTag({ content: this.url }, 'itemprop="url"');
        this.meta.updateTag({ content: this.description }, 'itemprop="description"');
        this.meta.updateTag({ content: og }, 'itemprop="thumbnailUrl"');
        this.meta.updateTag({ content: og }, 'itemprop="image"');

        // Twitter OG
        this.meta.updateTag({ name: 'twitter:title', content: this.name });
        this.meta.updateTag({ name: 'twitter:image', content: og });
        this.meta.updateTag({ name: 'twitter:url', content: this.url });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:description', content: this.description });

        // Google Verification
        this.meta.updateTag({ property: 'google-site-verification', content: this.googleSiteVerification });

        // More Meta Tags
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ name: 'author', content: this.description });
    }
}