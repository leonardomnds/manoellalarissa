import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { environment } from '@env';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-separator-shape',
  templateUrl: './separator-shape.component.html',
  styleUrl: './separator-shape.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SeparatorShapeComponent {

  @Input()
  public isEscuro!: boolean;

  @HostBinding('class') elementClass = 'site-separator';

  whatsappIcon = faWhatsapp;
  environment = environment;

  get color() {
    return this.isEscuro ? '#C97885' : '#FFB9C4';
  }

}
