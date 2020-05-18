import { Injectable } from '@angular/core';

@Injectable()
export class CloudinaryService {
    cloudinaryPrefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";

    constructor() { }
}