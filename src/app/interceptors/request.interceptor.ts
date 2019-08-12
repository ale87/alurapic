import { TokenService } from './../services/token.service';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class RequestInterceptor implements HttpInterceptor {
    constructor(private token: TokenService) {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
            if(this.token.hasToken()) {
                const token = this.token.getToken()
                req = req.clone({
                    setHeaders: {
                        'x-access-token': token
                    }
                })
            }
            return next.handle(req)
    }

}