get数据请求:
1. 在app.mudule.ts中引入HttpClientModule模块并注入
import { HttpClientModule } from '@angular/common/http'
  imports: [
    BrowserModule, HttpClientModule
  ],

2.在用到的地方引入HttpClient并在构造函数中声明
import { HttpClient } from '@angular/common/http';
constructor(public http:HttpClient) { }

3.
  getData(){
    let api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((response:any)=>{
      this.list = response.result;
      console.log(this.list);
    })
  }



post提交数据:
1. 在app.mudule.ts中引入HttpClientModule模块并注入
import { HttpClientModule } from '@angular/common/http'
  imports: [
    BrowserModule, HttpClientModule
  ],

2.在用到的地方引入HttpClient并在构造函数中声明
import { HttpClient ,HttpHeader} from '@angular/common/http';
constructor(public http:HttpClient) { }

3.doLogin(){
    const httpOptions = {
      headers: new HttpHeaders({'content-Type':'application/json'})
    };
    let api = 'http://127.0.0.1:3000/dologin';
    this.http.post(api,{'username':'Jagger',age:18},httpOptions).subscribe((response)=>{
      console.log(response);
    })
  }


jsonp请求数据：(支持跨域)
1.1. 在app.mudule.ts中引入HttpClientModule，HttpClientJsonpModule模块并注入
import { HttpClientModule ,HttpClientJsonpModule} from '@angular/common/http';

使用第三方模块请求数据（axios）
1.安装axios
cnpm install axios --save
2.用到的地方引入axios
import axios from 'axios';
3.看文档说明

