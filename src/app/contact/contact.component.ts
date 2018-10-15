import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
private cmpy:string;
  private company: string;
  private msg: string;
  constructor( private api:ApiService) {}
  ngOnInit() {
    this.api.dS.subscribe(dataSharing => this.company = dataSharing );
    this.msg="Hello Im Property Binding";
  }
  changename(){
    this.api.datapassing(this.cmpy);
  }
}
