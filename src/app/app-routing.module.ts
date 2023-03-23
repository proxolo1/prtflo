import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cmpts/home/home.component';
import { WorkComponent } from './cmpts/work/work.component';

const routes: Routes = [
  {
    path:'work',component:WorkComponent
  },
  {
    path:'',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
