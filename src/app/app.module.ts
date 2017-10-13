import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes:Routes = [
 { path: 'buyers', component: BuyersComponent },
 { path: 'products', component: ProductsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )], 
  exports: [
    LayoutComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
