import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

import {combineLatest, BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  lecture : BehaviorSubject<Publication | any> = new BehaviorSubject<Publication | any>({});

  constructor(private route: ActivatedRoute, private data: DataService){
    combineLatest(this.route.params.map(p => p.name), data.getLectures())
    .subscribe(([name, lectures]) => {
      lectures.forEach(lecture => {
        if (lecture.name == name) this.lecture.next(lecture);
      })
    })
  }

  ngOnInit() {
  }

}
