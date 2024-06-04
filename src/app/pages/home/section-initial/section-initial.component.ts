import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-section-initial',
  templateUrl: './section-initial.component.html',
  styleUrls: ['./section-initial.component.scss']
})
export class SectionInitialComponent {

  environment = environment;

}
