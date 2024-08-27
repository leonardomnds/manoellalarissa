import { AfterContentInit, Component, ElementRef, inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ficha-cadastral',
  template: `
    <iframe src="https://forms.gle/cpCZE5B9Df5aEWcG7"></iframe>
  `,
  styles: `
    iframe {
      position: fixed;
      top: var(--header-height);
      left: 0;
      width: 100%;
      height: calc(100% - var(--header-height));
      border: none;
    }
  `,
})
export class FichaCadastralComponent {}
