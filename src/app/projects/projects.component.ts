import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {Observer} from 'rxjs/Rx'
@Component({
  selector: 'app-software',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Observer<Array<Project>>
  constructor(private data: DataService) {
    this.projects = data.getProjects()
  }

  ngOnInit() {
  }

}
