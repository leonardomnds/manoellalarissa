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

  private _clickCount = signal<number>(0);
  private _clickTimeOut = signal<NodeJS.Timeout | null>(null);

  onClick(): void {
    clearTimeout(this._clickTimeOut()!);
    this._clickCount.update((prev) => prev + 1);
    this._clickTimeOut.set(setTimeout(() => this._clickCount.set(0), 1000));

    if (this._clickCount() < 5) {
      return;
    }

    this._clickCount.set(0);
    this.router.navigate(['/termos', 'novo']);
  }

}

const ICONS = {
  hand: faHand,
  alert: faTriangleExclamation
}
