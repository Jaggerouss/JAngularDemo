import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public picUrl = 'https://www.baidu.com/img/pc_9c5c85e6b953f1d172e1ed6821618b91.png';

  public list:any[] = [
    {
      "title" :"I am news"
    },
    {
      "title" :"I am news2"
    },
    {
      "title" :"I am news3"
    }
  ];

  public flag:boolean = false;

  public orderStatus:number = 4;  // 1. 已经支付  2. 已经支付并且确认订单  3.表示已经发货  4.表示已经收获  5.无效

  public attr:string = 'red';

  public today:any = new Date();

  public title:string = 'I am a title';

  public keywords:string='原始值';

  constructor() { 
    console.log(this.today);
  }

  ngOnInit(): void {
  }

  run(){
    alert('Run the function');
  }

  getDate(){
    alert(this.today);
  }

  changeDate(){
    alert(this.title);
    this.title = 'this is the title after changing';
    alert(this.title);
  }

  runEvent(event:any){
    //ionic must define the type
    var dom:any = event.target;
    dom.style.color = 'orange';
  }

  keyDown(e?:any){
    if(e.keyCode==13){
      console.log('按了回车键')
    }
    console.log(e?e.target.value:'keyDown');
  }

  keyUp(e?:any){
    if(e.keyCode==13){
      console.log('按了回车键')
    }
    console.log(e?e.target.value:'keyDown');
  }

  changeKeyWords(){
    this.keywords = '改变后的值'
  }

  getKeyWords(){
    console.log(this.keywords)
  }

}
