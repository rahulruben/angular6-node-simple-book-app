import { Component, OnInit } from '@angular/core';
import { BookInfoService } from 'src/app/services/book-info.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  bookInfo: any;
  isAddedToCart: boolean;
  constructor(
    private bookInfoService: BookInfoService,
    private cartService: CartService,
    private route: Router
  ) { }

  ngOnInit() {
    let me = this;

    me.bookInfoService.getDataObservable().subscribe(
      data => {
        if (data) {
          me.bookInfo = data;
          me.isAddedToCart = me.cartService.isBookAddedInCart(me.bookInfo);
        }
      }
    )
  }

  closeCurrentSelection(): void {
    this.bookInfo = null;
  }

  addBookToCart(): void {
    if (!this.isAddedToCart) {
      this.cartService.setDataObservable(this.bookInfo);
    } else {
      this.route.navigateByUrl('cart')
    }
    this.isAddedToCart = this.cartService.isBookAddedInCart(this.bookInfo);    
  }
}
