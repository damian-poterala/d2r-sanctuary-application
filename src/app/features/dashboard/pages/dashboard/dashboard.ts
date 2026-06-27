import { Component } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { AuthService } from '../../../../core/services/auth.service';

import { Navbar } from '../../../../layout/navbar/navbar';

import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ButtonModule,

    DatePipe,
    Navbar,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.getCurrentUser();

  ngOnInit(): void {
    console.log('Dashboard loaded');
    console.log(this.user());
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearTokens();
        this.router.navigate(['/login']);
      }, 
      error: () => {
        this.authService.clearTokens();
        this.router.navigate(['/login']);
      }
    });
  }
}
