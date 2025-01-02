import { inject, Injectable } from '@angular/core';
import { TermoParams } from "@shared/services/aviso/dto";
import { SiteURL } from "@shared/injection-tokens";

@Injectable({
  providedIn: 'root'
})
export class TermoService {

  private _siteUrl = inject(SiteURL);

  getUrl(params: TermoParams): string {
    const avisoId = [
      this.padLeft(params.frequenciaPagamento, 1),
      this.padLeft(params.diaSemana, 1),
      this.padLeft(params.valor, 3),
      this.padLeft(params.horarioMarcado.hora, 2),
      this.padLeft(params.horarioMarcado.minuto, 2),
    ].join('');

    return `${this._siteUrl}/termos/${avisoId}`;
  }

  getParamsFromTermoId(avisoId: string | null): TermoParams | null {
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

  private padLeft(value: number, length: number): string {
    return `${value || 0}`.toString().replace(/\D/g, '').padStart(length, '0');
  }

}
