//配置路由的模块

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
  import { WelcomeComponent } from './components/home/welcome/welcome.component';
  import { SettingComponent } from './components/home/setting/setting.component';
import { ProductComponent } from './components/product/product.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
  import { PcateComponent } from './components/product/pcate/pcate.component';
  import { PlistComponent } from './components/product/plist/plist.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    children:[
      {
        path:'welcome',component:WelcomeComponent,
      },
      {
        path:'setting',component:SettingComponent,
      },
      {
        path:'**',redirectTo:'welcome'
      }
    ]
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'product',component:ProductComponent,
    children:[
      {
        path:'pcate',component:PcateComponent,
      },
      {
        path:'plist',component:PlistComponent,
      },
      {
        path:'**',redirectTo:'pcate'
      }
    ]
  },
  {
    path:'newsContent/:aid',component:NewsContentComponent
  },
  {
    path:'productContent/:pid',component:ProductContentComponent
  },
  //匹配不到路由时，自动挂载的组件
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
