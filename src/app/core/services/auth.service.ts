import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private http = inject(HttpClient);

    login(data: { username: string, password: string }) {
        return this.http.post(`${ environment.apiUrl }/auth/login`, data);
    }

    me() {
        return this.http.get<User>(`${ environment.apiUrl }/auth/me`);
    }

    saveTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }

    getAccessToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    getRefreshToken(): string | null {
        return localStorage.getItem('refreshToken');
    }

    isLoggedIn(): boolean {
        return !!this.getAccessToken();
    }

    logout(): void {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
}