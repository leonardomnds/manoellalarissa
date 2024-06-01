import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html'
})
export class EquipeComponent {

  imageUrl = 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2018/03/Artigo-O-que-sua-equipe-espera-de-voc%C3%AA.jpg';

  equipe: PessoaEquipe[] = [
    {
      nome: 'Théa Prado',
      cargo: 'Arquiteta e Urbanista',
      descricao: 'Mestre em projeto por Universidad Politécnica de Catalunya (UPC)',
    },
    {
      nome: 'Laura Sander',
      cargo: 'Arquiteta e Urbanista',
      descricao: 'Pós graduada em Neuroarquitetura',
    },
    {
      nome: 'Darlan Ricardo',
      cargo: 'Arquiteto e Urbanista',
      descricao: 'Pós graduado em Planejamento Urbano e Ambiental',
    },
    {
      nome: 'Janderson Hemkemeier',
      cargo: 'Engenheiro Civil',
      descricao: 'Pós graduando em Gestão de Projetos',
    },
    {
      nome: 'Gabriela Sander',
      cargo: 'Arquiteta e Urbanista',
      descricao: 'Pós graduada em Design de Interiores Industriais e Empresariais',
    },
  ];

}

interface PessoaEquipe {
  nome: string;
  descricao: string;
  cargo: string;
}
