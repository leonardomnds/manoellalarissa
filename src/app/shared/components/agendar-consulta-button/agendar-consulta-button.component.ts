import { Component, Input } from '@angular/core';
import { environment } from '@env';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-agendar-consulta-button',
  templateUrl: './agendar-consulta-button.component.html',
  styleUrl: './agendar-consulta-button.component.scss'
})
export class AgendarConsultaButtonComponent {

  @Input()
  public isEscuro!: boolean;

  whatsappIcon = faWhatsapp;
  environment = environment;

  get variant() {
    return this.isEscuro ? 'btn-rosa-escuro' : 'btn-rosa';
  }

}
