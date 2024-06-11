import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyImgDirective } from './lazy-img.directive';
import { IsVisibleDirective } from './is-visible.directive';

const DIRECTIVES = [LazyImgDirective, IsVisibleDirective]

@NgModule({
  declarations: DIRECTIVES,
  imports: [CommonModule],
  exports: DIRECTIVES
})
export class DirectivesModule { }
