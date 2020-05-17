import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShyComponent } from './components/shy/shy.component';
import { StutterComponent } from '@components/stutter/stutter.component';
import { StutterEpComponent } from '@components/stutter-ep/stutter-ep.component';
import { StutterEpPreSaveComponent } from './components/stutter-ep-pre-save/stutter-ep-pre-save.component';


const routes: Routes = [
  { path: '', component: StutterEpPreSaveComponent },
  { path: 'stutter-ep', component: StutterEpComponent },
  { path: 'stutter', component: StutterComponent },
  { path: 'shy', component: ShyComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
