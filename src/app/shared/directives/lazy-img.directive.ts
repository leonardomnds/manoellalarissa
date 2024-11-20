
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, OnInit, PLATFORM_ID, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'img',
})
export class LazyImgDirective implements OnInit, AfterViewInit {

  private platformId = inject(PLATFORM_ID);
  private elementRef: ElementRef<HTMLImageElement> = inject(ElementRef<HTMLImageElement>);

  ngOnInit(): void {
    this.addPlaceholder();
  }

  ngAfterViewInit() {
    this.addPlaceholder();

    if (!isPlatformBrowser(this.platformId)) { return; }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute(DATA_SRC_ATTRIBUTE);

          if (src) {
            img.setAttribute('src', src);
          }

          observer.unobserve(img);
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }

  private addPlaceholder(): void {
    const imgElement = this.elementRef.nativeElement;

    const originalSrc = imgElement.getAttribute(DATA_SRC_ATTRIBUTE)!;

    if (!originalSrc) { return; }

    imgElement.setAttribute(DATA_SRC_ATTRIBUTE, originalSrc);
    imgElement.setAttribute('src', 'assets/images/placeholder.png');

    if (!isPlatformBrowser(this.platformId)) { return; }

    const imageToPreload = new Image();
    imageToPreload.src = originalSrc;
  }

}

const DATA_SRC_ATTRIBUTE = 'data-src';
