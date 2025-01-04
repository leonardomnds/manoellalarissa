import { InMemoryScrollingOptions, Routes } from '@angular/router';

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

export const appRoutesInMemoryScrollingOptions: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
};
