import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HEROES } from './mock-heroes';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './Hero';

@Injectable()
class MockHeroService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/heroes')) {
      return of(
        new HttpResponse<Hero[]>({
          status: 200,
          body: [
            {
              name: 'shitballz',
              id: 1,
            },
          ],
        })
      );
    }
    return next.handle(req);
  }
}

@NgModule({
  imports: [HttpClientTestingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHeroService,
      multi: true,
    },
  ],
})
export class MockHttpModule {}
