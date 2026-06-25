import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Button, ButtonModule } from 'primeng/button';

import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-home',
  imports: [
    RevealOnScrollDirective,
    ButtonModule,
    RouterLink
],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
