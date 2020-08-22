import { AppService } from '@services/app.service';
import { PlatformsService } from '@services/platforms.service';
import { MetaTagsService } from '@services/meta-tags.service';
import { CloudinaryService } from './services/cloudinary.service';

export const APP_PROVIDERS = [
    AppService,
    PlatformsService,
    MetaTagsService,
    CloudinaryService
];