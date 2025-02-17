import { Component } from '@angular/core';
import { AnimationType, IsVisibleDirective } from '@shared/directives/is-visible.directive';
import { AgendarConsultaButtonComponent } from '@components/agendar-consulta-button/agendar-consulta-button.component';
import { SeparatorShapeComponent } from '@components/separator-shape/separator-shape.component';
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-section-beneficios',
  templateUrl: './section-beneficios.component.html',
  styleUrls: ['./section-beneficios.component.scss'],
  imports: [
    IsVisibleDirective,
    AgendarConsultaButtonComponent,
    SeparatorShapeComponent,
    NgOptimizedImage
  ]
})
export class SectionBeneficiosComponent {

  beneficios: Beneficio[] = [
    {
      titulo: 'Desenvolver relações saudáveis',
      imagem: 'assets/images/01.webp',
      from: AnimationType.Left,
    },
    {
      titulo: 'Aumentar a autoestima e autoconfiança',
      imagem: 'assets/images/02.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Aprender a lidar com traumas',
      imagem: 'assets/images/03.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Compreender os pensamentos negativos',
      imagem: 'assets/images/04.webp',
      from: AnimationType.Right,
    },
    {
      titulo: 'Mudar os hábitos',
      imagem: 'assets/images/05.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Compreender padrões comportamentais',
      imagem: 'assets/images/06.webp',
      from: AnimationType.Left,
    },
    {
      titulo: 'Promover o autoconhecimento',
      imagem: 'assets/images/07.webp',
      from: AnimationType.Right,
    },
    {
      titulo: 'Controlar os sintomas de ansiedade',
      imagem: 'assets/images/08.webp',
      from: AnimationType.Bottom,
    },
  ];

}

interface Beneficio {
  titulo: string;
  imagem: string;
  from: AnimationType
}
