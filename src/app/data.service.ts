import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name = "Federico Galatolo"
  profiles = [
    {
        "platform": "github",
        "value": "https://github.com/galatolofederico",
        "icon": "github"
    },
    {
        "platform": "linkedin",
        "value": "https://www.linkedin.com/in/galatolo/",
        "icon": "linkedin"
    },
    {
        "platform": "telegram",
        "value": "https://telegram.me/galatolo",
        "icon": "telegram"
    }
  ]
  constructor() { }

  getProfiles(){
    return this.profiles
  }
}
