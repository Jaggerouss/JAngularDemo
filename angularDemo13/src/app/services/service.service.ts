import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public domin:string = 'http://a.itying.com/';

  constructor(public http:HttpClient) { }

  //domin + api = url
  get(api:string){
    return new Promise((resolve,reject)=>{
      this.http.get(this.domin + api).subscribe((response)=>{
        resolve(response);
      })
    })
  }
}
