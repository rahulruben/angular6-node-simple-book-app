import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  protected books: Array<any> = new Array<any>();
  protected book: Array<any> = new Array<any>();
  protected dataSubject: BehaviorSubject<any>;
  protected dataAllBooksSubject: BehaviorSubject<any>;

  constructor() { this.createSubject(); }

  public setDataObservable(data: any): void {
    this.books.push(data);
    this.dataSubject.next(data);
    this.dataAllBooksSubject.next(this.books);
  }

  public getDataObservable(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  private createSubject(data?: any): void {
    this.dataSubject = new BehaviorSubject(data);
    this.dataAllBooksSubject = new BehaviorSubject(data);
  }

  public getAllDataObservable(): Observable<any> {
    return this.dataAllBooksSubject.asObservable();
  }

  public isBookAddedInCart(book) {
    let isThereABook: boolean;
    if (this.books) {
      for(let item of this.books) {
        if(item.title === book.title) {
          isThereABook = true;
          break;
        } else {
          isThereABook = false;
        }
      }
      return isThereABook;
    }
  }
}
