import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  //同步方法
  getData(){
    return 'this is service data!'
  }
  //异步方法
  getCallBackData(cb:any){
    setTimeout(() => {
      var name = 'Jagger';
      //return name;
      cb(name);
    }, 1000);
  }

  getPromiseDate(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        var name = 'Jagger--Promise';
        resolve(name);
        reject('Reject!');
      }, 2000);
    })
  }

  getRxjsData(){
    return new Observable((observer)=>{
      setTimeout(() => {
        var name = "Jagger --- Rxjs";
        observer.next(name);
        // observer.error('rxjs Error!');
      }, 3000);
    })
  }

  //多次执行
  getPromiseIntervalData(){
    return new Promise((resolve)=>{
      setInterval(()=>{
        var name = "Jagger --- promiseInterval";
        resolve(name);
      },1000)
    })
  }

  getRxjsIntervalData(){
    let count = 0;
    return new Observable((observer)=>{
      setInterval(() => {
        count ++;
        var name = "Jagger --- Rxjs";
        observer.next(name + count);
        // observer.error('rxjs Error!');
      }, 5000);
    })
  }

  getRxjsIntervalNum(){
    let count = 0;
    return new Observable((observer)=>{
      setInterval(() => {
        count +=1;
        observer.next(count);
      }, 1000);
    })
  }
}
