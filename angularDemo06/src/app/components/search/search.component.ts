import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyWord:string = '';

  public historyList:string[] = [];

  constructor(public storage:StorageService) {}

  ngOnInit(): void {

    console.log('页面刷新会触发这个生命周期函数！')

    var cacheSearchList:any = this.storage.get('searchList');

    this.historyList = cacheSearchList? cacheSearchList  : []
  }

  doSearch(word:string){
    if(this.historyList.indexOf(this.keyWord)!=-1){
      this.keyWord = '';
    }else{
      this.historyList.push(word);
      this.keyWord = '';
      this.storage.set('searchList',this.historyList);
    }
  }

  doDelete(key:number){
    this.historyList.splice(key,1);
    this.storage.set('searchList',this.historyList);
  }
}
