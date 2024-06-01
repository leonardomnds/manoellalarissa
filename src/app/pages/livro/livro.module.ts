import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroRoutingModule } from './livro-routing.module';
import { LivroComponent } from './livro.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';

@NgModule({
  declarations: [
    LivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    LivroRoutingModule,
  ]
})
export class LivroModule { }
