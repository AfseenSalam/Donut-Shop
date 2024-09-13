import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { Result } from '../../models/donut-model';
import { CurrencyPipe } from '@angular/common';
import { DonutDetaiModel } from '../../models/donut-detail-model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 price:number = 1;
constructor(private service:DonutService){}
getCart():Result[]{
return this.service.cart;
}
buy(){
  this.service.resetCart();
}
getTotal():number{
  return this.service.cart.reduce((total,current) =>total +=this.price,0);
}
removeCart(d:Result){
  this.service.removeCart(d);
}
getCalories():number{
  return this.service.cart.reduce((total,current) =>total +=current.calories? current.calories:0,0);
}
}
