import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyWord:string = '';

  public historyList:string[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  doSearch(word:string){
  if(this.historyList.indexOf(this.keyWord)!=-1){
      this.keyWord = ''
    }else{
      this.historyList.push(word)
      this.keyWord = ''
    }
  }

  doDelete(key:number){
    this.historyList.splice(key,1)
  }
}
