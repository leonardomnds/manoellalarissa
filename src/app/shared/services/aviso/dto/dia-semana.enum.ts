import { SelectOption } from "@components/form-components/select/select.component";

export enum DiaSemanaEnum {
  Domingo = 1,
  Segunda = 2,
  Terca = 3,
  Quarta = 4,
  Quinta = 5,
  Sexta = 6,
  Sabado = 7
}

export const diaSemanaDescricao: Record<DiaSemanaEnum, string> = {
  [DiaSemanaEnum.Domingo]: 'Domingo',
  [DiaSemanaEnum.Segunda]: 'Segunda-feira',
  [DiaSemanaEnum.Terca]: 'Terça-feira',
  [DiaSemanaEnum.Quarta]: 'Quarta-feira',
  [DiaSemanaEnum.Quinta]: 'Quinta-feira',
  [DiaSemanaEnum.Sexta]: 'Sexta-feira',
  [DiaSemanaEnum.Sabado]: 'Sábado',
}

export const diaSemanaOptions = Object
  .entries(diaSemanaDescricao)
  .map<SelectOption>(([key, label]) => ({
    label,
    value: Number(key) as DiaSemanaEnum,
  }));
