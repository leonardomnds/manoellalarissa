import { NgModule } from '@angular/core';
import { AgendarConsultaButtonComponent } from './agendar-consulta-button.component';

const COMPONENTS = [AgendarConsultaButtonComponent];

@NgModule({
    imports: COMPONENTS,
    exports: COMPONENTS
})
export class AgendarConsultaButtonModule { }
