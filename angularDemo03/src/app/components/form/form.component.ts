import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any = {
    userName : '',
    sex : '1',
    cityList : ['上海','北京','广州','深圳','其他'],
    city : '北京',
    hobby:[
      {
        title : "Basketball",
        checked:true
      },
      {
        title : "Football",
        checked:false
      },
      {
        title : "Baseball",
        checked:false
      }
    ],
    mark:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    //Jquery DOM操作
    // let userNameDom:any = document.getElementById('userName');
    // console.log(userNameDom.value)
 
    //双向数据绑定 来获取表单的数据
    console.log(this.peopleInfo)

  }

}
