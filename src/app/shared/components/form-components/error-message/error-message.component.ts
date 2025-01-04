import { Component, inject, input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ValidationService } from "@shared/services/validation/validation.service";

@Component({
  standalone: true,
  selector: 'app-error-message',
  template: '{{errorMessage}} &nbsp;',
  host: {
    class: 'd-block invalid-feedback'
  },
})
export class ErrorMessageComponent {

  private _validationService = inject(ValidationService);

  control = input.required<FormControl>();

  get errorMessage(): string {
    const errors = this.control().errors;

    if (!errors) return '';

    for (const propertyName in errors) {
      if (!errors.hasOwnProperty(propertyName)) { continue; }
      return this._validationService.getErrorMessage(propertyName, errors[propertyName]);
    }

    return '';
  }

}
