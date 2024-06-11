import { Component } from '@angular/core';
import { faHand, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-alerta-suicidio',
  templateUrl: './section-alerta-suicidio.component.html',
  styleUrls: ['./section-alerta-suicidio.component.scss']
})
export class SectionAlertaSuicidioComponent {

  icons = ICONS;

}

const ICONS = {
  hand: faHand,
  alert: faTriangleExclamation
}
