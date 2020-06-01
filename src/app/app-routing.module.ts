import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShyComponent } from './components/shy/shy.component';
import { StutterComponent } from '@components/stutter/stutter.component';
import { StutterEpComponent } from '@components/stutter-ep/stutter-ep.component';
import { MySleepParalysisComponent } from '@components/my-sleep-paralysis/my-sleep-paralysis.component';


const routes: Routes = [
  { path: '', component: StutterEpComponent },
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
