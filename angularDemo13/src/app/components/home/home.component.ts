import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list:any[]=[];

  public domin:string = '';

  constructor(public common:ServiceService) { 
    this.domin = this.common.domin;
  }

  ngOnInit(): void {
    var api = 'api/productlist';
    this.common.get(api).then((response:any)=>{
      this.list = response.result;
      console.log(this.list)
    });
  }

}
