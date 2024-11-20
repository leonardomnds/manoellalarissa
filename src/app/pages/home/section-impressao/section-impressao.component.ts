import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { environment } from '@env';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-section-impressao',
  templateUrl: './section-impressao.component.html',
  styleUrls: ['./section-impressao.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [FaIconComponent]
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
