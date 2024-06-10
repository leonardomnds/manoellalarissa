import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, ElementRef, HostBinding, HostListener, TemplateRef, ViewChild, ViewChildren, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuIcon = faBars;

  private sidebarRef?: NgbOffcanvasRef;

  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);
  private sidebarService = inject(NgbOffcanvas);

  @ViewChild('logo', { static: true })
  private logoWrapper!: ElementRef<HTMLDivElement>;

  constructor() {
    interval(50)
      .pipe(
        map(() => ({
          logoWrapper: this.logoWrapper.nativeElement,
          imageHeight: this.document.querySelector<HTMLImageElement>('section.initial .logo')?.height ?? 0
        })),
        filter(({ imageHeight }) => !!imageHeight),
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

  abrirMenu(content: TemplateRef<any>): void {
    this.sidebarRef = this.sidebarService.open(content, { position: 'end',  });
  }

  @HostListener('window:resize')
  fecharMenu(): void {
    if (!this.sidebarRef) { return; }

    this.sidebarRef.close();
    this.sidebarRef = undefined;
  }

}

const LOGO_VISIBLE_CLASS = 'visible'
