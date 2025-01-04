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

  private _podeAbrirCadastroTermo = signal<boolean>(false);
  podeAbrirCadastroTermo = this._podeAbrirCadastroTermo.asReadonly();

  private router = inject(Router);

  abrirCadastroTermoConsentimento(): void {
    if (!this._podeAbrirCadastroTermo()) { return; }
    this.router.navigate(['/termos', 'novo']);
  }

  @HostListener('document:keydown', ['$event'])
  protected onKeyDown(event: KeyboardEvent) {
    this._podeAbrirCadastroTermo.set(event.ctrlKey && event.shiftKey);
  }

  @HostListener('document:keyup', ['$event'])
  protected onKeyUp(event: KeyboardEvent) {
    this._podeAbrirCadastroTermo.set(!event.ctrlKey && !event.shiftKey);
  }

}

const ICONS = {
  hand: faHand,
  alert: faTriangleExclamation
}
