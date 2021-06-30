import { AppService } from '@services/app.service';
import { PlatformsService } from '@services/platforms.service';
import { CloudinaryService } from '@services/cloudinary.service';
import { DownloadsService } from '@services/downloads.service';
import { WindowRefService } from './services/window-ref.service';

export const APP_PROVIDERS = [
    AppService,
    PlatformsService,
    CloudinaryService,
    DownloadsService,
    WindowRefService
];