import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private company: string;
  constructor( private api:ApiService) {}
  ngOnInit() {
    this.api.dS.subscribe(dataSharing => this.company = dataSharing );
    
  }

}
