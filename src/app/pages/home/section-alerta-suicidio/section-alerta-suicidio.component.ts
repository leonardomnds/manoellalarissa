import { Component } from '@angular/core';
import { faHand, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { IsVisibleDirective } from '@shared/directives/is-visible.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-section-alerta-suicidio',
  templateUrl: './section-alerta-suicidio.component.html',
  styleUrls: ['./section-alerta-suicidio.component.scss'],
  imports: [IsVisibleDirective, FaIconComponent]
})
export class SectionAlertaSuicidioComponent {

  icons = ICONS;

}

const ICONS = {
  hand: faHand,
  alert: faTriangleExclamation
}
