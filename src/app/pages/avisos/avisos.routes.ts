import { Routes } from '@angular/router';
import { AvisosComponent } from "@pages/avisos/avisos.component";

export const avisosRoutes: Routes = [
  {
    path: ':id([0-9]{9})',
    component: AvisosComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
