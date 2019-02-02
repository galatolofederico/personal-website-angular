import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {
  lectures: Observer<Lecture[]>;
  constructor(private data: DataService) {
    this.lectures = data.getLectures()
  }

  ngOnInit() {

  }

}
