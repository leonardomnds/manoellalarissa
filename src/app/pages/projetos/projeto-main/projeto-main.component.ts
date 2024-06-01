import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomData, Projeto } from '@pages/projetos/types';

@Component({
  selector: 'app-projeto-main',
  templateUrl: './projeto-main.component.html',
  styleUrls: ['./projeto-main.component.scss'],
})
export class ProjetoMainComponent implements OnInit {

  projetos: Projeto[] = [];

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const projetosRoutes = this.route.parent?.snapshot?.routeConfig?.children ?? [];

    this.projetos = projetosRoutes
      .filter((route) => route.path)
      .map((route) => ({
        path: route.path!,
        nome: `${route.title}`,
        ...route.data as CustomData,
      }));

  }
}

