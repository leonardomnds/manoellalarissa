import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '@shared/directives/directives.module';
import { SectionInitialComponent } from './section-initial/section-initial.component';
import { SectionAreasAtuacaoComponent } from './section-areas-atuacao/section-areas-atuacao.component';
import { SectionComoFuncionaComponent } from './section-como-funciona/section-como-funciona.component';
import { SectionBeneficiosComponent } from './section-beneficios/section-beneficios.component';
import { SectionPsicologaComponent } from './section-psicologa/section-psicologa.component';
import { AgendarConsultaButtonModule } from '@components/agendar-consulta-button/agendar-consulta-button.module';
import { SeparatorShapeModule } from '@components/separator-shape/separator-shape.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionContatoComponent } from './section-contato/section-contato.component';
import { SectionAlertaSuicidioComponent } from './section-alerta-suicidio/section-alerta-suicidio.component';
import { SectionImpressaoComponent } from './section-impressao/section-impressao.component';

@NgModule({
  declarations: [
    HomeComponent,
    SectionInitialComponent,
    SectionAreasAtuacaoComponent,
    SectionComoFuncionaComponent,
    SectionBeneficiosComponent,
    SectionPsicologaComponent,
    SectionContatoComponent,
    SectionImpressaoComponent,
    SectionAlertaSuicidioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    HomeRoutingModule,
    SeparatorShapeModule,
    FontAwesomeModule,
    AgendarConsultaButtonModule
  ]
})
export class HomeModule { }
