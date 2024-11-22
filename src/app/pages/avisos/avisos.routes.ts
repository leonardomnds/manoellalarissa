import { Routes } from '@angular/router';
import { AvisosComponent } from "@pages/avisos/avisos.component";

export const avisosRoutes: Routes = [
  {
    path: ':id',
    component: AvisosComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
