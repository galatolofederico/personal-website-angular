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

  qualifications : BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  publications: BehaviorSubject<Array<Publication>> = new BehaviorSubject<Array<Publication>>([]);
  software : BehaviorSubject<Array<Software>> = new BehaviorSubject<Array<Software>>([]);

  profiles : Array<Profile> = new Array<Profile>();

  constructor(private http: HttpClient) {
    let _qualifications = [];
    let _publications = [];
    let _software = [];

    this.http.get("assets/me.json").subscribe((data: MeJson) => {
      this.name.next(this._parseName(data.anagraphic.fullname))
      this.picture.next(data.anagraphic.picture)
      this.bio.next(data.anagraphic.bio)

      data.digitalidentity.profiles.forEach(profile => {
        this.profiles.push(profile)
      })
      for(let publication of data.publications){
        _publications.push(publication)
      }
      this.publications.next(_publications.sort((a,b) => {
        if(new Date(a.date.year, a.date.month, a.date.day)
        <
        new Date(b.date.year, b.date.month, b.date.day))
          return 1;
        else
          return -1;
      }))

      for (let qualification of data.anagraphic.qualifications){
        _qualifications.push(qualification)
      }
      this.qualifications.next(_qualifications)

      for(let soft of data.projects){
        _software.push(soft)
      }
      this.software.next(_software)

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

  getSoftware(){
    return this.software
  }
}
