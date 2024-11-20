import { Component } from '@angular/core';
import { environment } from '@env';
import { faComments, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { LazyImgDirective } from '../../../shared/directives/lazy-img.directive';
import { IsVisibleDirective } from '../../../shared/directives/is-visible.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AgendarConsultaButtonComponent } from '../../../shared/components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '../../../shared/components/separator-shape/separator-shape.component';

@Component({
  standalone: true,
  selector: 'app-section-initial',
  templateUrl: './section-initial.component.html',
  styleUrls: ['./section-initial.component.scss'],
  imports: [LazyImgDirective, IsVisibleDirective, FaIconComponent, AgendarConsultaButtonComponent, SeparatorShapeComponent]
})
export class SectionInitialComponent {

  icons = ICONS;
  environment = environment;

}

const ICONS = {
  tipo: faComments,
  individual: faUserLarge,
}
