import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var typed = new Typed("#typed", {
        strings: ["PhD Student", "Machine Learning Engineer", "Computer Engineer"],
        showCursor: false,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1000,
        loop: true
    });
  }

}
