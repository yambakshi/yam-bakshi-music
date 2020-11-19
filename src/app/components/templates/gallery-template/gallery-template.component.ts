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
  @ViewChild('galleryImagesContainerElement') galleryImagesContainerElement: ElementRef;
  @ViewChild('nextImageElement') nextImageElement: ElementRef;
  @ViewChild('prevImageElement') prevImageElement: ElementRef;
  selectedImageIndex: number = 0;

  constructor(
    private renderer: Renderer2,
    private cloudinaryService: CloudinaryService) {
  }

  ngOnInit(): void {
    const { prefix } = this.cloudinaryService;
    this.images = this.images.map(imageUrl => `${prefix}${imageUrl}`);
  }

  ngAfterViewInit(): void {
    this.galleryImagesContainerElement.nativeElement.children[this.selectedImageIndex].children[0].addEventListener('load', this.onImageLoad.bind(this));
  }

  nextImage(): void {
    let galleryImagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    let imagesContainersElements = galleryImagesContainerElement.children;
    let imagesCount = imagesContainersElements.length;

    if (this.selectedImageIndex + 1 == imagesCount - 1) {
      this.renderer.setStyle(this.nextImageElement.nativeElement, 'visibility', 'hidden');
    } else if (this.selectedImageIndex == 0) {
      this.renderer.setStyle(this.prevImageElement.nativeElement, 'visibility', 'visible');
    }

    this.selectedImageIndex++;

    let prevImagesWidth = 0, margin = 100;
    for (let i = 0; i < this.selectedImageIndex; i++) {
      prevImagesWidth += (i < this.selectedImageIndex - 1 ? imagesContainersElements[i].offsetWidth : (imagesContainersElements[i].offsetWidth / 2));
    }

    let selectedImageElement = imagesContainersElements[this.selectedImageIndex];
    let selectedImageWidth = selectedImageElement.offsetWidth;
    let translation = (prevImagesWidth) + (margin * this.selectedImageIndex) + selectedImageWidth;
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translate(${-translation}px, 0%)`);
  }

  prevImage(): void {
    let galleryImagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    let imagesContainersElements = galleryImagesContainerElement.children;
    let imagesCount = imagesContainersElements.length;

    if (this.selectedImageIndex - 1 == 0) {
      this.renderer.setStyle(this.prevImageElement.nativeElement, 'visibility', 'hidden');
    } else if (this.selectedImageIndex == imagesCount - 1) {
      this.renderer.setStyle(this.nextImageElement.nativeElement, 'visibility', 'visible');
    }

    let asdf = imagesContainersElements[this.selectedImageIndex].offsetWidth / 2;
    this.selectedImageIndex--;

    let prevImagesWidth = 0, margin = 100;
    for (let i = 0; i < this.selectedImageIndex; i++) {
      prevImagesWidth += imagesContainersElements[i].offsetWidth;
    }

    let selectedImageElement = imagesContainersElements[this.selectedImageIndex];
    let selectedImageWidth = selectedImageElement.offsetWidth;
    let translation = prevImagesWidth + (margin * this.selectedImageIndex) + selectedImageWidth;
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translate(${-translation}px, 0%)`);
  }

  onImageLoad(): void {
    let imagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    let imgElement = this.galleryImagesContainerElement.nativeElement.children[this.selectedImageIndex].firstElementChild;
    let originalWidth = imgElement.width, originalHeight = imgElement.height;
    let height = 800;
    let width = (originalWidth / originalHeight) * height;
    this.renderer.setStyle(imagesContainerElement, 'transform', `translate(${-width / 2}px, 0%)`);
  }
}