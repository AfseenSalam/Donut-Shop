import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DonutModel, Result } from '../models/donut-model';
import { DonutDetaiModel } from '../models/donut-detail-model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
 
cart: Result[]=[];
private cartCountSubject = new BehaviorSubject<number>(0); 
cartCount$ = this.cartCountSubject.asObservable();
  constructor(private http:HttpClient) { }
  getDonut():Observable<DonutModel>{
  return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }
  getDonutDetails(id:number):Observable<DonutDetaiModel>{
    return this.http.get<DonutDetaiModel>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }
  addDonut(d:Result){
    this.getDonutDetails(d.id).subscribe((response:DonutDetaiModel)=>{
      const donutId ={...d,
        calories:response.calories};
         
this.cart.push(donutId);
this.updateCartCount();
});
  }
  resetCart(){
    this.cart = [];
    this.updateCartCount();
  }
  private updateCartCount() {
    this.cartCountSubject.next(this.cart.length); // Emit the new cart count
  }
  removeCart(i:Result){
    let index:number =this.cart.findIndex(x=>x === i);
  this.cart.splice(index,1);
  this.updateCartCount();
  }

}
