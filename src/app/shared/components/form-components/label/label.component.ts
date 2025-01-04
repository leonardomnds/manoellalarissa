import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-label',
  template: `
    <label
      class="form-label"
      [attr.for]="for()"
      [class.required]="isRequired()">
      {{ label() }}
    </label>
  `,
  host: {
    class: 'd-block',
  },
})
export class LabelComponent {

  label = input.required<string>();
  for = input<string>('');
  isRequired = input(false);

}
