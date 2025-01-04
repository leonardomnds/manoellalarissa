import { Component, inject } from '@angular/core';
import { SelectComponent } from "@components/form-components/select/select.component";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { diaSemanaOptions, frequenciaPagamentoOptions } from "@shared/services/aviso/dto";
import { TermoService } from "@shared/services/aviso/termo.service";
import { InputComponent } from "@components/form-components/input/input.component";
import { InputMaskService } from "@shared/services/input-mask/input-mask.service";
import { LabelComponent } from "@components/form-components/label/label.component";
import { InputMaskModule } from "@ngneat/input-mask";
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "@shared/injection-tokens";
import { faBrazilianRealSign, faCalendarDay, faClock, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { LocalStorageKey, LocalStorageService } from "@shared/services/local-storage/local-storage.service";

@Component({
  selector: 'app-termos-cadastro',
  standalone: true,
  imports: [
    InputComponent,
    SelectComponent,
    ReactiveFormsModule,
    LabelComponent,
    InputMaskModule,
    FaIconComponent,
  ],
  templateUrl: './termos-cadastro.component.html'
})
export class TermosCadastroComponent {

  private window = inject(WINDOW);
  private document = inject(DOCUMENT);
  private fb = inject(FormBuilder);
  private termoService = inject(TermoService);
  private maskService = inject(InputMaskService);
  private localStorageService = inject(LocalStorageService);

  protected readonly diaSemanaOptions = diaSemanaOptions;
  protected readonly frequenciaPagamentoOptions = frequenciaPagamentoOptions;

  form = this.fb.group({
    diaSemana: [null, [Validators.required]],
    horarioMarcado: [null, [Validators.required]],
    frequenciaPagamento: [null, [Validators.required]],
    valor: [this.localStorageService.get(LocalStorageKey.ValorSessao) || 0, [Validators.required, Validators.min(49.99)]],
  });

  icons = ICONS;
  moneyMask = this.maskService.currencyMask();
  horarioMask = this.maskService.horarioMask();

  copiarLink(): void {
    const url = this.getUrl();

    if (!url) { return; }

    const el = this.document.createElement('textarea');
    el.textContent = url;
    this.document.body.appendChild(el);
    el.select();

    try {
      this.document.execCommand('copy');
    } finally {
      this.document.body.removeChild(el);
    }
  }

  abrirLink(): void {
    const url = this.getUrl();

    if (!url) { return; }

    this.window.open(url, '_blank');
  }

  private getUrl() {
    if (this.form.invalid) { return; }

    this.localStorageService.set(LocalStorageKey.ValorSessao, this.form.value.valor);

    return this.termoService.getUrl(this.form.value as any)
  }
}

const ICONS = {
  hora: faClock,
  dia: faCalendarDay,
  valor: faBrazilianRealSign,
  frequencia: faHandHoldingDollar,
}
