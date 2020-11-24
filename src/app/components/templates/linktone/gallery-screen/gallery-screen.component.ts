import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
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
  @Input() visible: boolean;
  @ViewChild('galleryImagesContainerElement') galleryImagesContainerElement: ElementRef;
  @ViewChild('nextImageElement') nextImageElement: ElementRef;
  @ViewChild('prevImageElement') prevImageElement: ElementRef;
  margin: number = 100;

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
    this.centerImage();
  }

  @HostListener("window:resize", [])
  private onResize(): void {
    this.centerImage();
  }

  ngOnChanges() {
    if (this.visible) {
      this.centerImage();
    }
  }

  nextImage(): void {
    const galleryImagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    const imagesContainersElements = galleryImagesContainerElement.children;
    const imagesCount = imagesContainersElements.length;

    if (this.selectedImageIndex + 1 == imagesCount - 1) {
      this.renderer.setStyle(this.nextImageElement.nativeElement, 'visibility', 'hidden');
    } else if (this.selectedImageIndex == 0) {
      this.renderer.setStyle(this.prevImageElement.nativeElement, 'visibility', 'visible');
    }

    const prevImageWidth = imagesContainersElements[this.selectedImageIndex].offsetWidth;
    this.selectedImageIndex++;

    let prevImagesWidth = 0;
    for (let i = 0; i < this.selectedImageIndex - 1; i++) {
      prevImagesWidth += imagesContainersElements[i].offsetWidth;
    }

    const selectedImageElement = imagesContainersElements[this.selectedImageIndex];
    const selectedImageWidth = selectedImageElement.offsetWidth;
    const translation = prevImagesWidth + (this.margin * this.selectedImageIndex) + selectedImageWidth + (prevImageWidth / 2);
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translate(${-translation}px, 0%)`);
  }

  prevImage(): void {
    const galleryImagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    const imagesContainersElements = galleryImagesContainerElement.children;
    const imagesCount = imagesContainersElements.length;

    if (this.selectedImageIndex - 1 == 0) {
      this.renderer.setStyle(this.prevImageElement.nativeElement, 'visibility', 'hidden');
    } else if (this.selectedImageIndex == imagesCount - 1) {
      this.renderer.setStyle(this.nextImageElement.nativeElement, 'visibility', 'visible');
    }

    this.selectedImageIndex--;

    let prevImagesWidth = 0;
    for (let i = 0; i < this.selectedImageIndex; i++) {
      prevImagesWidth += imagesContainersElements[i].offsetWidth;
    }

    const selectedImageElement = imagesContainersElements[this.selectedImageIndex];
    const selectedImageWidth = selectedImageElement.offsetWidth;
    const translation = prevImagesWidth + (this.margin * this.selectedImageIndex) + selectedImageWidth;
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translate(${-translation}px, 0%)`);
  }

  centerImage(): void {
    const galleryImagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    const imagesContainersElements = galleryImagesContainerElement.children;

    let prevImagesWidth = 0;
    for (let i = 0; i < this.selectedImageIndex; i++) {
      prevImagesWidth += imagesContainersElements[i].offsetWidth;
    }

    const selectedImageElement = imagesContainersElements[this.selectedImageIndex];
    const selectedImageWidth = selectedImageElement.offsetWidth;
    const translation = prevImagesWidth + (this.margin * this.selectedImageIndex) + (selectedImageWidth / 2);
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translate(${-translation}px, 0%)`);
  }
}