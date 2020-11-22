import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShyComponent } from '@components/releases/shy/shy.component';
import { StutterComponent } from '@components/releases/stutter/stutter.component';
import { StutterEpComponent } from '@components/releases/stutter-ep/stutter-ep.component';
import { MySleepParalysisComponent } from '@components/releases/my-sleep-paralysis/my-sleep-paralysis.component';
import { TransparentVideoClipComponent } from '@components/releases/transparent-video/transparent-video.component';


const routes: Routes = [
  { path: '', component: MySleepParalysisComponent },
  { path: 'linktone', component: MySleepParalysisComponent },
  { path: 'transparent-video', component: TransparentVideoClipComponent },
  { path: 'stutter-ep', component: StutterEpComponent },
  { path: 'stutter', component: StutterComponent },
  { path: 'shy', component: ShyComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
