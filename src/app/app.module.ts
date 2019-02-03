import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {HttpClientModule} from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NameComponent } from './name/name.component';
import { IconComponent } from './icon/icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PublicationsComponent } from './publications/publications.component';
import { ItemComponent } from './item/item.component';
import { PublicationComponent } from './publication/publication.component';
import { ProjectsComponent } from './projects/projects.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureComponent } from './lecture/lecture.component'

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NameComponent,
    IconComponent,
    NavbarComponent,
    FooterComponent,
    PublicationsComponent,
    ItemComponent,
    PublicationComponent,
    ProjectsComponent,
    LecturesComponent,
    LectureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    Angulartics2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
