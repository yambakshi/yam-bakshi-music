import { Component, OnInit, Input } from '@angular/core';
import { CloudinaryService } from '@services/cloudinary.service';

@Component({
    selector: 'side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: [
        './side-panel.component.common.scss',
        './side-panel.component.desktop.scss',
        './side-panel.component.mobile.scss'
    ]
})
export class SidePanelComponent implements OnInit {
    @Input() releaseData;
    avatar: string = '/v1605622365/gallery/avatar_kftj3u.jpg';
    selectedSong: number = 0;

    constructor(
        private cloudinaryService: CloudinaryService) {
    }

    ngOnInit(): void {
        const { prefix } = this.cloudinaryService;
        this.releaseData.graphics.avatar = `${prefix}${this.avatar}`;
    }


    selectSong(i: number): void {
        this.selectedSong = i;
    }
}