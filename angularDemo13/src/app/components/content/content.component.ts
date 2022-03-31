import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public domin:string = '';

  public list: any[] = [];

  constructor(public router:ActivatedRoute,public service:ServiceService) { 
    this.domin = this.service.domin;
  }

  ngOnInit(): void {
    this.router.params.subscribe((value:any)=>{
      this.requestContent(value.id);
    })
  }

  requestContent(id:string){
    //请求数据
    var api = 'api/productcontent?id='+id;
    this.service.get(api).then((response:any)=>{
      console.log(response);
      this.list = response.result;
    }) 
  }

}
