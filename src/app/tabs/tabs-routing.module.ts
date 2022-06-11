import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'car-promotion',
        loadChildren: () => import('../car-promotion/car-promotion.module').then(m => m.CarPromotionPageModule)
      },
      {
        path: 'my-booking',
        loadChildren: () => import('../my-booking/my-booking.module').then(m => m.MyBookingPageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountPageModule)
      },
      {
        path: 'main-menu',
        loadChildren: () => import('../main-menu/main-menu.module').then( m => m.MainMenuPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/main-menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main-menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
