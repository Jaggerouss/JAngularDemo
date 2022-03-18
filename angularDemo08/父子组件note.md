一. 父组件给子组件传值  - @input
    父组件不仅可以给子组件传递简单的数据，还可以把自己的方法以及整个父组件传给子组件

1. 父组件调用子组件的时候传入数据
<app-header [msg]="msg"> <app-header>
2. 子组件引入input模块
import { Component, OnInit, Input } from '@angular/core'
3.子组件中@input 接收父组件传过来的数据


二. 父组件里获取子组件的数据/执行子组件的方法
1.子组件引入Output 和 EventEmitter
import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

2.子组件中实例化EventEmitter
@Output() private outer = new EventEmitter<string>();
用EventEmitter和output装饰器配合使用，<string> 指定变量类型

3.子组件通过EventEmitter对象outer 实例广播数据
sendParent(){
    this.outer.emit('msg from child')
}

4.父组件调用子组件的时候，定义接收事件，outer就是子组件的EventEmitter对象outer
<app-header (outer) = runParent($event)></app-header>

5.父组件接收到数据会调用自己的runParent方法，这个时候就会拿到子组件的数据

三.非父子组件的通信
1. Localstorage
2. 服务
