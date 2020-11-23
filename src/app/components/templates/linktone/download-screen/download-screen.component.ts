import { Component, Input } from '@angular/core';
import { DownloadsService } from '@services/downloads.service';

@Component({
    selector: 'download-screen',
    templateUrl: './download-screen.component.html',
    styleUrls: [
        './download-screen.component.common.scss',
        './download-screen.component.desktop.scss',
        './download-screen.component.mobile.scss'
    ]
})
export class DownloadScreenComponent {
    @Input() releaseData;

    constructor(private downloadsService: DownloadsService) {
    }

    downloadRelease(): void {
        const releaseName = this.releaseData.meta.name;
        switch (this.releaseData.meta.type) {
            case 'SINGLE':
                this.downloadsService.downloadFile('Songs/', releaseName, 'mp3').catch(console.error);
                break;

            default:
                this.downloadsService.downloadFile(`Releases/${releaseName}`, releaseName, 'rar').catch(console.error);
                break;
        }
    }

    downloadSong(i: number): void {
        const filename = this.releaseData.lyrics[i].name;
        this.downloadsService.downloadFile('Songs/', filename, 'mp3').catch(console.error);
    }
}