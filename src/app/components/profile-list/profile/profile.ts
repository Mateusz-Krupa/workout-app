import { Component, Input} from '@angular/core';

@Component({
  selector: "profile",
  templateUrl: "profile.html",
  styleUrls: ["profile.sass"]
})
export class Profile {

  @Input()
  user
}



