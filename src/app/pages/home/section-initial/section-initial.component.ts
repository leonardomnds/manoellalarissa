import { Component } from '@angular/core';
import { environment } from '@env';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-initial',
  templateUrl: './section-initial.component.html',
  styleUrls: ['./section-initial.component.scss']
})
export class SectionInitialComponent {

  commentIcon = faComments;
  environment = environment;

}
