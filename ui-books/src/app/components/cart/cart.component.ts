import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  books: Array<any> = new Array<any>();
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    let me = this;
    me.cartService.getAllDataObservable().subscribe(
      data => {
        if (data) {
          me.books = data;
        }
      }
    )
  }

  goBack(): void {
    this.router.navigateByUrl('home');
  }
}
