import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('d2r-sanctuary-application');
  
  private authService = inject(AuthService);

  constructor() {
    this.authService.loadCurrentUser();
  }
}
