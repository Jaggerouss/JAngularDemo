路由就是根据不同的url地址，动态的让根组件挂在其他组件来实现一个单页面应用

1.创建一个带路由的项目

2.创建需要用到路由的组件

3.在跟模块里引入组件并且注入

4.在路由模块引入组件

5.在routers里面配置[{path:,component:}]

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'product',component:ProductComponent
  },
  //匹配不到路由时，自动挂载的组件
  {
    path:'**',redirectTo:'home'
  }
];


*routerLink 默认选中路由
routerLinkActive="active"

/*
get传值
1.跳转
<ul>
    <li *ngFor = "let item of list; let key = index;">
        <a [routerLink]="[ '/newsContent' ]" [queryParams]="{aid:key+1}">{{key+1}}---{{item}}</a>
    </li>
</ul>

2.接收
import { ActivatedRoute } from '@angular/router';

3.声明
constructor(public router:ActivatedRoute) { }

4.获取
    this.router.queryParams.subscribe((data:any)=>{
      console.log(data)
    })
*/


/*
二/ 动态路由

1.配置动态路由
  {
    path:'newsContent/:aid',component:NewsContentComponent
  },

2.接收
import { ActivatedRoute } from '@angular/router';

3.声明
constructor(public router:ActivatedRoute) { }

4.获取
    this.router.params.subscribe((data)=>{
      console.log(data,'动态路由')
    })
*/

/*
三/Javascript实现页面跳转
a)动态路由方法
1.引入
import { Router } from '@angular/router';
2.初始化
*/


b)路由get传值js跳转
1.引入 NavigationExtras
import {Router,NavigationExtras} from '@angular/router'
2.定义一个goNewsContent 方法执行跳转,用NavigationExtras配置传参
  goNews(){
    //跳转并进行get传值
    let queryParams:NavigationExtras = {
      queryParams:{'aid':123}
    }
    this.router.navigate(['/news'],queryParams)
  }