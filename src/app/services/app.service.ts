import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Injectable()
export class AppService {
    constructor(@Inject(DOCUMENT) private document: Document) { }

    setAppFavicon(url: string) {
        this.document.getElementById('favicon').setAttribute('href', url);
    }
}