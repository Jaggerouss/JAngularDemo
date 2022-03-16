import { Component, OnInit } from '@angular/core';
// 引入服务
import { StorageService } from '../../services/storage.service'

// 这个方法可以引入服务 但是不推荐
// var storage = new StorageService();
// console.log(storage.get())

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public keyWord: string = '';
  public listNum: number = 0;
  public toDoList: any = [];


  constructor( public storage:StorageService) {
    let value = this.storage.get();
    console.log(value + 'Jagger!')
  }

  ngOnInit(): void {
  }

  doAdd(e: any) {
    if (e.keyCode == 13) {
      if (this.toDoListHasKeyword(this.toDoList, this.keyWord)) {
        alert('data exist');
        this.keyWord='';
      } else {
        this.toDoList.push({
          title: this.keyWord,
          status: 0 // 0表示待办事项 1表示已完成事项
        });
        this.keyWord = ''
      }
    }
  }

  deleteData(key: number) {
    this.toDoList.splice(key, 1)
  }

  toDoListHasKeyword(toDoList: { title: string; status: number }[], keyWord: string) {
    if(keyWord == '') return true;
    for (var i = 0; i < toDoList.length; i++) {
      if (toDoList[i].title == keyWord) {
        return true;
      }
    }
    return false;
  }
}
