import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './content.component.html',
  imports: [HeaderComponent, RouterOutlet]
})
export class ContentComponent {}
