import { NgModule } from '@angular/core';
import { SeparatorShapeComponent } from './separator-shape.component';

const COMPONENTS = [SeparatorShapeComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SeparatorShapeModule { }
