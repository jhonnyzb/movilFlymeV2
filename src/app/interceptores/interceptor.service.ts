import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators'

import { Storage } from '@ionic/storage';
import { ServicesAllService } from '../servicios/services-all.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  token: string;
  constructor(private servicios: ServicesAllService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.servicios.getToken().pipe(mergeMap(
      (token: any) => {
        let request = req;
        if (token) {
          request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token.access_token
            }
        });
        }
        return next.handle(request).pipe(
          catchError(this.errorPeticionesHttp)
        );
      }
    ))
  }


  errorPeticionesHttp(error: HttpErrorResponse) {
    console.warn(error)
    return throwError('En la Conexion Con servidor');

  }



}
