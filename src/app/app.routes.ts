import { ExtraOptions, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('@layout/content/content.routes').then((r) => r.contentRoutes),
  },
  {
    path: '**',
    loadChildren: () => import('@layout/content/content.routes').then((r) => r.contentRoutes),
  },
];

export const appRoutesConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 80]
};
