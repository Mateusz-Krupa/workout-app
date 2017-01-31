import { Component, Input } from '@angular/core';

@Component({
  selector: "profile",
  templateUrl: "profile.html",
  styleUrls: ["profile.sass"]
})
export class Profile {

  @Input()
  user;

  showStatus(user){
     user.contactInfo = "skontaktowalem sie";


  }

  callStatus(user){
    user.callInfo = "Dzwoniłem do tego użytkownika";
  }
}



