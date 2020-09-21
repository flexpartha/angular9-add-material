import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cardDetails = [];

  constructor() { }

  ngOnInit(): void {
    this.cardDetails.push(
      {
        "title": "Shiba Inu",
        "subtitle": "Dog Breed",
        "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        "picture": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "actions" :{
          "action1":"LIKE",
          "action2":"SHARE"
        }
      },
      {
        "title": "Shiba Inu two",
        "subtitle": "Dog Breed two",
        "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        "picture": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "actions" :{
          "action1":"LIKE",
          "action2":"SHARE"
        }
      },
      {
        "title": "Shiba Inu three",
        "subtitle": "Dog Breed three",
        "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        "picture": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "actions" :{
          "action1":"LIKE",
          "action2":"SHARE"
        }
      },
      {
        "title": "Shiba Inu FOUR",
        "subtitle": "Dog Breed three",
        "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        "picture": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "actions" :{
          "action1":"LIKE",
          "action2":"SHARE"
        }
      },
      {
        "title": "Shiba Inu FIVE",
        "subtitle": "Dog Breed three",
        "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        "picture": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "actions" :{
          "action1":"LIKE",
          "action2":"SHARE"
        }
      },
      {
        "title": "Shiba Inu SIX",
        "subtitle": "Dog Breed three",
        "description": "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        "picture": "https://material.angular.io/assets/img/examples/shiba2.jpg",
        "actions" :{
          "action1":"LIKE",
          "action2":"SHARE"
        }
      }
    )
  }

}
