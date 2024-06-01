import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, HostListener, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { environment } from '@env';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  icons = ICONS;
  environment = environment;

  @HostBinding('class') elementClass = 'site-header';
  @ViewChild(NgbDropdown, { static: true})
  private menuToggle!: NgbDropdown;

  private document = inject(DOCUMENT);

  goToFooter(): void {
    this.document.querySelector('.site-footer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWindowEvent(): void {
    this.menuToggle.close();
  }
}

const ICONS = {
  menu: faBars
}
