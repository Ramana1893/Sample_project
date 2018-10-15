import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
@Injectable()
export class ApiService {
  
  private dataSharing = new BehaviorSubject('ARI');
  dS= this.dataSharing.asObservable();
  constructor(private http: HttpClient) { }
  sendData(url,formvalue) : Observable<any>{
    
const r=  this.http.post(url,formvalue).map(result => result);

const sub=r.subscribe(data =>{
  console.log(data)
})
return r;
  }
  datapassing(newValue){
    this.dataSharing.next(newValue)
  }
}

