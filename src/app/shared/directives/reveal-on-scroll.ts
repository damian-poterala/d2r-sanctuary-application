import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  inject,
  PLATFORM_ID,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit {

  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if(!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.renderer.addClass(this.element.nativeElement, 'hidden');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.element.nativeElement, 'hidden');
          this.renderer.addClass(this.element.nativeElement, 'show');

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25
    });

    observer.observe(this.element.nativeElement);
  }
}