import { Location } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet/>
  `
})
export class AppComponent {

  private tooltipConfig = inject(NgbTooltipConfig);
  private dropdownConfig = inject(NgbDropdownConfig);

  constructor() {
    this.dropdownConfig.container = 'body';
    this.tooltipConfig.container = 'body';
    this.tooltipConfig.placement = ['bottom', 'top', 'bottom-right', 'bottom-left', 'top-right', 'top-left'];
  }

}
