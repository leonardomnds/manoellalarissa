import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { ActivatedRoute, Router } from "@angular/router";
import { AvisoService } from "@shared/services/aviso/aviso.service";
import { AvisoParams } from "@shared/services/aviso/dto";
import { environment } from "@env";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  standalone: true,
  selector: 'app-termos-detalhes',
  templateUrl: './termos-detalhes.component.html',
  imports: [
    CurrencyPipe,
    FaIconComponent
  ]
})
export class TermosDetalhesComponent implements OnInit {

  icons = ICONS;

  private router = inject(Router);
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

  confirmarUrl = computed(() => {
    const params = this._avisoParams();
    if (!params) { return; }
    const url = this.avisoService.getUrl(params);
    if (!url) { return; }

    const mensagem = [
      'Declaro que li o conteúdo da URL abaixo:',
      '%0A',
      url,
      '%0A%0A',
      'Confirmo que estou de acordo com os termos descritos.'
    ].join('');

    return `${environment.whatsappUrl}?text=${mensagem}`;
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const avisoParams = this.avisoService.getParamsFromAvisoId(id);

    if (!avisoParams) {
      this.router.navigate(['/'], { replaceUrl: true });
      return;
    }

    this._avisoParams.set(avisoParams);
  }
}

const ICONS = {
  confirmar: faCheck,
}
