import { Component } from '@angular/core';

import { Navbar } from '../../layout/navbar/navbar';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [
    Navbar
  ],
  templateUrl: './items.html',
  styleUrl: './items.scss',
})
export class Items {}
