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



