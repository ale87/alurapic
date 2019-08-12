import { NewUser } from './../shared/interfaces/newUser';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

const API = 'http://localhost:3000'

@Injectable()

export class SignupService {
    constructor(private http: HttpClient) { }

    checkUserName(userName: string) {
        return this.http.get(API + `/user/exists/${userName}`)        
    }

    signUp(user: NewUser) {
        return this.http.post(API + '/user/signup', user)
    }
} 