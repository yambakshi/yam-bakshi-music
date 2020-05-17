import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from '@services/app.service';
import { PlatformsService } from '@services/platforms.service';

@Component({
  selector: 'app-stutter-ep-pre-save',
  templateUrl: './stutter-ep-pre-save.component.html',
  styleUrls: ['./stutter-ep-pre-save.component.scss']
})
export class StutterEpPreSaveComponent implements OnInit {
  title: string = "Yam Bakshi - Stutter EP";
  cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";
  favicon: string = `${this.cloudinaryPrefix}v1589725229/stutter-ep/favicon_rqrnvr.ico`;
  artwork: string = `${this.cloudinaryPrefix}v1589194126/stutter-ep/artwork_ehv7fz.png`;
  backgroundImg: string = `${this.cloudinaryPrefix}v1589194126/stutter-ep/background_qlkzad.png`;

  constructor(
    private titleService: Title,
    private appService: AppService,
    public platformsService: PlatformsService) {
    this.titleService.setTitle(this.title);
    this.appService.setAppFavicon(this.favicon);
  }

  ngOnInit(): void {
  }

}
