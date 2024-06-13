import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopkeeperComponent } from './shopkeeper/shopkeeper.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: "shop", component: ShopkeeperComponent },
  {path:"product",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
