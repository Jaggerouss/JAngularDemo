import { Component, OnInit ,ViewChild} from '@angular/core';


/* 
ViewChild获取DOM节点
1.模版中给DOM第一个名字
<div  #myBox>
    这是一个DOM节点
</div>

2.在业务逻辑里引入ViewChild
import { Component, OnInit ,ViewChild} from '@angular/core';

3.通过ViewChild装饰器获取DOM节点（写在类里面）
@ViewChild('myBox') myBox:any;

4.申明生命周期函数获取DOM（ngAfterViewInit（））
this.myBox.nativeElement
 */
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  //获取DOM节点
  @ViewChild('myBox') myBox:any;
  //获取子组件节点
  @ViewChild('header') header:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.color='orange';
    console.log(this.myBox.nativeElement.innerHTML);
  }

  getChildMethod(){
    //调用子组件里面的方法
    this.header.run();
  }

}
