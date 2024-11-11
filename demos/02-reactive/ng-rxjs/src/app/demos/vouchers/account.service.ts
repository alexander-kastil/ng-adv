import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BalanceAccount } from './account.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) { }

  getAccounts(): Observable<BalanceAccount[]> {
    return this.httpClient.get<BalanceAccount[]>(`${environment.api}accounts`);
  }

  getAccount(id: number) {
    return this.getAccounts().pipe(
      map((v) => v.find((v: BalanceAccount) => v.ID == id))
    );
  }
}
