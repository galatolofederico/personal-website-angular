import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {PublicationsComponent} from "./publications/publications.component"
import {PublicationComponent} from "./publication/publication.component"
import {ProjectsComponent} from './projects/projects.component'
import {LecturesComponent} from './lectures/lectures.component'
import {LectureComponent} from './lecture/lecture.component'
import { AdvisedThesesComponent } from './advised-theses/advised-theses.component';

const routes: Routes = [
  {path:"", component: HomepageComponent},
  {path:"publications", component: PublicationsComponent},
  {path:"theses", component: AdvisedThesesComponent},
  {path: "publication/:name", component: PublicationComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "lectures", component: LecturesComponent},
  {path: "lecture/:name", component: LectureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
