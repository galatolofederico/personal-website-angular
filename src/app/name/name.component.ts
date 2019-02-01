import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { DataService } from '../data.service';
import {Observer} from 'rxjs/Rx'

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  name : Observer<string>;
  picture: Observer<string>;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getQualifications().subscribe(qualifications => {
      if (qualifications.length > 0)
        var typed = new Typed("#typed", {
            strings: qualifications,
            showCursor: false,
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
          });
    })
    this.name = this.data.getName();
    this.picture = this.data.getPicture();
  }

}
