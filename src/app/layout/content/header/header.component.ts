import { DOCUMENT } from '@angular/common';
import { AfterContentInit, Component, ElementRef, HostListener, TemplateRef, ViewChild, inject } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentInit {

  menuIcon = faBars;

  private sidebarRef?: NgbOffcanvasRef;

  private document = inject(DOCUMENT);
  private sidebarService = inject(NgbOffcanvas);

  @ViewChild('logo', { static: true })
  private logoWrapper!: ElementRef<HTMLDivElement>;

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
