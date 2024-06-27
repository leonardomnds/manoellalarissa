import { Component } from '@angular/core';
import { environment } from '@env';
import { faComments, faUserLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-initial',
  templateUrl: './section-initial.component.html',
  styleUrls: ['./section-initial.component.scss']
})
export class SectionInitialComponent {

  icons = ICONS;
  environment = environment;

}

const ICONS = {
  tipo: faComments,
  individual: faUserLarge,
}
