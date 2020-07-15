import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/local';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private platform: Platform,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes(environment.apiUrl)) {
      request = this.addHeader(request);
    }
    console.log({request});
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      console.log({request});
      console.log({err});
      return throwError(err);
    }));
  }

  private addHeader(req: HttpRequest<any>) {
    let headers = new HttpHeaders();
    headers = headers.append('Cache-Control', 'no-cache');
    headers = headers.append('X-API', 'v1.0');
    headers = headers.append('X-API-HOST', `App.Arena.Merch.${this.checkPlatform()}`);
    req = req.clone({
      // url: environment.apiUrl + req.url,
      headers
    });
    return req;
  }

  checkPlatform() {
    if (this.platform.is('desktop')) {
      return 'Web';
    }
    if (this.platform.is('ios')) {
      return 'iOS';
    }
    if (this.platform.is('android')) {
      return 'Android';
    }
    return 'Web';
  }
}
