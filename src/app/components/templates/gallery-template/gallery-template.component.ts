import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { CloudinaryService } from '@services/cloudinary.service';

@Component({
  selector: 'gallery-template',
  templateUrl: './gallery-template.component.html',
  styleUrls: [
    './gallery-template.component.common.scss',
    './gallery-template.component.desktop.scss',
    './gallery-template.component.mobile.scss'
  ]
})
export class GalleryTemplateComponent implements OnInit {
  @Input() images;

  constructor(
    private renderer: Renderer2,
    private cloudinaryService: CloudinaryService) {
  }

  ngOnInit(): void {
      const { prefix } = this.cloudinaryService;
      this.images = this.images.map(imageUrl => `${prefix}${imageUrl}`);
  }
}