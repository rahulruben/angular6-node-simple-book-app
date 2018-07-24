import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItems: Array<any> = new Array<any>();
  constructor(private cartService: CartService) { }

  ngOnInit() {
    let me = this;

    me.cartService.getDataObservable().subscribe(
      data => {
        if (data) {
          me.cartItems.push(data);
        }
      }
    )
  }
}
