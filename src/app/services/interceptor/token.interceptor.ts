import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/utils/conts.class';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      params: (request.params ? request.params : new HttpParams()).set('api_key', Constants.API_KEY )
    })
    
    return next.handle(HEADER_REQUEST);
    
  }
}