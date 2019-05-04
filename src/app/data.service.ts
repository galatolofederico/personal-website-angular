import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mejson: string = "https://galatolo.me/me.json";

  name : BehaviorSubject<string> = new BehaviorSubject<string>("");
  picture: BehaviorSubject<string> = new BehaviorSubject<string>("");
  bio: BehaviorSubject<string> = new BehaviorSubject<string>("");

  qualifications : BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  publications: BehaviorSubject<Array<Publication>> = new BehaviorSubject<Array<Publication>>([]);
  advised_theses: BehaviorSubject<Array<AdvisedThesis>> = new BehaviorSubject<Array<AdvisedThesis>>([]);
  projects : BehaviorSubject<Array<Project>> = new BehaviorSubject<Array<Project>>([]);
  lectures : BehaviorSubject<Array<Lecture>> = new BehaviorSubject<Array<Lecture>>([]);
  profiles : BehaviorSubject<Array<Profile>> = new BehaviorSubject<Array<Profile>>([]);

  constructor(private http: HttpClient) {
    let _qualifications = [];
    let _publications = [];
    let _projects = [];
    let _lectures = [];
    let _profiles = []
    let _advised_theses = [];

    this.http.get(this.mejson).subscribe((data: MeJson) => {
      this.name.next(this._parseName(data.anagraphic.fullname))
      this.picture.next(data.anagraphic.picture)
      this.bio.next(data.anagraphic.bio)
      
      _profiles.push({
        platform: "phone",
        link: "tel:"+data.digitalidentity.telephone,
        icon: "fas-phone",
        description: "Call me!"
      })

      _profiles.push({
        platform: "email",
        link: "mailto:"+data.digitalidentity.email,
        icon: "fas-envelope",
        description: "Send me an email!"
      })
      
      for(let profile of data.digitalidentity.profiles){
        _profiles.push(profile)
      }
      this.profiles.next(_profiles)
      
      for(let publication of data.publications){
        _publications.push(publication)
      }
      this.publications.next(_publications.sort(this._sortDate))

      for(let advised_thesis of data.advised_theses){
        _advised_theses.push(advised_thesis)
      }
      this.advised_theses.next(_advised_theses.sort(this._sortDate))

      for (let qualification of data.anagraphic.qualifications){
        _qualifications.push(qualification)
      }
      this.qualifications.next(_qualifications)

      for(let project of data.projects){
        _projects.push(project)
      }
      this.projects.next(_projects.sort(this._sortDate))

      for(let lecture of data.lectures){
        _lectures.push(lecture)
      }
      this.lectures.next(_lectures.sort(this._sortDate))
    })
  }

  _sortDate(a,b){
    if(new Date(a.date.year, a.date.month, a.date.day)
    <
    new Date(b.date.year, b.date.month, b.date.day))
      return 1;
    else
      return -1;
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

  getAdvisedTheses(){
    return this.advised_theses
  }

  getProjects(){
    return this.projects
  }

  getLectures(){
    return this.lectures
  }
}
