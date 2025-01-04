import { SelectOption } from "@components/form-components/select/select.component";

export enum FrequenciaPagamentoEnum {
  NoDia = 1,
  Semanal = 2,
  Quinzenal = 3,
  Mensal = 4,
}

export const frequenciaPagamentoDescricao: Record<FrequenciaPagamentoEnum, string> = {
  [FrequenciaPagamentoEnum.NoDia]: 'No dia da sessão',
  [FrequenciaPagamentoEnum.Semanal]: 'Semanalmente',
  [FrequenciaPagamentoEnum.Quinzenal]: 'A cada quinze dias',
  [FrequenciaPagamentoEnum.Mensal]: 'Mensalmente',
}

export const frequenciaPagamentoOptions = Object
  .entries(frequenciaPagamentoDescricao)
  .map<SelectOption>(([key, label]) => ({
    label,
    value: Number(key) as FrequenciaPagamentoEnum,
  }));
