import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductService } from './services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductSortComponent } from './product-sort/product-sort.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductSearchComponent } from './product-search/product-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCartComponent,
    ProductSortComponent,
    ProductSearchComponent,
    NavBarComponent,
    ShoppingCartComponent,
    ProductQuantityComponent,
    WishlistComponent,
    ProductDetailsComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,

  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
