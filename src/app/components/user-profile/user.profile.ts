import { Component } from '@angular/core';

@Component({
    selector: "user-profile",
    templateUrl: "user.profile.html",
    styleUrls: ["user.profile.sass"]
})

export class UserProfile {
    mainImg = "assets/michelle.jpg";
    selectImg = [new Image("assets/michelle.jpg", "assets/michelle.jpg"),
        new Image("assets/michelle2.png", "assets/michelle2.png"),
        new Image("assets/michelle3.jpg", "assets/michelle3.jpg"),
        new Image("assets/michelle4.jpg", "assets/michelle4.jpg")];
    button = "Show me";


    //tabs = [
    //    {
    //        buttonName: "tab1",
    //        content: "Hello",
    //        active: false
    //    },
    //    {
    //        buttonName: "tab2",
    //        content: "Goodbye",
    //        active: true
    //    }
    //];
    //
    //showContent(button){
    //    this.tabs.forEach(function(item){
    //        item.active = false;
    //    });
    //    button.active = true;
    //}

    changePic(src) {
        this.mainImg = src;

    }

}



export class Image {
    image:string;
    smallImage:string;

    constructor(image, smallImage) {
        this.image = image;
        this.smallImage = smallImage;
    }

}


