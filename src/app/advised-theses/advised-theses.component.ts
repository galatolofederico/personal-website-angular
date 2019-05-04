import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {Observer} from 'rxjs/Rx'


@Component({
  selector: 'app-advised-theses',
  templateUrl: './advised-theses.component.html',
  styleUrls: ['./advised-theses.component.scss']
})
export class AdvisedThesesComponent implements OnInit {

  theses: Observer<Array<AdvisedThesis>>
  constructor(private data: DataService) { }

  ngOnInit() {
    this.theses = this.data.getAdvisedTheses()
  }

}
