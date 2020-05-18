import { Component, OnInit } from '@angular/core';
import { PlatformsService } from '@root/app/services/platforms.service';

@Component({
  selector: 'app-smartlink-footer',
  templateUrl: './smartlink-footer.component.html',
  styleUrls: ['./smartlink-footer.component.scss']
})
export class SmartlinkFooterComponent implements OnInit {

  constructor(
    public platformsService: PlatformsService) { }

  ngOnInit(): void {
  }
}