import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { DonutDetaiModel } from '../../models/donut-detail-model';

@Component({
  selector: 'app-donut-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut-detail.component.html',
  styleUrl: './donut-detail.component.css'
})
export class DonutDetailComponent {
donutdetailResult: DonutDetaiModel ={} as DonutDetaiModel;
constructor(private activatedRoute:ActivatedRoute,private service:DonutService){}
ngOnInit(){
  this.activatedRoute.paramMap.subscribe((params)=>{
    let id:number = Number(params.get("id"));
    console.log(id);
    this.service.getDonutDetails(id).subscribe((response:DonutDetaiModel)=>{
this.donutdetailResult = response;
    });
  });
}
addDonut():void{
  this.service.addDonut(this.donutdetailResult);
  }
}
