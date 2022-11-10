import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  
  // @Injectable()
  // export class loginInterceptor implements HttpInterceptor {
  //   intercept(req: HttpRequest<any>, next: HttpHandler) {
  //     const token = localStorage.getItem('Token');
  
  //     if (token) {
  //       req = req.clone({
  //         setHeaders: { Authorization: 'Bearer ${token}' },
  //       });
  //     }
  
  //     return next.handle(req);
  //   }
  // }