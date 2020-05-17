import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from './app.providers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StutterComponent } from './stutter/stutter.component';
import { StutterEpComponent } from './stutter-ep/stutter-ep.component';

@NgModule({
  declarations: [
    AppComponent,
    StutterComponent,
    StutterEpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
