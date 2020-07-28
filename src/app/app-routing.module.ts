import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShyComponent } from '@components/releases/shy/shy.component';
import { StutterComponent } from '@components/releases/stutter/stutter.component';
import { StutterEpComponent } from '@components/releases/stutter-ep/stutter-ep.component';
import { MySleepParalysisComponent } from '@components/releases/my-sleep-paralysis/my-sleep-paralysis.component';
import { TransparentVideoClipComponent } from '@components/temp-campaigns/transparent-video-clip/transparent-video-clip.component';


const routes: Routes = [
  { path: '', component: TransparentVideoClipComponent },
  { path: 'stutter-ep', component: StutterEpComponent },
  { path: 'my-sleep-paralysis', component: MySleepParalysisComponent },
  { path: 'stutter', component: StutterComponent },
  { path: 'shy', component: ShyComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
