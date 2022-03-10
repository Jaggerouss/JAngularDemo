import { NgModule } from '@angular/core';
// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';  //引入新闻组件，并把它创建在配置组件中
//ngmodule的装饰器， 接受一个元数据对象， 告诉angular如何启动和编译应用
@NgModule({
  declarations: [  //配置当前项目需要的组件
    AppComponent, NewsComponent, HomeComponent, HeaderComponent
  ],
  imports: [  //配置当前项目运行依赖的其他模块
    BrowserModule
  ],
  providers: [], //配置项目所需的服务
  bootstrap: [AppComponent]  //指定应用的主视图（视为根组件），通过引导根AppModule来启动应用，这里一般写的是根组件
})

//模块不需要导出任何东西 因为根组件不需要导出
export class AppModule { }