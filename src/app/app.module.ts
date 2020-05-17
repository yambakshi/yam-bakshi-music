import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_PROVIDERS } from './app.providers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShyComponent } from '@components/shy/shy.component';
import { StutterComponent } from '@components/stutter/stutter.component';
import { StutterEpComponent } from '@components/stutter-ep/stutter-ep.component';

@NgModule({
  declarations: [
    AppComponent,
    ShyComponent,
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
