import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDemo09';

  public flag:boolean = true;

  changeTitle(){
    this.title = '这是父组件改变后的Title'
  }

  changeFlag(){
    this.flag = this.flag?false:true;
  }
}
