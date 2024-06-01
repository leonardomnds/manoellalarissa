import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomData, Projeto, TipoProjeto } from '@pages/projetos/types';

@Component({
  selector: 'app-projeto-detalhes',
  templateUrl: './projeto-detalhes.component.html',
  styleUrls: ['./projeto-detalhes.component.scss'],
})
export class ProjetoDetalhesComponent implements OnInit {

  projeto!: Projeto;
  TipoProjeto = TipoProjeto;

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const route = this.route.snapshot;

    this.projeto = {
      path: route.routeConfig?.path!,
      nome: route.title!,
      ...route.data as CustomData
    };
  }
}
