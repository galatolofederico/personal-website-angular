import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  platforms = []
  
  constructor(private data: DataService) {
    library.add(fab)
  }

  ngOnInit() {
    this.platforms = this.data.getProfiles();
  }

}
