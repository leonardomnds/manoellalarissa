import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspacoComponent } from './espaco.component';

const routes: Routes = [
  {
    path: '',
    component: EspacoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspacoRoutingModule { }
