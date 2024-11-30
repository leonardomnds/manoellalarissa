import { inject, Injectable } from '@angular/core';
import { AvisoParams, DiaSemanaEnum, FrequenciaPagamentoEnum } from "@shared/services/aviso/dto";
import { SiteURL } from "@shared/injection-tokens";

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  private _siteUrl = inject(SiteURL);

  getUrl(params: AvisoParams): string {
    const avisoId = [
      this.padLeft(params.frequenciaPagamento, 1),
      this.padLeft(params.diaSemana, 1),
      this.padLeft(params.valor, 3),
      this.padLeft(params.horarioMarcado.hora, 2),
      this.padLeft(params.horarioMarcado.minuto, 2),
    ].join('');

    return `${this._siteUrl}/termos/${avisoId}`;
  }

  getParamsFromAvisoId(avisoId: string | null): AvisoParams | null {
    const sanitizedId  = `${avisoId || ''}`.replace(/\D/g, '');

    if (sanitizedId.length !== 9) return null;

    try {
      const frequenciaPagamento = parseInt(sanitizedId.slice(0, 1), 10);
      const diaSemana = parseInt(sanitizedId.slice(1, 2), 10);
      const valor = parseInt(sanitizedId.slice(2, 5), 10);
      const hora = parseInt(sanitizedId.slice(5, 7), 10);
      const minuto = parseInt(sanitizedId.slice(7, 9), 10);

      return {
        frequenciaPagamento,
        diaSemana,
        valor,
        horarioMarcado: {
          hora,
          minuto,
        },
      };
    } catch {
      return null;
    }
  }

  getDiaSemanaExtenso(diaSemana: DiaSemanaEnum): string | null {
    switch (diaSemana) {
    case DiaSemanaEnum.Domingo:
      return 'Domingo';
    case DiaSemanaEnum.Segunda:
      return 'Segunda-feira';
    case DiaSemanaEnum.Terca:
      return 'Terça-feira';
    case DiaSemanaEnum.Quarta:
      return 'Quarta-feira';
    case DiaSemanaEnum.Quinta:
      return 'Quinta-feira';
    case DiaSemanaEnum.Sexta:
      return 'Sexta-feira';
    case DiaSemanaEnum.Sabado:
      return 'Sábado';
    default:
      return null;
    }
  }

  getFrequenciaPagamentoExtenso(frequenciaPagamento: FrequenciaPagamentoEnum): string | null {
    switch (frequenciaPagamento) {
    case FrequenciaPagamentoEnum.NoDia:
      return 'no dia da sessão';
    case FrequenciaPagamentoEnum.Semanal:
      return 'semanalmente';
    case FrequenciaPagamentoEnum.Quinzenal:
      return 'a cada quinze dias';
    case FrequenciaPagamentoEnum.Mensal:
      return 'mensalmente';
    default:
      return null;
    }
  }

  private padLeft(value: number, length: number): string {
    return `${value || 0}`.toString().replace(/\D/g, '').padStart(length, '0');
  }

}
