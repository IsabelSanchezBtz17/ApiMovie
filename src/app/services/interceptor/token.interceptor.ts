import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      params: (request.params ? request.params : new HttpParams()).set('api_key', '417b72a14eef2ebe72be5e7c60ef2b65')
    })
    
    return next.handle(HEADER_REQUEST);
    
  }
}