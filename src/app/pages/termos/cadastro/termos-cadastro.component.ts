import { Component, inject } from '@angular/core';
import { SelectComponent } from "@components/form-components/select/select.component";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { diaSemanaOptions, frequenciaPagamentoOptions } from "@shared/services/aviso/dto";
import { TermoService } from "@shared/services/aviso/termo.service";
import { InputComponent } from "@components/form-components/input/input.component";
import { InputMaskService } from "@shared/services/input-mask/input-mask.service";
import { LabelComponent } from "@components/form-components/label/label.component";
import { InputMaskModule } from "@ngneat/input-mask";
import { DOCUMENT, JsonPipe } from "@angular/common";
import { WINDOW } from "@shared/injection-tokens";

@Component({
  selector: 'app-termos-cadastro',
  standalone: true,
  imports: [
    InputComponent,
    SelectComponent,
    ReactiveFormsModule,
    LabelComponent,
    InputMaskModule,
    JsonPipe
  ],
  templateUrl: './termos-cadastro.component.html'
})
export class TermosCadastroComponent {

  private window = inject(WINDOW);
  private document = inject(DOCUMENT);
  private fb = inject(FormBuilder);
  private maskService = inject(InputMaskService);
  private termoService = inject(TermoService);
  protected readonly diaSemanaOptions = diaSemanaOptions;
  protected readonly frequenciaPagamentoOptions = frequenciaPagamentoOptions;

  form = this.fb.group({
    diaSemana: [null, [Validators.required]],
    frequenciaPagamento: [null, [Validators.required]],
    valor: [0, [Validators.required, Validators.min(49.99)]],
    horarioMarcado: this.fb.nonNullable.group({
      hora: ['00'],
      minuto: ['00'],
    })
  });

  moneyMask = this.maskService.currencyMask();
  hourMask = this.maskService.numericMask({ alias: 'datetime', inputFormat: 'HH', placeholder: '_' });
  minuteMask = this.maskService.numericMask({ alias: 'datetime', inputFormat: 'MM', placeholder: '_' });

  copiarLink(): void {
    const url = this.getUrl();

    if (!url) { return; }

    const el = this.document.createElement('textarea');
    el.textContent = url;
    el.style.position = 'fixed';
    this.document.body.appendChild(el);
    el.select();

    try {
      this.document.execCommand('copy');
    } finally {
      this.document.removeChild(el);
    }
  }

  abrirLink(): void {
    const url = this.getUrl();

    if (!url) { return; }

    this.window.open(url, '_blank');
  }

  private getUrl() {
    if (this.form.invalid) { return; }
    return this.termoService.getUrl(this.form.value as any)
  }
}
