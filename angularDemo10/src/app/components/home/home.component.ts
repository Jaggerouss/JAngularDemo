import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    //获取同步方法
    let data = this.request.getData();
    console.log(data);

    //获取异步方法
    //1.回调函数
    this.request.getCallBackData((data1: any) => {
      console.log(data1)
    });

    //2.Promise获取数据ES6
    var promiseData = this.request.getPromiseDate();
    promiseData.then((data) => {
      console.log(data);
    });

    //3.Rxjs获取异步方法的数据
    var rxjsData = this.request.getRxjsData();
    rxjsData.subscribe((data) => {
      console.log(data);
    })

    //rxjs and promise用法非常类似，rxjs通过next()返回数据/promise通过resolve()返回数据。 rxjs通过subscribe()返回数据/promise通过then()获取数据。 
    //rxjs可以中途撤回，可以发射多个值，可以提供多种工具函数等等。

    //4.rxjs中途撤回（过一秒以后撤回刚才的操作）
    var stream = this.request.getRxjsData();
    var d = stream.subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      d.unsubscribe();//取消订阅
    }, 2000);

    //5.promise 执行多次（没有这个能力）
    var promiseInterval = this.request.getPromiseIntervalData();
    promiseInterval.then((data) => {
      console.log(data);
    })

    //6.rxjs 订阅后多次执行
    var rxjsData = this.request.getRxjsIntervalData();
    rxjsData.subscribe((data) => {
      console.log(data);
    })

    //7.rxjs工具方法 map() filter()函数，对返回的数据进行处理
    //filter() 可以对数据进行筛选 过滤
    var single:any[] = [];
    var double:any[] = [];
    var rxjsNum = this.request.getRxjsIntervalNum();
    rxjsNum.pipe(filter((value:any)=>{
      if(value%2==1){
        single.push(value);
        return true;
      }else{
        double.push(value);
        return true;
      }
    })).subscribe((data) => {
      if(single.length > double.length){
        console.log(single);
      }else{
        console.log(double);
      }
    })

    //map() 可以对数据进行处理 处理完成的数据返回出来
    var rxjsNum = this.request.getRxjsIntervalNum();
    rxjsNum.pipe(map((value:any)=>{
      return value*value;
    })).subscribe((data) => {
      console.log(data);
    })
  }
}
