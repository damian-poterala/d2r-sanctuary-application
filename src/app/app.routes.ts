import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
    { path: ''                                    , loadComponent: () => import('./features/home/home')             .then(m => m.Home) },
    { path: 'login'    , canActivate: [guestGuard], loadComponent: () => import('./features/auth/login/login')      .then(m => m.Login) },
    { path: 'register' , canActivate: [guestGuard], loadComponent: () => import('./features/auth/register/register').then(m => m.Register) },
    { path: 'dashboard', canActivate: [authGuard] , loadComponent: () => import('./features/dashboard/pages/dashboard/dashboard').then(m => m.Dashboard) }
];
