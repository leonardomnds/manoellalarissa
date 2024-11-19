import { Component } from '@angular/core';
import { environment } from '@env';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { IsVisibleDirective } from '../../../shared/directives/is-visible.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-section-contato',
  templateUrl: './section-contato.component.html',
  styleUrls: ['./section-contato.component.scss'],
  imports: [IsVisibleDirective, FaIconComponent]
})
export class SectionContatoComponent {

  icons = ICONS;
  environment = environment;

}

const ICONS = {
  whatsapp: faWhatsapp,
  instagram: faInstagram
}
