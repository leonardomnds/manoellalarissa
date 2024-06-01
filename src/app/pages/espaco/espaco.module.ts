import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspacoRoutingModule } from './espaco-routing.module';
import { EspacoComponent } from './espaco.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';

@NgModule({
  declarations: [
    EspacoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    EspacoRoutingModule,
  ]
})
export class EspacoModule { }
