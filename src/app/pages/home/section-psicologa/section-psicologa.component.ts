import { Component } from '@angular/core';
import { environment } from '@env';
import { IsVisibleDirective } from '@shared/directives/is-visible.directive';
import { AgendarConsultaButtonComponent } from '@components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '@components/separator-shape/separator-shape.component';
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-section-psicologa',
  templateUrl: './section-psicologa.component.html',
  styleUrls: ['./section-psicologa.component.scss'],
  imports: [
    IsVisibleDirective,
    AgendarConsultaButtonComponent,
    SeparatorShapeComponent,
    NgOptimizedImage
  ]
})
export class SectionPsicologaComponent {

  environment = environment;

}
