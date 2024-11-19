import { NgModule } from '@angular/core';
import { AgendarConsultaButtonComponent } from './agendar-consulta-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [AgendarConsultaButtonComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [FontAwesomeModule],
  exports: COMPONENTS
})
export class AgendarConsultaButtonModule { }
