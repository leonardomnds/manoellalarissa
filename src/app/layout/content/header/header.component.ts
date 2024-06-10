import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, ElementRef, ViewChild, ViewChildren, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);

  @ViewChild('logo', { static: true })
  private logoWrapper!: ElementRef<HTMLDivElement>;

  constructor() {
    interval(50)
      .pipe(
        map(() => ({
          logoWrapper: this.logoWrapper.nativeElement,
          imageHeight: this.document.querySelector<HTMLImageElement>('section.initial .logo')?.height ?? 0
        })),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((data) => {
        const deveExibir = this.document.documentElement.scrollTop >= data.imageHeight;

        if (deveExibir) {
          data.logoWrapper.classList.add(LOGO_VISIBLE_CLASS);
          return;
        }

        data.logoWrapper.classList.remove(LOGO_VISIBLE_CLASS);
      });
  }

}

const LOGO_VISIBLE_CLASS = 'visible'
