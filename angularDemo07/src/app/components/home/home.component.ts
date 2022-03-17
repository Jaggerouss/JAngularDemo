import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public flag: boolean = true;

  constructor() { }

  ngOnInit(): void {

    //组件和指令初始化完成 并不是dom加载完成
    let oBox: any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = 'blue'

    //这种情况下 获取不到DOM节点
    // let oBox1:any = document.getElementById('box1');
    // console.log(oBox1.innerHTML);
    // oBox1.style.color = 'blue'
  }

  ngAfterViewInit(): void {
    //视图加载完成之后触发的方法  DOM加载完成（建议把DOM操作放在这个里面）
    let oBox1: any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color = 'blue'
  }

}
