import { Injectable } from '@angular/core';

@Injectable()
export class CloudinaryService {
    prefix: string = "https://res.cloudinary.com/yambakshimusic/image/upload/f_auto/";

    constructor() { }
}