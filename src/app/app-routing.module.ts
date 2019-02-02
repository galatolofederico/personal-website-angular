import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {PublicationsComponent} from "./publications/publications.component"
import {PublicationComponent} from "./publication/publication.component"
import {SoftwareComponent} from "./software/software.component"

const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"publications", component: PublicationsComponent},
  {path: "publication/:name", component: PublicationComponent},
  {path: "software", component: SoftwareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
