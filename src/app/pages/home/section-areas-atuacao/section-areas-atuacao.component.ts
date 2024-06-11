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
      descricao: 'Sentimento de apreensão e preocupação excessiva em relação ao futuro, não saber lidar com incertezas, por muitas vezes acompanhada por sintomas físicos, como sudorese, coração acelerado, tremores, náusea, falta de ar, dor no peito, insônia, e etc. É normal sentir ansiedade em situações estressantes ou desafiadoras, mas quando ela é constante ou excessiva, pode se tornar uma ansiedade problemática e interferir na vida diária, afetando o bem-estar pessoal.',
      from: AnimationType.Left
    },
    {
      titulo: 'Estresse',
      descricao: 'É uma reação natural do corpo e da mente a situações percebidas como ameaçadoras ou desafiadoras. Quando se torna crônico e intenso, pode ter um impacto significativo na saúde física e mental. Pode levar a uma série de problemas como depressão, ansiedade, transtorno de estresse pós-traumático e transtornos do sono. Pode afetar a capacidade de concentração, memória e tomada de decisão.',
      from: AnimationType.Bottom
    },
    {
      titulo: 'Depressão',
      descricao: 'A depressão é um transtorno mental que afeta o humor, o pensamento e o comportamento, comprometendo a qualidade de vida da pessoa, causado por sentimentos persistentes de tristeza, desesperança e falta de interesse em atividades que antes eram prazerosas e dentre outros fatores. Além disso, a depressão pode causar alterações no apetite, no sono, na concentração e no nível de energia e etc. Entretanto diferente do que muitos imaginam a depressão pode se apresentar de diferentes formas para cada pessoa.',
      from: AnimationType.Right
    },
    {
      titulo: 'Medo e Insegurança',
      descricao: 'Falta de confiança em si mesmo ou nas suas capacidades, pode ser causada por diversos fatores, como experiências traumáticas, baixa autoestima, falta de habilidades sociais, tomada de decisão, entre outros. A insegurança pode afetar diversas áreas da vida, como relacionamentos pessoais, carreira profissional e vida social.',
      from: AnimationType.Left
    },
    {
      titulo: 'Burnout',
      descricao: 'É um estado de exaustão física, emocional e mental que pode ocorrer em pessoas que enfrentam um estresse crônico em seu trabalho, falta de um equilíbrio saudável entre vida profissional e pessoal. É caracterizado por exaustão emocional, sensação de se desconectar dos outros e do trabalho, baixa realização pessoal, irritabilidade, fadiga entre outros fatores.',
      from: AnimationType.Bottom
    },
    {
      titulo: 'Outros acolhimentos',
      descricao: `
        Problemas de relacionamento<br>
        Traumas e dores do passado<br>
        Processo de Luto<br>
        Baixa autoestima<br>
        Autocobrança<br>
        Procrastinação<br>
        Timidez<br>
        Mudanças<br>
        Insatisfação e Transição de Carreira<br>
        Dificuldade de comunicação e para tomar decisões<br>
        Autoconhecimento e Desenvolvimento Pessoal
      `,
      from: AnimationType.Right
    }
  ];

}

interface AreaAtuacao {
  titulo: string;
  descricao: string;
  from: AnimationType
}
