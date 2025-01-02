import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  importProvidersFrom,
  inject,
  LOCALE_ID,
  PLATFORM_ID
} from '@angular/core';
import { provideRouter, TitleStrategy, withRouterConfig } from '@angular/router';

import { appRoutes, appRoutesConfig } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { PageTitleService } from "@shared/services/page-title/page-title.service";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { SiteURL } from "@shared/injection-tokens";
import { isPlatformServer } from "@angular/common";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(appRoutes, withRouterConfig(appRoutesConfig)),
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: TitleStrategy, useClass: PageTitleService },
    {
      provide: SiteURL,
      useFactory: () => {
        const platformId = inject(PLATFORM_ID);
        return isPlatformServer(platformId) ? '' : window.location.origin;
      },
    }
  ]
}
