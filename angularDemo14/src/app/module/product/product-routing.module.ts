import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { PlistComponent } from './components/plist/plist.component';
import { CartComponent } from './components/cart/cart.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent,
    //method 2, method 1 is in user
    children: [
      {
        path: 'plist', component: PlistComponent
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'pcontent', component: PcontentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
