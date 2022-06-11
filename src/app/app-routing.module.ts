import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'cart-checkout',
    loadChildren: () => import('./cart-checkout/cart-checkout.module').then( m => m.CartCheckoutPageModule)
  },
  {
    path: 'cart-dialog',
    loadChildren: () => import('./cart-dialog/cart-dialog.module').then( m => m.CartDialogPageModule)
  },
  {
    path: 'cart-edit',
    loadChildren: () => import('./cart-edit/cart-edit.module').then( m => m.CartEditPageModule)
  },
  {
    path: 'detail-car',
    loadChildren: () => import('./detail-car/detail-car.module').then( m => m.DetailCarPageModule)
  },
  {
    path: 'select-car',
    loadChildren: () => import('./select-car/select-car.module').then( m => m.SelectCarPageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./hotel/hotel.module').then( m => m.HotelPageModule)
  },
  {
    path: 'select-hotel',
    loadChildren: () => import('./select-hotel/select-hotel.module').then( m => m.SelectHotelPageModule)
  },
  {
    path: 'hotel-booking-form',
    loadChildren: () => import('./hotel-booking-form/hotel-booking-form.module').then( m => m.HotelBookingFormPageModule)
  },
  {
    path: 'air-ticket',
    loadChildren: () => import('./air-ticket/air-ticket.module').then( m => m.AirTicketPageModule)
  },
  {
    path: 'air-oneway-ticket',
    loadChildren: () => import('./air-oneway-ticket/air-oneway-ticket.module').then( m => m.AirOnewayTicketPageModule)
  },
  {
    path: 'air-oneway-payment',
    loadChildren: () => import('./air-oneway-payment/air-oneway-payment.module').then( m => m.AirOnewayPaymentPageModule)
  },
  {
    path: 'air-twoway-ticket-outbound',
    loadChildren: () => import('./air-twoway-ticket-outbound/air-twoway-ticket-outbound.module').then( m => m.AirTwowayTicketOutboundPageModule)
  },
  {
    path: 'air-twoway-ticket-inbound',
    loadChildren: () => import('./air-twoway-ticket-inbound/air-twoway-ticket-inbound.module').then( m => m.AirTwowayTicketInboundPageModule)
  },
  {
    path: 'air-twoway-payment',
    loadChildren: () => import('./air-twoway-payment/air-twoway-payment.module').then( m => m.AirTwowayPaymentPageModule)
  },
  {
    path: 'tour',
    loadChildren: () => import('./tour/tour.module').then( m => m.TourPageModule)
  },
  {
    path: 'detail-tour',
    loadChildren: () => import('./detail-tour/detail-tour.module').then( m => m.DetailTourPageModule)
  },
  {
    path: 'tour-form',
    loadChildren: () => import('./tour-form/tour-form.module').then( m => m.TourFormPageModule)
  },
  {
    path: 'hotel-check-in',
    loadChildren: () => import('./hotel-check-in/hotel-check-in.module').then( m => m.HotelCheckInPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
