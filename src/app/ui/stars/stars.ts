import { Component, Input, OnChanges, SimpleChange } from '@angular/core';


@Component({
  selector: "stars",
  templateUrl: "stars.html",
  styleUrls: ["stars.sass"]
})
export class Stars {

  @Input()
  items: number;

  starsArray = [];

  ngOnChanges(changes) {
    this.createStarsArray(changes.items.currentValue);
  }

  createStarsArray(numberOfStars){
    this.starsArray = [];
    for(let i=0;i<numberOfStars;i++){
      this.starsArray.push({filled: true, position: i});
    }
  }

}
