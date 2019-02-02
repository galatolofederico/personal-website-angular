import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {PublicationsComponent} from "./publications/publications.component"
import {PublicationComponent} from "./publication/publication.component"
import {ProjectsComponent} from "./projects/projects.component"

const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"publications", component: PublicationsComponent},
  {path: "publication/:name", component: PublicationComponent},
  {path: "projects", component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
