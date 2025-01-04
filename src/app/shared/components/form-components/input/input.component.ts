import { Component, input } from '@angular/core';
import { BaseInputComponent } from "@components/form-components/base-input/base-input.component";
import { LabelComponent } from "@components/form-components/label/label.component";
import { ErrorMessageComponent } from "@components/form-components/error-message/error-message.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputMaskModule, InputmaskOptions } from "@ngneat/input-mask";

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  imports: [
    LabelComponent,
    ErrorMessageComponent,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
})
export class InputComponent extends BaseInputComponent {
  inputType = input<'text' | 'email' | 'tel'>('text');
  mask = input<InputmaskOptions<any> | null>(null);
}
