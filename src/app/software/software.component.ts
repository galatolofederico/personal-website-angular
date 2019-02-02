import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {Observer} from 'rxjs/Rx'
@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {
  software: Observer<Array<Software>>
  constructor(private data: DataService) {
    this.software = data.getSoftware()
    data.getSoftware().subscribe(console.log)
  }

  ngOnInit() {
  }

}
