import { Component, OnInit, Input } from '@angular/core';
import { BookInfoService } from 'src/app/services/book-info.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: any;
  constructor(private bookInfoService: BookInfoService) { }

  ngOnInit() {
  }

  selectBook(book: any): void {
    this.bookInfoService.setDataObservable(book);
  }

}
