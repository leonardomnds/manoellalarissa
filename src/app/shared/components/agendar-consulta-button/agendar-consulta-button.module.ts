import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendarConsultaButtonComponent } from './agendar-consulta-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [AgendarConsultaButtonComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule],
  exports: COMPONENTS
})
export class AgendarConsultaButtonModule { }
