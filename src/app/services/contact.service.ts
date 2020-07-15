import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/local';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient,
  ) { }

  sendBulkOrder(first, last, org, email, msg) {
    const req = {
      first_name: first,
      last_name: last,
      organization: org,
      email,
      message: msg
    };
    return this.http.post<any>(`${environment.apiUrl}/merch/tourmask/order`, req).pipe(map(res => {
      return res;
    }));
  }
}
