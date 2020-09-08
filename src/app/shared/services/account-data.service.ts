import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {
  private accountName = 'Arun';
  private myAccount = new BehaviorSubject<any>(this.accountName);
  latestAccountName: Observable<any> = this.myAccount.asObservable();
  constructor() {

  }

  updateAccountName(newName): void {
    console.log(newName);
    this.myAccount.next(newName);
  }
}
