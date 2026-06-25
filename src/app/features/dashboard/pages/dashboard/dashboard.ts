import { Component } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { signal } from '@angular/core';

import { AuthService } from '../../../../core/services/auth.service';

import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
  
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private authService = inject(AuthService);
  // private cdr = inject(ChangeDetectorRef);

  user = signal<User | null>(null);

  ngOnInit(): void {
    console.log('Dashboard loaded');
    this.authService.me().subscribe({
      next: (response) => {
        console.log(response);
        this.user.set(response);
        // this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
