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
    this.initializeGoogleAds();
  }

  private initializeClarity(): void {
    if (!environment.clarityKey) { return; }

    const script = document.createElement('script');
    script.innerHTML = `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${environment.clarityKey}");`;
    document.head.appendChild(script);
  }

  private initializeGoogleAds(): void {
    if (!environment.googleAdsKey) { return; }

    const script = document.createElement('script');
    script.async = true;
    script.innerHTML = `(function(w,d,k){
      var t=d.createElement("script");t.async=true;
      t.src="https://www.googletagmanager.com/gtag/js?id="+k;
      d.head.appendChild(t);t.onload = function(){
        w.dataLayer=w.dataLayer||[];function gtag(){w.dataLayer.push(arguments);}
        gtag('js', new Date());gtag('config', k);
      };
    })(window, document, "${environment.googleAdsKey}");`;
    document.head.appendChild(script);
  }

  private get deveExecutar(): boolean {
    return isPlatformBrowser(inject(PLATFORM_ID)) && !isDevMode();
  }
}
