import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { NgbDropdownConfig, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { filter, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet/>
  `
})
export class AppComponent {

  private router = inject(Router);
  private document = inject(DOCUMENT);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private tooltipConfig = inject(NgbTooltipConfig);
  private dropdownConfig = inject(NgbDropdownConfig);

  constructor() {
    this.dropdownConfig.container = 'body';
    this.tooltipConfig.container = 'body';
    this.tooltipConfig.placement = ['bottom', 'top', 'bottom-right', 'bottom-left', 'top-right', 'top-left'];

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        mergeMap(() => {
          let currentRoute = this.route.root;
          while (currentRoute.firstChild) { currentRoute = currentRoute.firstChild; }
          return currentRoute.data;
        }),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe((routeData) => {
        const metaDescription = routeData.metaDescription || DEFAULT_DESCRIPTION;

        const metaTag = this.document.querySelector('meta[name="description"]');
        if (metaTag) { metaTag.setAttribute('content', metaDescription); }
      });
  }

}

const DEFAULT_DESCRIPTION = 'Descubra o design inovador e sustentável com Théa Prado Arquitetura. Especialistas em projetos arquitetônicos residenciais e comerciais, combinamos estética e funcionalidade para transformar espaços. Entre em contato e realize seu sonho com a nossa equipe experiente.'
