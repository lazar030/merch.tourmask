import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  accessToken = '1251937357.18ef503.d3f5e2cc37494f00a6b95c3e9c04e0c8';

  constructor(
    private http: HttpClient,
  ) { }

  getRecentMedia() {
    return this.http.get<any>(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.accessToken}`).pipe(map(res => {
      return res.data.filter(media => media.type == 'image');
    }));
  }
}
