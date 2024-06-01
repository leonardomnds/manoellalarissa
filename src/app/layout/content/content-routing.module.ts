import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'espaco',
        loadChildren: () => import('@pages/espaco/espaco.module').then((m) => m.EspacoModule),
        title: 'Espaço'
      },
      {
        path: 'equipe',
        loadChildren: () => import('@pages/equipe/equipe.module').then((m) => m.EquipeModule),
        title: 'Equipe'
      },
      {
        path: 'servicos',
        loadChildren: () => import('@pages/servicos/servicos.module').then((m) => m.ServicosModule),
        title: 'Serviços'
      },
      {
        path: 'livro',
        loadChildren: () => import('@pages/livro/livro.module').then((m) => m.LivroModule),
        title: 'Livro'
      },
      {
        path: '',
        loadChildren: () => import('@pages/projetos/projetos.module').then((m) => m.ProjetosModule),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
