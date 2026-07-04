
import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { inject } from '@angular/core';

import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,

    Menu,
    ButtonModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.getCurrentUser();

  @ViewChild(Menu)
  menu!: Menu;

  items: MenuItem[] = [];

  constructor() {
    this.items = [
      { label: 'Mój profil', icon: 'pi pi-user', command: () => { this.router.navigate(['/profile']) } },
      { separator: true },
      { label: 'Wyloguj', icon: 'pi pi-sign-out', command: () => { this.logout(); } }
    ];
  }

  ngOnInit(): void {
    console.log(this.user());
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearTokens();
        this.authService.currentUser.set(null);
        this.router.navigate(['/login']);
      },
      error: () => {
        this.authService.clearTokens();
        this.authService.currentUser.set(null);
        this.router.navigate(['/login']);
      }
    });
  }
}
