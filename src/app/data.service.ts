import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name : BehaviorSubject<string> = new BehaviorSubject<string>("");
  picture: BehaviorSubject<string> = new BehaviorSubject<string>("");
  bio: BehaviorSubject<string> = new BehaviorSubject<string>("");

  qualifications : BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([""]);

  profiles : Array<Profile> = new Array<Profile>();
  publications: Array<Publication> = new Array<Publication>();

  constructor(private http: HttpClient) {
    var _qualifications = [];
    this.http.get("assets/me.json").subscribe((data: MeJson) => {
      this.name.next(this._parseName(data.anagraphic.fullname))
      this.picture.next(data.anagraphic.picture)
      this.bio.next(data.anagraphic.bio)

      data.digitalidentity.profiles.forEach(profile => {
        this.profiles.push(profile)
      })
      for(var publication of data.publications){
        this.publications.push(publication)
      }
      this.publications = this.publications.sort((a,b) => {
        if(new Date(a.date.year, a.date.month, a.date.day)
        <
        new Date(b.date.year, b.date.month, b.date.day))
          return 1;
        else
          return -1;
      })

      for (var qualification of data.anagraphic.qualifications){
        _qualifications.push(qualification)
      }
      this.qualifications.next(_qualifications)
    })
  }

  _parseName(fullname){
    return fullname.first+" "+
    (fullname.middle.split(" ").map(e => e[0].toUpperCase()+".")).join(" ")+" "+
    fullname.last;
  }


  getPicture(){
    return this.picture
  }

  getName(){
    return this.name
  }

  getBio(){
    return this.bio
  }

  getQualifications(){
    return this.qualifications
  }

  getProfiles(){
    return this.profiles
  }

  getPublications(){
    return this.publications
  }
}
