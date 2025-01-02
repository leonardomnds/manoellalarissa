import { Component } from '@angular/core';
import { IsVisibleDirective } from '@shared/directives/is-visible.directive';
import { AgendarConsultaButtonComponent } from '@components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '@components/separator-shape/separator-shape.component';
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-section-como-funciona',
  templateUrl: './section-como-funciona.component.html',
  styleUrls: ['./section-como-funciona.component.scss'],
  imports: [
    IsVisibleDirective,
    AgendarConsultaButtonComponent,
    SeparatorShapeComponent,
    NgOptimizedImage
  ]
})
export class SectionComoFuncionaComponent {

}
