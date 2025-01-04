import { Routes } from '@angular/router';
import { TermosComponent } from "@pages/termos/termos.component";
import { TermosDetalhesComponent } from "@pages/termos/detalhes/termos-detalhes.component";
import { TermosCadastroComponent } from "@pages/termos/cadastro/termos-cadastro.component";

export const termosRoutes: Routes = [
  {
    path: '',
    component: TermosComponent,
    children: [
      {
        path: 'novo',
        component: TermosCadastroComponent,
      },
      {
        path: ':id',
        component: TermosDetalhesComponent,
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  }
];
