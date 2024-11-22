import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AvisoService } from "@shared/services/aviso/aviso.service";
import { AvisoParams } from "@shared/services/aviso/dto";
import { CurrencyPipe } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  imports: [
    CurrencyPipe
  ]
})
export class AvisosComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private avisoService = inject(AvisoService);

  private _avisoParams = signal<AvisoParams | null>(null);

  valorSessao = computed(() => this._avisoParams()?.valor);
  diaSemana = computed(() => this.avisoService.getDiaSemanaExtenso(this._avisoParams()?.diaSemana!));
  frequenciaPagamento = computed(() => (
    this.avisoService.getFrequenciaPagamentoExtenso(this._avisoParams()?.frequenciaPagamento!)
  ));
  horarioMarcado = computed(() => {
    const horario = this._avisoParams()?.horarioMarcado;

    if (!horario || (!horario.hora && !horario.minuto)) return null;

    return [horario.hora, horario.minuto]
      .map((value) => value.toString().padStart(2, '0'))
      .join(':') + 'h';
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const avisoParams = this.avisoService.getParamsFromAvisoId(id);
    this._avisoParams.set(avisoParams);
  }

}
