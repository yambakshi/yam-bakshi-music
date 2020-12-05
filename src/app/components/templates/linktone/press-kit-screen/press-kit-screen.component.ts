import { Component, Input } from '@angular/core';
import { DownloadsService } from '@services/downloads.service';

@Component({
    selector: 'press-kit-screen',
    templateUrl: './press-kit-screen.component.html',
    styleUrls: [
        './press-kit-screen.component.common.scss',
        './press-kit-screen.component.desktop.scss',
        './press-kit-screen.component.mobile.scss'
    ]
})
export class PressKitScreenComponent {
    @Input() releaseData;

    constructor(private downloadsService: DownloadsService) {
    }

    downloadGallery(): void {
        this.downloadsService.downloadFile('', 'Gallery', 'rar');
    }

    downloadFile(filename: string, extension: string): void {
        this.downloadsService.downloadFile(`Releases/${encodeURIComponent(this.releaseData.meta.name)}/`, filename, extension);
    }
}