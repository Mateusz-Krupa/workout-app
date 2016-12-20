import { Component } from '@angular/core'

@Component({
  selector: "profile-list",
  templateUrl: "profile.list.html",
  styleUrls: ["profile.list.sass"]
})

export class ProfileList {
  image = "/assets/profile.jpg";
  userList = [new UserInfo(), new UserInfo(), new UserInfo(), new UserInfo()];

}

export class UserInfo {
  userName = "Hillary C.";
  userImg = "/assets/hillary.jpg";
  userSport = "Tenis";
  userAddress = {
    city: "Warszawa",
    district: "Żoliborz"
  };
  userTime = {
    from: "07:00",
    to: "16:00"
  };
  userLevel = 5;
  userDesc = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz " +
    "w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez " +
    "nieznanego drukarza do wypełnienia tekstem próbnej książki."
}
