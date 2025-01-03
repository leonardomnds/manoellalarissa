import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule
} from "@angular/forms";
import { ErrorMessageComponent } from "@components/form-components/error-message/error-message.component";
import { LabelComponent } from "@components/form-components/label/label.component";
import { generateValidHtmlId } from "@components/form-components/form-components.utils";
import { FormControlService } from "@shared/services/form-control/form-control.service";

@Component({
  standalone: true,
  selector: 'app-select',
  templateUrl: './select.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LabelComponent,
    ErrorMessageComponent,
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  label = input('');
  placeholder = input('Selecione...');
  required = input(false);
  readOnly = input(false);
  options = input<SelectOption[]>([]);

  private readonly _id = signal('');
  private readonly _value = signal<any>(null);
  private readonly _disabled = signal(false);
  private readonly _errorMessage = signal('');
  private readonly _hasRequiredValidator = signal(false);

  value = this._value.asReadonly();
  disabled = this._disabled.asReadonly();
  errorMessage = this._errorMessage.asReadonly();
  id = computed(() => generateValidHtmlId(this._id() || this.label()));
  isRequired = computed(() => this._hasRequiredValidator() || this.required());
  isReadOnly = computed(() => this._disabled() || this.readOnly());

  formControl?: FormControl;
  controlDir = inject(NgControl, { self: true, optional: true });
  private readonly formControlService = inject(FormControlService);

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    if (!this.controlDir) { return; }
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    if (!this.controlDir) { return; }

    const control = this.controlDir.control;
    this.readValidators(control);
    this.formControl = control as FormControl;
  }

  writeValue(value: any): void {
    this._value.set(value);
    if (!this._id()) {
      this._id.set(this.controlDir?.name as string);
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled.set(isDisabled);
  }

  onSelect(value: any): void {
    this._value.set(value);
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  private readValidators(control: AbstractControl | null): void {
    if (!control?.validator) {
      return;
    }

    this._hasRequiredValidator.set(this.formControlService.hasRequiredValidator(control));
  }
}

export interface SelectOption {
  value: any,
  label: string,
}
