import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/content/content.module').then(m => m.ContentModule),
  },
  {
    path: '**',
    loadChildren: () => import('./layout/content/content.module').then(m => m.ContentModule),
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
