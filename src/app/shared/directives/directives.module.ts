import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyImgDirective } from './lazy-img.directive';

const DIRECTIVES = [LazyImgDirective]

@NgModule({
  declarations: DIRECTIVES,
  imports: [CommonModule],
  exports: DIRECTIVES
})
export class DirectivesModule { }
