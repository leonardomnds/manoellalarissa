import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule, TitleStrategy } from '@angular/router';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeBrExtra from '@angular/common/locales/extra/pt';
import localeBr from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsService } from '@shared/services/analytics/analytics.service';

registerLocaleData(localeBr, 'pt', localeBrExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    NgbActiveModal,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: TitleStrategy, useClass: PageTitleService },
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private analytics: AnalyticsService) {
    this.analytics.initialize();
  }

}
