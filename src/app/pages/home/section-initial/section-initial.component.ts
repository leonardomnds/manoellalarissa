import { Component } from '@angular/core';
import { environment } from '@env';
import { faComments, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { IsVisibleDirective } from '@shared/directives/is-visible.directive';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { AgendarConsultaButtonComponent } from '@components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '@components/separator-shape/separator-shape.component';
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-section-initial',
  templateUrl: './section-initial.component.html',
  styleUrls: ['./section-initial.component.scss'],
  imports: [
    IsVisibleDirective,
    FaIconComponent,
    AgendarConsultaButtonComponent,
    SeparatorShapeComponent,
    NgOptimizedImage
  ]
})
export class SectionInitialComponent {

  icons = ICONS;
  environment = environment;

}

const ICONS = {
  tipo: faComments,
  individual: faUserLarge,
}
