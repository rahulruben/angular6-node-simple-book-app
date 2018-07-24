import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookInfoService {

  protected dataSubject: BehaviorSubject<any>;

  constructor() { this.createSubject(); }

  public setDataObservable(data: any): void {
    this.dataSubject.next(data);
  }

  public getDataObservable(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  private createSubject(data?: any): void {
    this.dataSubject = new BehaviorSubject(data);
  }
}
