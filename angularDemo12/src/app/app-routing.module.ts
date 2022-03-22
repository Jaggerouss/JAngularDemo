//配置路由的模块

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { ProductContentComponent } from './components/product-content/product-content.component';

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
