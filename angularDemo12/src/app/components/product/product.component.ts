import { Component, OnInit } from '@angular/core';

//进行路由跳转（这种方式适合普通路由和动态路由）
//1.引入
import {Router,NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
//2.声明
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goProductContent(){
    this.router.navigate(['/productContent/','1234'])
  }

  goHome(){
    this.router.navigate(['/home'])
  }

  goNews(){
    //跳转并进行get传值
    let queryParams:NavigationExtras = {
      queryParams:{'aid':123}
    }
    this.router.navigate(['/news'],queryParams)
  }

}
