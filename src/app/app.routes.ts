import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { DonutDetailComponent } from './components/donut-detail/donut-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"Donut",component:DonutComponent},
    {path:"Donut/:id",component:DonutDetailComponent},
    {path:"Cart",component:CartComponent},
    {path:"",redirectTo:"/Donut",pathMatch:"full"},
    {path:"**",component:PageNotFoundComponent}
];
