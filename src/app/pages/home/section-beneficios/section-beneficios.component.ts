import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-beneficios',
  templateUrl: './section-beneficios.component.html',
  styleUrls: ['./section-beneficios.component.scss']
})
export class SectionBeneficiosComponent {

  icons = ICONS;

}

const ICONS = {
  check: faCheckCircle
}
