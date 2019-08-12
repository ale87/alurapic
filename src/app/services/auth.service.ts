import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { UserService } from './user.service'

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
    private userToken: UserService) { }

  autenticate(user: object) {
    return this.http.post(API + '/user/login', user, { observe: 'response' })
      .pipe(tap(res => {
        this.userToken.setToken(res.headers.get('x-access-token'))
      }))
  }
}
