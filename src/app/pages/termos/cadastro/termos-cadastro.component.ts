import { Component, inject } from '@angular/core';
import { SelectComponent } from "@components/form-components/select/select.component";
import { FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators } from "@angular/forms";
import { diaSemanaOptions, frequenciaPagamentoOptions, TermoParams } from "@shared/services/aviso/dto";
import { TermoService } from "@shared/services/aviso/termo.service";

@Component({
  selector: 'app-termos-cadastro',
  standalone: true,
  imports: [
    SelectComponent,
    ReactiveFormsModule
  ],
  templateUrl: './termos-cadastro.component.html'
})
export class TermosCadastroComponent {

  private fb = inject(FormBuilder);
  private termoService = inject(TermoService);
  protected readonly diaSemanaOptions = diaSemanaOptions;
  protected readonly frequenciaPagamentoOptions = frequenciaPagamentoOptions;

  form = this.fb.group({
    diaSemana: [null, [Validators.required]],
    frequenciaPagamento: [null, [Validators.required]],
    valor: [0, [Validators.required, Validators.min(49.99)]],
    horarioMarcado: this.fb.nonNullable.group({
      hora: [0, [Validators.required, Validators.min(0), Validators.max(23)]],
      minuto: [0, [Validators.required, Validators.min(0), Validators.max(59)]],
    })
  });

  copiarLink(): void {
    const url = this.getUrl();

    if (!url) { return; }

    this.termoService.getUrl(this.form.value as any)

  }



  private getUrl() {
    if (this.form.invalid) { return; }
    return this.termoService.getUrl(this.form.value as any)
  }
}
