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
      titulo: 'Desenvolver relações saudáveis',
      imagem: '01.webp',
      from: AnimationType.Left,
    },
    {
      titulo: 'Aumentar a autoestima e autoconfiança',
      imagem: '02.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Aprender a lidar com traumas',
      imagem: '03.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Compreender os pensamentos negativos',
      imagem: '04.webp',
      from: AnimationType.Right,
    },
    {
      titulo: 'Mudar de comportamentos',
      imagem: '05.webp',
      from: AnimationType.Bottom,
    },
    {
      titulo: 'Compreender padrões comportamentais',
      imagem: '06.webp',
      from: AnimationType.Left,
    },
    {
      titulo: 'Promover o autoconhecimento',
      imagem: '07.webp',
      from: AnimationType.Right,
    },
    {
      titulo: 'Controlar os sintoma de ansiedade',
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
