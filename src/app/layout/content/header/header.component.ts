import { DOCUMENT } from '@angular/common';
import { AfterContentInit, Component, DestroyRef, ElementRef, HostListener, TemplateRef, ViewChild, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit {

  isLandingPage = signal(true);

  menuIcon = faBars;

  private sidebarRef?: NgbOffcanvasRef;

  private router = inject(Router);
  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);
  private sidebarService = inject(NgbOffcanvas);

  @ViewChild('logo', { static: true })
  private logoWrapper!: ElementRef<HTMLDivElement>;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((event: NavigationEnd) => {
        const isHome = event.url === '/' || event.url.startsWith('/#');
        this.isLandingPage.set(isHome);

        if (!isHome) {
          const metaRobots = this.document.querySelector('meta[name="robots"]')!;
          metaRobots.setAttribute('content', 'noindex, nofollow');
        }
      });
  }

  ngAfterContentInit(): void {
    this.onWindowScroll();
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

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const logoWrapper = this.logoWrapper.nativeElement;

    if (!this.isLandingPage()) {
      logoWrapper.classList.add(LOGO_VISIBLE_CLASS);
      return;
    }

    const imageHeight = this.document.querySelector<HTMLImageElement>('section.initial .logo')?.height ?? 0;

    if (!imageHeight) { return; }

    const deveExibir = this.document.documentElement.scrollTop >= imageHeight;

    if (deveExibir) {
      logoWrapper.classList.add(LOGO_VISIBLE_CLASS);
      return;
    }

    logoWrapper.classList.remove(LOGO_VISIBLE_CLASS);
  }

}

const LOGO_VISIBLE_CLASS = 'visible'
