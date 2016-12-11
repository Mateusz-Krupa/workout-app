import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "stars",
  templateUrl: "stars.html",
  styleUrls: ["stars.sass"],
  encapsulation: ViewEncapsulation.Native
})
export class Stars {

  starsArray=[
    {filled:true, position: 1},
    {filled:true, position: 2},
    {filled:true, position: 3}
  ];

  onCLick(){
    this.starsArray.push({filled: true, position: 3});
  }

}
