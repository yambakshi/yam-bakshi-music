import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_PROVIDERS } from './app.providers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShyComponent } from '@components/releases/shy/shy.component';
import { StutterComponent } from '@components/releases/stutter/stutter.component';
import { StutterEpComponent } from '@components/releases/stutter-ep/stutter-ep.component';
import { MySleepParalysisComponent } from '@components/releases/my-sleep-paralysis/my-sleep-paralysis.component';
import { TransparentVideoClipComponent } from '@components/releases/transparent-video/transparent-video.component';
import { SmartlinkTemplateComponent } from '@components/templates/smartlink-template/smartlink-template.component';
import { SmartlinkFooterComponent } from '@components/templates/smartlink-footer/smartlink-footer.component';
import { LinktoneTemplateComponent } from '@components/templates/linktone/linktone-template/linktone-template.component';
import { GalleryScreenComponent } from '@components/templates/linktone/gallery-screen/gallery-screen.component';
import { LyricsScreenComponent } from '@components/templates/linktone/lyrics-screen/lyrics-screen.component';
import { PressKitScreenComponent } from '@components/templates/linktone/press-kit-screen/press-kit-screen.component';
import { DownloadScreenComponent } from '@components/templates/linktone/download-screen/download-screen.component';
import { SidePanelComponent } from '@components/templates/linktone/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartlinkTemplateComponent,
    SmartlinkFooterComponent,
    LinktoneTemplateComponent,
    LyricsScreenComponent,
    GalleryScreenComponent,
    PressKitScreenComponent,
    DownloadScreenComponent,
    SidePanelComponent,
    ShyComponent,
    StutterComponent,
    StutterEpComponent,
    TransparentVideoClipComponent,
    MySleepParalysisComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
