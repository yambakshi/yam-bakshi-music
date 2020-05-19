import { Injectable } from '@angular/core';

@Injectable()
export class CloudinaryService {
    prefix: string = "https://res.cloudinary.com/dasokqhnv/image/upload/";

    constructor() { }
}