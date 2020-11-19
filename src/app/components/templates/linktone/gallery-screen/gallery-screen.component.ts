import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { CloudinaryService } from '@services/cloudinary.service';

@Component({
  selector: 'gallery-screen',
  templateUrl: './gallery-screen.component.html',
  styleUrls: [
    './gallery-screen.component.common.scss',
    './gallery-screen.component.desktop.scss',
    './gallery-screen.component.mobile.scss'
  ]
})
export class GalleryScreenComponent implements OnInit {
  @ViewChild('galleryImagesContainerElement') galleryImagesContainerElement: ElementRef;
  @ViewChild('nextImageElement') nextImageElement: ElementRef;
  @ViewChild('prevImageElement') prevImageElement: ElementRef;

  images: { url: string, description: string }[] = [
    { url: '/v1605714414/gallery/1_py52ie.jpg', description: 'Transparent Video Shoot #1 (Alon Daniel)' },
    { url: '/v1605714414/gallery/4_olunpi.jpg', description: 'PR Photoshoot (Eran Ezra)' },
    { url: '/v1605714475/gallery/2_ix0c4v.jpg', description: 'Transparent Video Shoot #2 (Alon Daniel)' },
    { url: '/v1605714414/gallery/3_jpzp7x.jpg', description: 'Levontin 7, Tel Aviv, December 3, 2020 (Eran Ezra)' },
    { url: '/v1605714414/gallery/5_ltedcl.jpg', description: 'Hoodna Bar, Tel Aviv, February 15, 2020 (Eran Ezra)' },
  ]

  selectedImageIndex: number = 0;

  constructor(
    private renderer: Renderer2,
    private cloudinaryService: CloudinaryService) {
  }

  ngOnInit(): void {
    const { prefix } = this.cloudinaryService;
    this.images = this.images.map(image => ({ ...image, url: `${prefix}${image.url}` }));
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