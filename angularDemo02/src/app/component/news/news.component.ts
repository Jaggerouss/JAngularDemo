import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  // 推荐方式
  public title:string = 'I am a news Component';

  // const define method2: 
  msg = 'I am a news Component';
  // const define method3: 
  userName :string= 'Jagger';
  // const define method4: 
  public student:any = {
    userName : 'Jagger',
    password : 'kobebryant',
    tel : 18018556018
  }

  /*
  声明属性的几种方式：
  public （默认） 可以在这个类里使用也可以在类外使用
  protected （保护类型） 只能在当前类或者是子类中进行访问
  private （私有） 只有在当前类才能访问这个属性
  */

  public message:string;

  public content = '<h2>i am a h2 tag</h2>';


  //定义数组
  public arrDemo = ["111","222","333"]

  public arrDemo2:string[] = ["1","2","3"]  //推荐

  public arrDemo3:Array<string> = ["1","2","3","4"]

  public userList : any[] = [
    {
      userName : 'Jagger',
      age : 22
    },
    {
      userName : 'Able',
      age : 23
    },
    {
      userName : 'Luka',
      age : 24
    }
  ]

  public carList : any[] = [
    {
      cate : 'BMW',
      list:[
        {
          title : 'X1',
          price : '24w'
        },
        {
          title : 'X2',
          price : '34w'
        },
        {
          title : 'X3',
          price : '44w'
        }
      ]
    },
    {
      cate : 'Audi',
      list:[
        {
          title : 'Q1',
          price : '22w'
        },
        {
          title : 'Q2',
          price : '32w'
        },
        {
          title : 'Q3',
          price : '42w'
        }
      ]
    },
    {
      cate : 'Benzi',
      list:[
        {
          title : 'S1',
          price : '26w'
        },
        {
          title : 'S2',
          price : '36w'
        },
        {
          title : 'S3',
          price : '46w'
        }
      ]
    }
  ]

  

  constructor() { 
    this.message = 'Hello World!'  // 给属性赋值的方法 --> 改变属性的值
    console.log(this.msg)
    this.msg = 'I am a new news Component';
    console.log(this.msg)

  }

  ngOnInit(): void {
  }

}
