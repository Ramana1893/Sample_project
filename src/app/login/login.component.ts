import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from "@angular/router";

import { FormGroup, FormControl, FormControlName } from '@angular/forms'

//services

import {ApiService} from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private name: any;
  private pwd: any;
myForm = new FormGroup({
  loginName: new FormControl(''),
  loginPassword: new FormControl(''),
});
  
  constructor(private api : ApiService) { 

  }

  ngOnInit() {
    console.log("Ready");
  }
  onSubmit(){
    this.api.sendData('http://api.respofit.com/api/admin/GetSignIn',this.myForm.value);
  }
}
