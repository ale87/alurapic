import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core'
import { User } from './../shared/interfaces/user'
import { TokenService } from './token.service'
import * as decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user = new BehaviorSubject<User>(null)
  private userName: string = ''

  constructor(private token: TokenService) {
    this.isLoggedIn() && this.decodeAndNotify()
  }

  getUser(): Observable<User> {
    return this.user
  }

  getUserName(): string {
    return this.userName
  }

  isLoggedIn(): boolean {
    return this.token.hasToken()
  }

  logout(): void {
    this.token.removeToken()
    this.user.next(null)
  }

  setToken(token: string): void {
    this.token.setToken(token)
    this.decodeAndNotify()
  }

  private decodeAndNotify(): void {
    const token = this.token.getToken()
    const user = decode(token) as User
    this.userName = user.name
    this.user.next(user)
  }    
}
