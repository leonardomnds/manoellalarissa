import { Component } from '@angular/core';
import { IsVisibleDirective } from '../../../shared/directives/is-visible.directive';
import { LazyImgDirective } from '../../../shared/directives/lazy-img.directive';
import { AgendarConsultaButtonComponent } from '../../../shared/components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '../../../shared/components/separator-shape/separator-shape.component';

@Component({
  standalone: true,
  selector: 'app-section-como-funciona',
  templateUrl: './section-como-funciona.component.html',
  styleUrls: ['./section-como-funciona.component.scss'],
  imports: [IsVisibleDirective, LazyImgDirective, AgendarConsultaButtonComponent, SeparatorShapeComponent]
})
export class SectionComoFuncionaComponent {

  cabecaItems: string[] = ['Escuta Clínica', 'Livre Associação', 'Técnicas Verbais', 'Análise de Sonhos', 'Imaginação Ativa', 'Arquétipos'];

}
