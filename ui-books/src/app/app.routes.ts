import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { BookFormComponent } from 'src/app/components/book-form/book-form.component';
import { CartComponent } from 'src/app/components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'add-new', component: BookFormComponent },
    { path: 'cart', component: CartComponent }
]