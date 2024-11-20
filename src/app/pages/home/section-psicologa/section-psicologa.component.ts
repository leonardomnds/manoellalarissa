import { Component } from '@angular/core';
import { environment } from '@env';
import { LazyImgDirective } from '../../../shared/directives/lazy-img.directive';
import { IsVisibleDirective } from '../../../shared/directives/is-visible.directive';
import { AgendarConsultaButtonComponent } from '../../../shared/components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '../../../shared/components/separator-shape/separator-shape.component';

@Component({
  standalone: true,
  selector: 'app-section-psicologa',
  templateUrl: './section-psicologa.component.html',
  styleUrls: ['./section-psicologa.component.scss'],
  imports: [LazyImgDirective, IsVisibleDirective, AgendarConsultaButtonComponent, SeparatorShapeComponent]
})
export class SectionPsicologaComponent {

  environment = environment;

}
