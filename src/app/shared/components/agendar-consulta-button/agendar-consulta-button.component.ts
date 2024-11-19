import { Component, Input, inject } from '@angular/core';
import { environment } from '@env';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { AnalyticsService } from '@shared/services/analytics/analytics.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-agendar-consulta-button',
  templateUrl: './agendar-consulta-button.component.html',
  styleUrl: './agendar-consulta-button.component.scss',
  imports: [FaIconComponent]
})
export class AgendarConsultaButtonComponent {

  @Input()
  public isEscuro!: boolean;

  whatsappIcon = faWhatsapp;
  environment = environment;

  private analyticsService = inject(AnalyticsService);

  trackGoogleAds(): void {
    this.analyticsService.trackGoogleAdsConversion();
  }

  get variant() {
    return this.isEscuro ? 'btn-rosa-escuro' : 'btn-rosa';
  }

}
