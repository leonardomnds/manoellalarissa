import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { environment } from '@env';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-separator-shape',
  templateUrl: './separator-shape.component.html',
  styleUrl: './separator-shape.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SeparatorShapeComponent {

  @Input()
  public isEscuro!: boolean;

  @HostBinding('class') elementClass = 'site-separator no-clarity';

  environment = environment;

  get color() {
    return this.isEscuro ? '#C97885' : '#FFB9C4';
  }

}
