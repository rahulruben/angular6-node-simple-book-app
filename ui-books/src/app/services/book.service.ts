import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from 'src/app/models/book.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  protected dataSubject: BehaviorSubject<any>;
  protected url: string = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { this.createSubject(); }

  public get(url: string, options: any, callback: Function): void {
    if (callback) {
      let me = this;

      me.http.get(url)
        .subscribe(
        data => {
          callback(data, true);
        },
        error => {
          callback(error, false);
        }
        );
    }
  }

  public load() {
    let me = this;

    return me.get(me.url, null, (data: any, success: boolean) => {
      if (success) {
        me.setDataObservable(data);
      }
    });
  }

  public setDataObservable(data: any): void {
    this.setDataSubject(data);
  }

  protected setDataSubject(data: any): void {
    this.dataSubject.next(data);
  }

  public getDataObservable(): Observable<any> {
    this.load();
    return this.dataSubject.asObservable();
  }

  private createSubject(data?: any): void {
    this.dataSubject = new BehaviorSubject(data);
  }
}
