import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from './app.providers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShyComponent } from '@components/releases/shy/shy.component';
import { StutterComponent } from '@components/releases/stutter/stutter.component';
import { StutterEpComponent } from '@components/releases/stutter-ep/stutter-ep.component';
import { MySleepParalysisComponent } from '@components/releases/my-sleep-paralysis/my-sleep-paralysis.component';
import { SmartlinkTemplateComponent } from '@components/templates/smartlink-template/smartlink-template.component';
import { SmartlinkFooterComponent } from '@components/templates/smartlink-footer/smartlink-footer.component';
import { TransparentVideoClipComponent } from '@components/temp-campaigns/transparent-video-clip/transparent-video-clip.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartlinkTemplateComponent,
    SmartlinkFooterComponent,
    ShyComponent,
    StutterComponent,
    StutterEpComponent,
    TransparentVideoClipComponent,
    MySleepParalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
