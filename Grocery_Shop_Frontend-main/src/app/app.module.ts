import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopkeeperComponent } from './shopkeeper/shopkeeper.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ShopkeeperService } from './ShopkeeperService';
import { ProductService } from './ProductService';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    ShopkeeperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShopkeeperService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
