import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService extends TitleStrategy {

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const newTitle = this.buildTitle(snapshot) ?? '';
    this.title.setTitle(`${newTitle}${newTitle ? ' | ' : ''}Psicóloga Manoella Larissa`.trim());
  }
}
