// 引入核心模块里面的component
// 根组件里面可以挂载任何组件
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //使用这个组件的名称
  templateUrl: './app.component.html',  //html  
  styleUrls: ['./app.component.scss']  //css
})
export class AppComponent {
  title = 'angualrDemo01';  //定义属性

  constructor(){   //构造函数

  }
}
