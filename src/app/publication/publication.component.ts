import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';

import {combineLatest, BehaviorSubject} from 'rxjs'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  publication : BehaviorSubject<Publication | any> = new BehaviorSubject<Publication | any>({});

  constructor(private route: ActivatedRoute, private data: DataService){
    combineLatest(this.route.params.map(p => p.name), data.getPublications())
    .subscribe(([name, pubs]) => {
      pubs.forEach(pub => {
        if (pub.name == name){this.publication.next(pub); console.log(pub) }
      })
    })
  }

  ngOnInit() {
  }

}
