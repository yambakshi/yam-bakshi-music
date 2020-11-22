import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CloudinaryService } from '@services/cloudinary.service';
import { DownloadsService } from '@services/downloads.service';



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
    @ViewChild('audioPlayer') audioPlayer: ElementRef;
    @ViewChild('seekSlider') seekSlider: ElementRef;

    avatar: string = '/v1605622365/gallery/avatar_kftj3u.jpg';
    selectedSong: number = 0;
    paused: boolean = false;
    muted: boolean = false;
    duration: string = '00:00';
    currentTime: string = '00:00';
    seekSliderValue: number = 0;
    fileSource: string = '';

    constructor(
        private downloadsService: DownloadsService,
        private cloudinaryService: CloudinaryService) {
    }

    ngOnInit(): void {
        const { prefix } = this.cloudinaryService;
        this.releaseData.graphics.avatar = `${prefix}${this.avatar}`;
        this.selectSong(this.selectedSong);
    }

    ngAfterViewInit(): void {
        this.audioPlayer.nativeElement.addEventListener('loadedmetadata', () => {
            let audioPlayerElement = this.audioPlayer.nativeElement;
            this.duration = this.stringifyElapsedTime(audioPlayerElement.duration);
            this.currentTime = this.stringifyElapsedTime(audioPlayerElement.currentTime);
            this.seekSlider.nativeElement.max = audioPlayerElement.duration;
            this.seekSlider.nativeElement.setAttribute("value", this.audioPlayer.nativeElement.currentTime);   
        });

        this.audioPlayer.nativeElement.addEventListener('timeupdate', () => {
            let audioPlayerElement = this.audioPlayer.nativeElement;
            let numericCurrentTime = audioPlayerElement.currentTime;
            this.currentTime = this.stringifyElapsedTime(numericCurrentTime);
            this.seekSliderValue = numericCurrentTime;

            // When the audio ends, we need to hide the pause button and show the play button
            if (audioPlayerElement.ended) {
                let nextSongIndex = this.selectedSong + 1 < this.releaseData.lyrics.length ? (this.selectedSong + 1) : 0;
                this.selectSong(nextSongIndex);
            }
        });
    }

    seekSliderChanged(): void {
        this.audioPlayer.nativeElement.currentTime = this.seekSlider.nativeElement.value;
    }

    stringifyElapsedTime(inputSeconds: number): string {
        let seconds: any = Math.floor(inputSeconds % 60);
        let minutes: any = Math.floor(inputSeconds / 60);

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        return `${minutes}:${seconds}`;
    }

    selectSong(i: number): void {
        this.selectedSong = i;
        let songName = this.releaseData.lyrics[i].name;
        this.fileSource = this.downloadsService.getFileUrl(songName);
    }

    pauseAudio(state: boolean): void {
        state ? this.audioPlayer.nativeElement.pause() : this.audioPlayer.nativeElement.play();
        this.paused = state;
    }

    muteAudio(state: boolean): void {
        this.audioPlayer.nativeElement.volume = state ? 0 : 1;
        this.muted = state;
    }

    downloadSong($event, i): void {
        $event.stopPropagation();
        const filename = this.releaseData.lyrics[i].name;
        this.downloadsService.downloadFile('Songs', filename, 'audio/mpeg', 'mp3').catch(console.error);
    }
}