import { Component } from '@angular/core';
import { environment } from '@env';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-section-contato',
  templateUrl: './section-contato.component.html',
  styleUrls: ['./section-contato.component.scss']
})
export class SectionContatoComponent {

  icons = ICONS;
  environment = environment;

}

const ICONS = {
  whatsapp: faWhatsapp,
  instagram: faInstagram
}
