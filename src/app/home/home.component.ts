import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private company: string;
message="Automotive";
jokes: Object[];
  constructor( private api:ApiService) {
    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirrrror?",
        punchline: "Hello-Me (Halloumi)"
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)"
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’"
      },
    ];
  }
  
  ngOnInit() {
    this.api.dS.subscribe(dataSharing => this.company = dataSharing);
  }


  openModal(){
    console.log("OPEN MODAL");
  }


}
