import { NgModule } from '@angular/core';
import { LazyImgDirective } from './lazy-img.directive';
import { IsVisibleDirective } from './is-visible.directive';

const DIRECTIVES = [LazyImgDirective, IsVisibleDirective]

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule { }
