import { Component, OnInit, Input } from '@angular/core';
import { PlatformsService } from '@root/app/services/platforms.service';

@Component({
  selector: 'app-smartlink',
  templateUrl: './smartlink.component.html',
  styleUrls: ['./smartlink.component.scss']
})
export class SmartlinkComponent implements OnInit {
  @Input() releaseData;

  constructor(
    public platformsService: PlatformsService) { }

  ngOnInit(): void {
  }

  get releasePlatforms(): string[] {
    return Object.keys(this.releaseData.links);
  }
}