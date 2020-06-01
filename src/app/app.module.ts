import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from './app.providers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShyComponent } from '@components/shy/shy.component';
import { StutterComponent } from '@components/stutter/stutter.component';
import { StutterEpComponent } from '@components/stutter-ep/stutter-ep.component';
import { SmartlinkComponent } from '@components/smartlink/smartlink.component';
import { SmartlinkFooterComponent } from '@components/smartlink-footer/smartlink-footer.component';
import { MySleepParalysisComponent } from '@components/my-sleep-paralysis/my-sleep-paralysis.component';

@NgModule({
  declarations: [
    AppComponent,
    ShyComponent,
    StutterComponent,
    StutterEpComponent,
    SmartlinkComponent,
    SmartlinkFooterComponent,
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
