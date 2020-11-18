import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('galleryImagesContainer') galleryImagesContainer: ElementRef;
  selectedImage: number = 0;

  constructor(
    private renderer: Renderer2,
    private cloudinaryService: CloudinaryService) {
  }

  ngOnInit(): void {
      const { prefix } = this.cloudinaryService;
      this.images = this.images.map(imageUrl => `${prefix}${imageUrl}`);
  }

  ngAfterViewInit(): void {
    this.galleryImagesContainer.nativeElement.children[this.selectedImage].addEventListener('onLoad', this.onImageLoad.bind(this));
  }

  nextImage(): void {
    if (this.selectedImage == this.galleryImagesContainer.nativeElement.children.length - 1) return;
    this.selectedImage++;
    this.centerImage();
  }

  prevImage(): void {
    if (this.selectedImage == 0) return;
    this.selectedImage--;
    this.centerImage();
  }

  centerImage(): void {
    let imagesContainerElement = this.galleryImagesContainer.nativeElement;
    let selectedImage = imagesContainerElement.children[this.selectedImage];
    let imageWidth = selectedImage.offsetWidth;

    let imageStart = 0;
    let margin = 100;
    for (let j = 0; j < this.selectedImage; j++) {
      imageStart += (imagesContainerElement.children[j].offsetWidth + margin);
    }

    let imagePos = imageStart + (imageWidth / 2);

    this.renderer.setStyle(this.galleryImagesContainer.nativeElement, 'transform', `translate(${-imagePos}px, 0%)`);

  }

  onImageLoad(): void {
    this.centerImage();
  }
}