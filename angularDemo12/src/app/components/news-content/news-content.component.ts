import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }

  ngOnInit(): void {

    //get传值
    // this.router.queryParams.subscribe((data:any)=>{
    //   console.log(data)
    // })

    //动态路由
    this.router.params.subscribe((data)=>{
      console.log(data,'动态路由')
    })
  }

}
