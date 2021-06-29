import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { WindowRefService } from '@root/app/services/window-ref.service';
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
    { url: '/v1605714414/linktone/gallery/1_py52ie.jpg', description: 'Transparent Video Shoot #1 (Alon Daniel)' },
    { url: '/v1605714414/linktone/gallery/4_olunpi.jpg', description: 'PR Photoshoot (Eran Ezra)' },
    { url: '/v1605714475/linktone/gallery/2_ix0c4v.jpg', description: 'Transparent Video Shoot #2 (Alon Daniel)' },
    { url: '/v1605714414/linktone/gallery/3_jpzp7x.jpg', description: 'Levontin 7, Tel Aviv, December 3, 2020 (Eran Ezra)' },
    { url: '/v1605714414/linktone/gallery/5_ltedcl.jpg', description: 'Hoodna Bar, Tel Aviv, February 15, 2020 (Eran Ezra)' },
  ]

  selectedImageIndex: number = 0;

  constructor(
    private renderer: Renderer2,
    private windowRefService: WindowRefService,
    @Inject(PLATFORM_ID) private platformId: any,
    private cloudinaryService: CloudinaryService) {
  }

  ngOnInit(): void {
    const { prefix } = this.cloudinaryService;
    this.images = this.images.map(image => ({ ...image, url: `${prefix}${image.url}` }));
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.calcMargin();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.calcMargin();
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

    this.selectedImageIndex++;

    let prevImagesWidth = 0;
    for (let i = 0; i < this.selectedImageIndex; i++) {
      prevImagesWidth += imagesContainersElements[i].offsetWidth;
    }

    const selectedImageWidth = imagesContainersElements[this.selectedImageIndex].offsetWidth;
    const translation = prevImagesWidth + (this.margin * this.selectedImageIndex) + (selectedImageWidth / 2);
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translateX(${-translation}px)`);

    this.showArrows(imagesContainersElements.length);
  }

  prevImage(): void {
    const galleryImagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    const imagesContainersElements = galleryImagesContainerElement.children;

    this.selectedImageIndex--;

    let prevImagesWidth = 0;
    for (let i = 0; i < this.selectedImageIndex; i++) {
      prevImagesWidth += imagesContainersElements[i].offsetWidth;
    }

    const selectedImageWidth = imagesContainersElements[this.selectedImageIndex].offsetWidth;
    const translation = prevImagesWidth + (this.margin * this.selectedImageIndex) + (selectedImageWidth / 2);
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translateX(${-translation}px)`);

    this.showArrows(imagesContainersElements.length);
  }

  centerImage(): void {
    const galleryImagesContainerElement = this.galleryImagesContainerElement.nativeElement;
    const imagesContainersElements = galleryImagesContainerElement.children;

    const windowWidth = this.windowRefService.nativeWindow.innerWidth;
    const containerHeight = galleryImagesContainerElement.clientHeight;
    const windowRatio = windowWidth / containerHeight;

    let prevImagesWidth = 0;
    Array.from(imagesContainersElements).forEach((img: any, i) => {
      const imgWidth = img.offsetWidth, imgHeight = img.offsetHeight;
      const imgRatio = imgWidth / imgHeight;

      if (imgRatio < windowRatio) {
        this.renderer.setStyle(img, 'height', '90%');
      } else {
        this.renderer.setStyle(img, 'width', '90%');
        this.renderer.setStyle(img, 'height', `${(imgHeight / imgWidth) * img.offsetWidth}px`);
      }

      this.renderer.setStyle(img, 'margin-right', `${this.margin}px`);

      if (i < this.selectedImageIndex) {
        prevImagesWidth += imagesContainersElements[i].offsetWidth;
      }
    })

    const selectedImageWidth = imagesContainersElements[this.selectedImageIndex].offsetWidth;
    const translation = prevImagesWidth + (this.margin * this.selectedImageIndex) + (selectedImageWidth / 2);
    this.renderer.setStyle(galleryImagesContainerElement, 'transform', `translateX(${-translation}px)`);

    this.showArrows(imagesContainersElements.length);
  }

  private calcMargin() {
    const windowWidth = this.windowRefService.nativeWindow.innerWidth;
    const ratio = Math.abs(100 - 50) / (1920 - 375);
    this.margin = 100 - (ratio * (1920 - windowWidth));
  }

  private showArrows(imagesCount: number) {
    if (this.selectedImageIndex + 1 == imagesCount) {
      this.renderer.setStyle(this.nextImageElement.nativeElement, 'visibility', 'hidden');
    } else if (this.selectedImageIndex == 0) {
      this.renderer.setStyle(this.prevImageElement.nativeElement, 'visibility', 'hidden');
    } else {
      this.renderer.setStyle(this.nextImageElement.nativeElement, 'visibility', 'visible');
      this.renderer.setStyle(this.prevImageElement.nativeElement, 'visibility', 'visible');
    }
  }
}