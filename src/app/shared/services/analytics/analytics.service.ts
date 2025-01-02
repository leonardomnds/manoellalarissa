import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, isDevMode, PLATFORM_ID } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private readonly deveExecutar = isPlatformBrowser(inject(PLATFORM_ID)) && !isDevMode();

  initialize(): void {
    if (!this.deveExecutar) { return; }
    this.initializeClarity();
    this.initializeGoogleAds();
  }

  trackGoogleAdsConversion(): void {
    if (!this.deveExecutar || !environment.googleAdsKey) { return; }
    if (typeof (window as any).gtag !== 'function') { return; }

    (window as any).gtag('event', 'conversion', {'send_to': `${environment.googleAdsKey}/GniOCK_5wroZEP2w7fA9` });
  }

  private initializeClarity(): void {
    if (!this.deveExecutar || !environment.clarityKey) { return; }

    this.addPreconnectLink('https://c.clarity.ms');
    this.addPreconnectLink('https://www.clarity.ms');

    const script = document.createElement('script');
    script.innerHTML = `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${environment.clarityKey}");`;
    document.head.appendChild(script);
  }

  private initializeGoogleAds(): void {
    if (!this.deveExecutar || !environment.googleAdsKey) { return; }

    const script = document.createElement('script');
    script.async = true;
    script.innerHTML = `(function(w,d,k){
      var t=d.createElement("script");t.async=true;
      t.src="https://www.googletagmanager.com/gtag/js?id="+k;
      d.head.appendChild(t);t.onload = function(){
        w.dataLayer=w.dataLayer||[];w.gtag = function gtag(){w.dataLayer.push(arguments);}
        w.gtag('js', new Date());w.gtag('config', k);
      };
    })(window, document, "${environment.googleAdsKey}");`;
    document.head.appendChild(script);
  }

  private addPreconnectLink(href: string): void {
    const preconnect = document.createElement('link');
    preconnect.href = href;
    preconnect.rel = 'preconnect';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);
  }

}
