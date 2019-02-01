import { Component, OnInit, Input } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  providers: [NgbPopoverConfig] 
})
export class IconComponent implements OnInit {
  @Input() profile;
  constructor(config: NgbPopoverConfig) {
    config.placement = "bottom";
    config.triggers = "hover"
  }

  ngOnInit() {
  }

}
