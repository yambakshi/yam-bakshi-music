import { AppService } from '@services/app.service';
import { PlatformsService } from '@services/platforms.service';
import { CloudinaryService } from './services/cloudinary.service';

export const APP_PROVIDERS = [
    AppService,
    PlatformsService,
    CloudinaryService
];