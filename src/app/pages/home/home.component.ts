import { Component } from '@angular/core';
import { SectionInitialComponent } from './section-initial/section-initial.component';
import { SectionAreasAtuacaoComponent } from './section-areas-atuacao/section-areas-atuacao.component';
import { SectionComoFuncionaComponent } from './section-como-funciona/section-como-funciona.component';
import { SectionBeneficiosComponent } from './section-beneficios/section-beneficios.component';
import { SectionPsicologaComponent } from './section-psicologa/section-psicologa.component';
import { SectionContatoComponent } from './section-contato/section-contato.component';
import { SectionAlertaSuicidioComponent } from './section-alerta-suicidio/section-alerta-suicidio.component';
import { SectionImpressaoComponent } from './section-impressao/section-impressao.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    SectionInitialComponent,
    SectionAreasAtuacaoComponent,
    SectionComoFuncionaComponent,
    SectionBeneficiosComponent,
    SectionPsicologaComponent,
    SectionContatoComponent,
    SectionAlertaSuicidioComponent,
    SectionImpressaoComponent
  ]
})
export class HomeComponent {}
