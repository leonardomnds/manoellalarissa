import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';

@NgModule({
  declarations: [
    EquipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    EquipeRoutingModule,
  ]
})
export class EquipeModule { }
