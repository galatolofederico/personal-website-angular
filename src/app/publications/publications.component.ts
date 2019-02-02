import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {Observer} from 'rxjs/Rx'

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publications: Observer<Array<Publication>>
  constructor(private data: DataService) { }

  ngOnInit() {
    this.publications = this.data.getPublications()
  }

}
