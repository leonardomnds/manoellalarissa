import { AfterViewInit, Component, inject } from '@angular/core';
import { NgbDropdownConfig, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from "@shared/services/analytics/analytics.service";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <router-outlet/>
  `,
  imports: [RouterOutlet]
})
export class AppComponent implements AfterViewInit {

  private tooltipConfig = inject(NgbTooltipConfig);
  private dropdownConfig = inject(NgbDropdownConfig);
  private analyticsService = inject(AnalyticsService);

  constructor() {
    this.dropdownConfig.container = 'body';
    this.tooltipConfig.container = 'body';
    this.tooltipConfig.placement = ['bottom', 'top', 'bottom-right', 'bottom-left', 'top-right', 'top-left'];
  }

  ngAfterViewInit() {
    this.analyticsService.initialize();
  }

}
