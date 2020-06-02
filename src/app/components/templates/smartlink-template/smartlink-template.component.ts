import { Component, OnInit, Input } from '@angular/core';
import { PlatformsService } from '@root/app/services/platforms.service';

@Component({
  selector: 'smartlink-template',
  templateUrl: './smartlink-template.component.html',
  styleUrls: ['./smartlink-template.component.scss']
})
export class SmartlinkTemplateComponent implements OnInit {
  @Input() releaseData;

  constructor(public platformsService: PlatformsService) { }

  ngOnInit(): void {
  }

  get releasePlatforms(): string[] {
    return Object.keys(this.releaseData.links);
  }
}