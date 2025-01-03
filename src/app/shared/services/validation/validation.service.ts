import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  getErrorMessage(validatorName: string, validatorValue?: any): string {
    const config = {
      required: 'Preencha este campo.',
      email: 'E-mail inválido.',
      min: `Deve ser no mínimo ${validatorValue.min}.`,
      max: `Deve ser no máximo ${validatorValue.max}.`,
      minlength: `Tamanho mínimo de ${validatorValue.requiredLength} caracteres.`,
      maxlength: `Tamanho máximo de ${validatorValue.requiredLength} caracteres.`,
      date: `Deve ser uma data válida.`,
      minDate: `Deve ser a partir de ${validatorValue}.`,
      maxDate: `Deve ser até ${validatorValue}.`,
      custom: `${validatorValue}`,
    };

    type ObjectKey = keyof typeof config;
    console.log({
      validatorName,
      validatorValue,
    })

    return config[validatorName as ObjectKey] || 'O valor informado é inválido';
  }
}
