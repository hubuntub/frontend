import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./screens/order/order.module').then(m => m.OrderModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
