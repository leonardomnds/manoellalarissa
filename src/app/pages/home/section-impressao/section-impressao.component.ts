import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { environment } from '@env';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-impressao',
  templateUrl: './section-impressao.component.html',
  styleUrls: ['./section-impressao.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionImpressaoComponent {

  icons = ICONS;
  environment = environment;

  @HostBinding('class') elementClass = 'print-area';

}

const ICONS = {
  instagram: faInstagram,
  whatsapp: faWhatsapp,
  endereco: faEarthAmericas
}
