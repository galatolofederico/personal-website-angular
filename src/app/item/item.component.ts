import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() description;
  @Input() title;
  @Input() link;
  @Input("link-title") linktitle;
  @Input() class;
  constructor() { }

  ngOnInit() {
  }

}
