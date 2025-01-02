import { Component } from '@angular/core';
import { AnimationType, IsVisibleDirective } from '@shared/directives/is-visible.directive';
import { AgendarConsultaButtonComponent } from '@components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '@components/separator-shape/separator-shape.component';
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-section-areas-atuacao',
  templateUrl: './section-areas-atuacao.component.html',
  styleUrls: ['./section-areas-atuacao.component.scss'],
  imports: [
    IsVisibleDirective,
    AgendarConsultaButtonComponent,
    SeparatorShapeComponent,
    NgOptimizedImage
  ]
})
export class SectionAreasAtuacaoComponent {

  areasAtuacao: AreaAtuacao[] = [
    {
      titulo: 'Ansiedade',
      imagem: 'assets/images/ansiedade.webp',
      from: AnimationType.Left
    },
    {
      titulo: 'Baixa autoestima',
      imagem: 'assets/images/baixa-autoestima.webp',
      from: AnimationType.Bottom
    },
    {
      titulo: 'Estresse',
      imagem: 'assets/images/estresse.webp',
      from: AnimationType.Bottom
    },
    {
      titulo: 'Procrastinação',
      imagem: 'assets/images/procrastinacao.webp',
      from: AnimationType.Right
    }
  ];

}

interface AreaAtuacao {
  titulo: string;
  imagem: string;
  from: AnimationType
}
