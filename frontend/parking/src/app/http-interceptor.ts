import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';

import { LoadService } from './core/services/loadService';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loadService: LoadService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone())
      .pipe(
        tap((event: HttpEvent<any>) => {
          this.loadService.showLoad();
          if (event.type && event.type === HttpEventType.Response) {
            this.loadService.hideLoad();
          }
        }, () => {
          this.loadService.hideLoad();
        }),
      );
  }
}

