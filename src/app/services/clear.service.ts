import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClearService {
  private isSelected: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  clearIsSelected(): void {
    this.subject.next(this.isSelected);
  }

  onClear():Observable<any> {
    return this.subject.asObservable();
  }
}
