import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  //因为有父组件传值，所以触发了ngOnChanges()
  @Input('title')title!: string;


  public msg:string = '我是一个生命周期演示';
  public userInfo:string = '';
  public oldUserInfo:string = '';
  //执行顺序 由上到下
  constructor() { 
    console.log('00 --构造函数执行了，除了使用简单的值对局部进行初始化之外，什么都不应该做');
  }

  ngOnChanges(): void {
    console.log('01 --ngOnChanges()执行了，当绑定的输入属性的值发生了变化时调用（父子组件传值的时候会出发）');
  }

  ngOnInit(): void {
    console.log('02 --ngOnInit()执行了，请求数据一般放在这个里面）');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('03--ngDoCheck()执行了，检测并发生angular无法或不愿意自己检测的变化时作出反应');
    if(this.userInfo!== this.oldUserInfo){
      console.log(`你从${this.oldUserInfo}改成了${this.userInfo}`);
      this.oldUserInfo = this.userInfo
    }else{
      console.log(`数据没有变化！`);
    }
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('04--ngAfterContentInit()执行了，当把内容投影到组件之后调用');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('05--ngAfterContentChecked()执行了，每次完成被投影组件内容的变更检测之后调用');
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('06--ngAfterViewInit()执行了，初始化完组件视图及其子视图之后调用（dom操作放在这里面）');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('07--ngAfterViewChecked()执行了，每次做完组件视图和子视图的变更检测左后调用');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('08--ngOnDestroy()执行了！');
  }

  changeMsg(){
    this.msg = '改变后的msg！';
  }



}
