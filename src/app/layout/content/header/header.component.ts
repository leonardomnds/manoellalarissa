import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, ElementRef, ViewChild, ViewChildren, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, interval, map } from 'rxjs';

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
        map(() => this.logoWrapper.nativeElement),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((logoWrapper) => {
        const deveExibir = this.document.documentElement.scrollTop >= 130;

        if (deveExibir) {
          logoWrapper.classList.add(LOGO_VISIBLE_CLASS);
          return;
        }

        logoWrapper.classList.remove(LOGO_VISIBLE_CLASS);
      });
  }

}

const LOGO_VISIBLE_CLASS = 'visible'
