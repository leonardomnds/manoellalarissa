import { Component } from '@angular/core';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { AnimationType } from '@shared/directives/is-visible.directive';

@Component({
  selector: 'app-section-areas-atuacao',
  templateUrl: './section-areas-atuacao.component.html',
  styleUrls: ['./section-areas-atuacao.component.scss']
})
export class SectionAreasAtuacaoComponent {

  brainIcon = faBrain;

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
