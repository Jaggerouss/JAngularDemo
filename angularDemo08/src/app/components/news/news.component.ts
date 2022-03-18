import { Component, OnInit , ViewChild} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @ViewChild('footer') footer:any;

  constructor() { }

  ngOnInit(): void {
  }

  getChildMsg(){
    //获取子组件footer的数据
    alert(this.footer.msg);
  }

  getChildMethod(){
    //获取子组件footer的方法
    this.footer.run();
  }

  run(event:any){
    //event -> 子组件给父组件广播的数据
    console.log(event);
    alert(0)
  }

}
