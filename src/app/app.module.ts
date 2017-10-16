import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { BuyersService } from './services/buyers.service';
import { Buyer } from './components/buyers/buyers';
import { Product } from './components/products/products';
import { ProductsService } from './services/products.service';

import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CheckLatestPurchasesComponent } from './components/buyers/check-latest-purchases/check-latest-purchases.component';
import { SearchPipe } from './pipes/search.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes:Routes = [
 { path: 'buyers', component: BuyersComponent },
 { path: 'buyers/:id', component: CheckLatestPurchasesComponent },
 { path: 'products', component: ProductsComponent },
 { path: '', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent,
    CheckLatestPurchasesComponent,
    SearchPipe,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )], 
  exports: [
    LayoutComponent
   ],
  providers: [BuyersService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
