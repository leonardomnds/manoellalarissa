import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { HeaderComponent } from './header/header.component';
import { NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    ContentRoutingModule,
    FontAwesomeModule,
    NgbOffcanvasModule
  ]
})
export class ContentModule { }
