import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryReportsComponent } from './components/deliveryExecutive/delivery-reports/delivery-reports.component';
import { DeliveryComponent } from './components/deliveryExecutive/delivery/delivery.component';
import { LandingMainComponent } from './components/landing-main/landing-main.component';
import { RestaurentOwnerHomeComponent } from './components/restaurent-owner-home/restaurent-owner-home.component';
import { RestaurantHomeComponent } from './components/restaurant-home/restaurant-home.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { OrderBillComponent } from './components/order-bill/order-bill.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserReportsComponent } from './components/user-reports/user-reports.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';

const routes: Routes = [

  { path: '', component: LandingMainComponent },
{path:'restaurants',component:RestaurantListComponent},
  { path: 'profile', component: UserProfileComponent },
  { path: 'ro-home', component: RestaurentOwnerHomeComponent },
  { path: 'de-reports', component: DeliveryReportsComponent },
  { path: 'de-dashboard', component: DeliveryComponent },
  { path: 'orderBill', component: OrderBillComponent },
  { path: 'userOrders', component: UserOrdersComponent },
  { path: 'restaurant/:id', component: RestaurantHomeComponent },
  { path: 'user-reports', component: UserReportsComponent },
  { path: 'usercart', component: ViewCartComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
