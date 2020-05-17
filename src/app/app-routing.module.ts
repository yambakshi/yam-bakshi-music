import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StutterComponent } from '@components/stutter/stutter.component';
import { StutterEpComponent } from '@components/stutter-ep/stutter-ep.component';


const routes: Routes = [
  { path: '', component: StutterEpComponent },
  { path: 'stutter', component: StutterComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
