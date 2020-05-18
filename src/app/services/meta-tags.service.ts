import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class MetaTagsService {
    siteName: string = "Yam Bakshi - Official Website";
    description: string = "Yam Bakshi - Official Website";

    constructor(
        private meta: Meta,
        private window: Window) { }

    setMetaTags({ title, artwork }): void {
        const url = this.window.location.href;

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
    }
}