import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookModel } from 'src/app/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Array<BookModel> = new Array<BookModel>();
  constructor(private book: BookService, private route: Router) { }

  ngOnInit() {
    let me = this;

    me.book.getDataObservable().subscribe(
      data => {
        if (data) {
          me.books = data;
        }
      }
    )
  }

  addBook() {
    this.route.navigateByUrl('/add-new');
  }
}
