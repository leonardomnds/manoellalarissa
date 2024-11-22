import { DiaSemanaEnum, FrequenciaPagamentoEnum } from "@shared/services/aviso/dto";

export interface AvisoParams {
  valor: number,
  diaSemana: DiaSemanaEnum,
  frequenciaPagamento: FrequenciaPagamentoEnum,
  horarioMarcado: HorarioMarcado,
}

export interface HorarioMarcado {
  hora: number,
  minuto: number
}
