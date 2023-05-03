import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: "/shop",component: ShopComponent},
  { path: "/partners", component: PartnersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

