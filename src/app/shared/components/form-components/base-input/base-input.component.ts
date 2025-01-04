import { Component, computed, effect, inject, input, model, OnInit, output, signal } from '@angular/core';
import {ControlValueAccessor, NgControl, AbstractControl, FormControl} from '@angular/forms';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FormControlService} from "@shared/services/form-control/form-control.service";
import {generateValidHtmlId} from '@shared/components/form-components/form-components.utils';

@Component({ template: '', standalone: true, })
export class BaseInputComponent implements OnInit, ControlValueAccessor {
  label = input('');
  placeholder = input('');
  infoText = input('');
  infoIcon = input(faInfoCircle);
  readOnly = input(false);
  autoFocus = input(false);
  required = input(false);
  onEnterPressed = output();

  private readonly _id = signal("");
  private readonly _disabled = signal(false);
  private readonly _hasRequiredValidator = signal(false);
  private readonly _minLength = signal<number | null>(null);
  private readonly _maxLength = signal<number | null>(null);

  value = model('');
  disabled = this._disabled.asReadonly();
  minLength = this._minLength.asReadonly();
  maxLength = this._maxLength.asReadonly();
  id = computed(() => generateValidHtmlId(this._id() || this.label()));
  isRequired = computed(() => this.required() || this._hasRequiredValidator());
  formControl?: FormControl;

  public controlDir = inject(NgControl, { self: true, optional: true });
  private readonly formControlService = inject(FormControlService);

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    effect(() => {
      if (!this.onChange) { return; }
      this.onChange(this.value());
    });

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
    this.value.set(value);
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

  onBlur(): void {
    this.onTouched();
  }

  private readValidators(control: AbstractControl | null): void {
    if (!control?.validator) {
      return;
    }

    this._hasRequiredValidator.set(this.formControlService.hasRequiredValidator(control));
    this._minLength.set(this.formControlService.getMinLength(control));
    this._maxLength.set(this.formControlService.getMaxLength(control));
  }
}
