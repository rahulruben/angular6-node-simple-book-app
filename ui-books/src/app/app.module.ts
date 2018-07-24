import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from 'src/app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookComponent } from './components/book/book.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    BookInfoComponent,
    BookFormComponent,
    HeaderComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
