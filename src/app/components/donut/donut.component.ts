import { Component } from '@angular/core';
import { DonutModel, Result } from '../../models/donut-model';
import { DonutService } from '../../services/donut.service';
import { RouterLink } from '@angular/router';
import { DonutDetaiModel } from '../../models/donut-detail-model';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {

  donutResult:DonutModel = {} as DonutModel;

  constructor(private service:DonutService){}
ngOnInit(){
  this.callDonutApi();
}
callDonutApi(){
  this.service.getDonut().subscribe((response:DonutModel)=>{
    console.log(response);
    this.donutResult =response;
  })
}
addDonut(d:Result):void{
this.service.addDonut(d);
}
}
