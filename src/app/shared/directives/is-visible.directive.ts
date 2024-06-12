
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener, Input, PLATFORM_ID, inject } from '@angular/core';

@Directive({ selector: '[isVisible]' })
export class IsVisibleDirective implements AfterViewInit {

  @Input()
  public pixels = 60;

  @Input()
  public from:  keyof typeof AnimationType = AnimationType.Bottom;

  private lastScrollTop = 0;

  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  ngAfterViewInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId)) { return; }
    if (this.document.body.classList.contains('no-animation')) { return; }

    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || this.document.documentElement.scrollTop;

    const isScrollingDown = scrollTop > this.lastScrollTop;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    const isVisible = (rect.top <= windowHeight && rect.bottom >= 0);

    this.applyAnimation(isScrollingDown);

    this.elementRef.nativeElement.style.opacity = isVisible ? '1' : '0';
    this.elementRef.nativeElement.style.transform = this.getTransform(isVisible);
  }

  private applyAnimation(apply: boolean) {
    this.elementRef.nativeElement.style.transition = apply ? '0.5s ease' : '';
    this.elementRef.nativeElement.style.transitionProperty = apply ? 'opacity transform' : '';
  }

  private getTransform(isVisible: boolean): string {
    switch (this.from) {
      case AnimationType.Left:
        return isVisible ? `translateX(0)` : `translateX(-${this.pixels}px)`;
      case AnimationType.Right:
        return isVisible ? `translateX(0)` : `translateX(${this.pixels}px)`;
      default:
        return isVisible ? `translateY(0)` : `translateY(${this.pixels}px)`;
    }
  }

}

export enum AnimationType {
  Left = 'Left',
  Right = 'Right',
  Bottom = 'Bottom',
}
