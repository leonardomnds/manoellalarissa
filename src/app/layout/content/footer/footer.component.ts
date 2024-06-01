import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { environment } from '@env';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {

  icons = ICONS;
  environment = environment;

  @HostBinding('class') elementClass = 'row g-0';

}

const ICONS = {
  whatsapp: faWhatsapp,
  instagram: faInstagram,
  telefone: faPhone,
  email: faEnvelope,
}
