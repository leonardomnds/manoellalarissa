import { Injectable } from '@angular/core';
import { createMask, InputmaskOptions } from '@ngneat/input-mask';
import Options = Inputmask.Options;
import { HorarioMarcado } from "@shared/services/aviso/dto";

@Injectable({
  providedIn: 'root'
})
export class InputMaskService {

  numericMask(options: Partial<InputmaskOptions<number>> = {}) {
    let maxNumber: string | undefined;

    if (options.max === undefined) {
      options.digits = options.digits !== undefined ? +options.digits : 0;
      // Definir o valor máximo automaticamente quando não informado
      const integerDigits = 10 - options.digits;
      const maxInteger = Math.pow(10, integerDigits) - 1;
      const decimalString = `${Math.pow(10, options.digits) - 1}`.padStart(options.digits, '0');
      maxNumber = `${maxInteger},${decimalString}`;
    }

    return createMask({
      alias: 'numeric',
      radixPoint: ',',
      groupSeparator: '.',
      digits: 0,
      digitsOptional: false,
      max: maxNumber,
      allowMinus: options.allowMinus ?? (typeof options.min === 'number' && options.min < 0),
      placeholder: '0',
      autoUnmask: false,
      rightAlign: false,
      unmaskAsNumber: true,
      showMaskOnHover: false,
      nullable: false,
      inputType: 'number',
      inputmode: 'numeric',
      clearMaskOnLostFocus: false,
      positionCaretOnClick: 'none',
      onBeforeMask: this.numberMaskFix,
      parser: (value: string) => {
        return +value.replace(options.suffix ?? '', '').replace(/\./g, '').replace(',', '.')
      },
      ...options
    });
  }

  currencyMask(options: Partial<InputmaskOptions<number>> = {}) {
    return createMask({
      alias: "currency",
      inputType: "number",
      groupSeparator: ".",
      radixPoint: ",",
      positionCaretOnClick: 'none',
      min: 0,
      max: 99999999.99,
      digitsOptional: false,
      clearMaskOnLostFocus: false,
      numericInput: false,
      autoUnmask: true,
      unmaskAsNumber: true,
      rightAlign: false,
      onBeforeMask: this.numberMaskFix,
      ...options
    });
  }

  horarioMask(): InputmaskOptions<HorarioMarcado | null> {
    return createMask({
      alias: 'datetime',
      inputType: 'number',
      inputFormat: 'HH:MM',
      inputmode: 'numeric',
      showMaskOnHover: false,
      parser: (value: string) => {
        const parts = `${value}`.split(':').filter((v) => !isNaN(v as any));

        console.log(value, parts, {
          hora: parseInt(parts[0], 10),
          minuto: parseInt(parts[1], 10),
        })
        if (parts.length !== 2) { return null; }

        return {
          hora: parseInt(parts[0], 10),
          minuto: parseInt(parts[1], 10),
        }
      },
    });
  }

  private numberMaskFix(initialValue: any, _: Options): string {
    const el = (this as any)['el'];
    if (el.isFixedApplied) {
      if (typeof initialValue === 'string') {
        return initialValue.replace('.', '').replace(',', '.');
      } else {
        return initialValue.toString();
      }
    }
    el.isFixedApplied = true;

    const inputElement = el as HTMLInputElement;
    const getValueFn = (): string => (inputElement.inputmask as any)['_valueGet']() as string;

    inputElement.addEventListener("keydown", function(event) {
      if (event.key !== "Backspace" && event.key !== "Delete") { return; }
      let caretPos = inputElement.selectionStart;
      if (caretPos == null) return;
      const valorInput = getValueFn().split('').toReversed();
      const indexRadix = valorInput.indexOf(',');
      if (indexRadix === -1) return;
      if (caretPos < indexRadix) return;
      inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    });

    inputElement.addEventListener("mousedown", function(_) {
      if (document.activeElement === inputElement) { return; }
      const commaIndex = getValueFn().split('').toReversed().join('').indexOf(",");
      if (commaIndex === -1) { return; }
      setTimeout(() => {
        inputElement.setSelectionRange(commaIndex, commaIndex);
      }, 80);
    });

    return initialValue;
  }
}
