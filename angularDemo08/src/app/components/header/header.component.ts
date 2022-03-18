import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // 接受父组件传来的数据
  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() home:any;

  constructor() { }

  ngOnInit(): void {
  }

  getRun(){
    //获取整个父组件的用法
    this.home.run()


    alert('我是父组件的run方法！')
  }

  getParentMsg(){
    //获取父组件的数据
    alert(this.msg)
  }

}
