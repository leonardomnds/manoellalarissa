import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-termos',
  template: '<router-outlet/>',
  imports: [
    RouterOutlet
  ]
})
export class TermosComponent {}
