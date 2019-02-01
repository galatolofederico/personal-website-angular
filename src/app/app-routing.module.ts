import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {PublicationsComponent} from "./publications/publications.component"

const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"publications", component: PublicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
