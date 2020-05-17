import { AppService } from '@services/app.service';
import { PlatformsService } from '@services/platforms.service';

export const APP_PROVIDERS = [
    AppService,
    PlatformsService
];
