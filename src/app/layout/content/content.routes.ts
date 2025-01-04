import { Routes } from '@angular/router';
import { ContentComponent } from './content.component';

export const contentRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/home/home.routes').then((r) => r.homeRoutes),
      },
      {
        path: 'termos',
        loadChildren: () => import('@pages/termos/termos.routes').then((r) => r.termosRoutes),
      },
      {
        path: 'form',
        loadChildren: () => import('@pages/ficha-cadastral/ficha-cadastral.routes').then((r) => r.fichaCadastralRoutes),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];
