import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publications: Array<Publication>
  constructor(private data: DataService) { }

  ngOnInit() {
    this.publications = this.data.getPublications()
  }

}
