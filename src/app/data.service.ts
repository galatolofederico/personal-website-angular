import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name : Subject<string> = new Subject<string>();
  picture: Subject<string> = new Subject<string>();

  profiles : Array<Profile> = new Array<Profile>();
  qualifications : Subject<Array<string>> = new Subject<Array<string>>();

  constructor(private http: HttpClient) {
    var _qualifications = [];
    this.http.get("assets/me.json").subscribe((data: MeJson) => {
      this.name.next(this._parseName(data.anagraphic.fullname))
      this.picture.next(data.anagraphic.picture)
      data.digitalidentity.profiles.forEach(profile => {
        this.profiles.push(profile)
      })
      for (var qualification of data.anagraphic.qualifications){
        _qualifications.push(qualification)
      }
      this.qualifications.next(_qualifications)
      console.log(_qualifications)
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

  getQualifications(){
    return this.qualifications
  }

  getProfiles(){
    return this.profiles
  }
}
