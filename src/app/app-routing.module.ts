import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@layout/content/content.routes').then((r) => r.contentRoutes),
  },
  {
    path: '**',
    loadChildren: () => import('@layout/content/content.routes').then((r) => r.contentRoutes),
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 80]
};

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, routerOptions)]
})
export class AppRoutingModule { }
