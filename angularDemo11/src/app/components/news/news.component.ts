import { Component, OnInit } from '@angular/core';
//当做一个服务
import { HttpClient,HttpHeaders } from '@angular/common/http';
// 引入服务 获取方法
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public list:any[] = [];

  constructor(public http:HttpClient,public httpService:HttpServiceService) { }

  ngOnInit(): void {
  }

  getData(){
    let api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((response:any)=>{
      this.list = response.result;
      console.log(this.list);
    })
  }

  //需要手动设置请求的类型
  doLogin(){
    const httpOptions = {
      headers: new HttpHeaders({'content-Type':'application/json'})
    };
    let api = 'http://127.0.0.1:3000/dologin';
    this.http.post(api,{'username':'Jagger',age:18},httpOptions).subscribe((response)=>{
      console.log(response);
    })
  }

  getJsonpData(){
    //jsonp请求，服务器必须要支持jsonp
    //验证方法：
    //http://a.itying.com/api/productlist?callback=aaaa
    //http://a.itying.com/api/productlist?cb=aaaa
    let api = 'http://a.itying.com/api/productlist';
    this.http.jsonp(api,'callback').subscribe((response)=>{
      console.log(response);
    })
  }

  getAxiosData(){
    let api = 'http://a.itying.com/api/productlist';
    this.httpService.axiosGet(api).then((response)=>{
      console.log(response);
    })
  }



}
