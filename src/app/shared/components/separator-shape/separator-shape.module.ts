import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeparatorShapeComponent } from './separator-shape.component';

const COMPONENTS = [SeparatorShapeComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS
})
export class SeparatorShapeModule { }
