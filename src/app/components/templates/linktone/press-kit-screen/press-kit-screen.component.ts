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
    fileTypes = {
        'Microsoft Word': {
            mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            extension: 'docx'
        },
        'PDF': {
            mimeType: 'application/pdf', 
            extension: 'pdf'
        },
        'RAR': {
            mimeType: 'application/rar',
            extension: 'rar'
        }
    }

    constructor(private downloadsService: DownloadsService) {
    }

    downloadGallery(): void {
        const { mimeType, extension } = this.fileTypes['RAR'];
        this.downloadsService.downloadFile('', 'Gallery',  mimeType, extension);
    }

    downloadFile(filename: string, filetype: string): void {
        const filepath = `Releases/${this.releaseData.meta.name}`;
        const { mimeType, extension } = this.fileTypes[filetype];
        this.downloadsService.downloadFile(filepath, filename, mimeType, extension);
    }
}