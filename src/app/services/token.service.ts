import { Injectable } from "@angular/core";

const key = 'userToken'

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    
    setToken(token: string): void {
        window.localStorage.setItem(key, token)
    }

    removeToken(): void {
        window.localStorage.removeItem(key)
    }

    getToken(): string {
        return window.localStorage.getItem(key)
    }

    hasToken(): boolean {
        return !!this.getToken()
    }
}