import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //子组件中实例化EventEmitter
  @Output() private outer = new EventEmitter<string>();

  public msg:string = 'I am a msg child component'; 

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert('I am child component\'s run mothod!' );
  }

  sendParent(){
    this.outer.emit('msg from child')
  }

}
