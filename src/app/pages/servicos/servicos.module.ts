import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';

@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    ServicosRoutingModule,
  ]
})
export class ServicosModule { }
