import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })]
})
export class AppRoutingModule { }
