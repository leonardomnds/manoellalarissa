import { Component, HostListener, inject, signal } from '@angular/core';
import { faHand, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { IsVisibleDirective } from '@shared/directives/is-visible.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Router } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-section-alerta-suicidio',
  templateUrl: './section-alerta-suicidio.component.html',
  styleUrls: ['./section-alerta-suicidio.component.scss'],
  imports: [IsVisibleDirective, FaIconComponent]
})
export class SectionAlertaSuicidioComponent {

  icons = ICONS;

  private router = inject(Router);

  private _holdTimeout = signal<NodeJS.Timeout | null>(null);


  abrirCadastroTermoConsentimento(): void {
    console.log('abrirCadastroTermoConsentimento')
    this._holdTimeout.set(setTimeout(() => {

      console.log('aaaaaa')
      this.router.navigate(['/termos', 'novo'])
    }, 3000));
  }

  cancelarAberturaCadastroTermoConsentimento(): void {
    console.log('cancelarAberturaCadastroTermoConsentimento')
    clearTimeout(this._holdTimeout()!);
  }

}

const ICONS = {
  hand: faHand,
  alert: faTriangleExclamation
}
