import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAside(){
    //原生js获取dom节点
    var aside:any = document.getElementById('aside');
    console.log(aside.style.transform);
    aside.style.transform = "translate(0,0)";
    console.log(aside);
  }

  hideAside(){
    //原生js获取dom节点
    var aside:any = document.getElementById('aside');
    aside.style.transform = "translate(100%,0)";
    console.log(aside);
  }

  intergrateInOneButton(){
    //原生js获取dom节点
    var aside:any = document.getElementById('aside');
    if(aside.style.transform === 'translate(0px, 0px)'){
      aside.style.transform = "translate(100%,0)";
    }else{
      aside.style.transform = "translate(0,0)";
    }
  }

}
