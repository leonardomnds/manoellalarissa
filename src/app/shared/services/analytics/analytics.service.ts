import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, isDevMode, PLATFORM_ID } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  initialize(): void {
    if (!this.deveExecutar) { return; }
    this.initializeClarity();
  }

  private initializeClarity(): void {
    if (!this.isClarityAvailable) { return; }

    const script = document.createElement('script');
    script.innerHTML = `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${environment.clarityKey}");`;
    document.head.appendChild(script);
  }

  private get deveExecutar(): boolean {
    return isPlatformBrowser(inject(PLATFORM_ID)) && !isDevMode();
  }

  private get isClarityAvailable(): boolean {
    return Boolean(environment.clarityKey);
  }
}
