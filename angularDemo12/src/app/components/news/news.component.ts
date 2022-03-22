import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public list:any[] = [];

  constructor() { }

  ngOnInit(): void {
    for (var i= 1;i<10;i++){
      this.list.push("this is NO."+i+" news")
    }
  }

}
