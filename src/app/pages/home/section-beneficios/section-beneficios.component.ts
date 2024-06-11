import { Component } from '@angular/core';
import { AnimationType } from '@shared/directives/is-visible.directive';

@Component({
  selector: 'app-section-beneficios',
  templateUrl: './section-beneficios.component.html',
  styleUrls: ['./section-beneficios.component.scss']
})
export class SectionBeneficiosComponent {

  beneficios: Beneficio[] = [
    {
      titulo: 'Desenvolve relações saudáveis',
      imagem: '01.webp',
      from: AnimationType.Left,
    },
    {
      titulo: 'Aumenta a autoestima e autoconfiança',
      imagem: '02.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Ensina a lidar com traumas',
      imagem: '03.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Compreende os pensamentos negativos',
      imagem: '04.webp',
      from: AnimationType.Right,
    },
    {
      titulo: 'Mudança de comportamentos',
      imagem: '05.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Compreendes padrões comportamentais',
      imagem: '06.webp',
      from: AnimationType.Left,
    },
    {
      titulo: 'Promove o autoconhecimento',
      imagem: '07.webp',
      from: AnimationType.Right,
    },
    {
      titulo: 'Controla os sintoma de ansiedade',
      imagem: '08.webp',
      from: AnimationType.Bottom,
    },
  ];

}

interface Beneficio {
  titulo: string;
  imagem: string;
  from: AnimationType
}
