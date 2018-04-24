import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
    user: any;
    constructor(private http: Http, private cookieService: CookieService) { }

 
    getCookie(key: string) {
        return this.cookieService.get(key);
    }
    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);
        if (decoded.exp === undefined) return null;
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) token = this.getCookie('jwt');
        if (!token) return true;
        const date = this.getTokenExpirationDate(token);
        if (date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }
    logout() {
        this.cookieService.delete('jwt');
    }
}