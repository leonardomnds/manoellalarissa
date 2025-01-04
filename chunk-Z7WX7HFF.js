import{a as n}from"./chunk-BM2EJTU2.js";import{m as d}from"./chunk-MFZKIDDY.js";import{Ga as c,X as a,ba as o,oc as s}from"./chunk-SJYSEXRZ.js";var w=(()=>{let e=class e{constructor(){this.deveExecutar=d(o(c))&&!s()}initialize(){this.deveExecutar&&(this.initializeClarity(),this.initializeGoogleAds())}trackGoogleAdsConversion(){!this.deveExecutar||!n.googleAdsKey||typeof window.gtag=="function"&&window.gtag("event","conversion",{send_to:`${n.googleAdsKey}/GniOCK_5wroZEP2w7fA9`})}initializeClarity(){if(!this.deveExecutar||!n.clarityKey)return;this.addPreconnectLink("https://c.clarity.ms"),this.addPreconnectLink("https://www.clarity.ms");let t=document.createElement("script");t.innerHTML=`(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${n.clarityKey}");`,document.head.appendChild(t)}initializeGoogleAds(){if(!this.deveExecutar||!n.googleAdsKey)return;let t=document.createElement("script");t.async=!0,t.innerHTML=`(function(w,d,k){
      var t=d.createElement("script");t.async=true;
      t.src="https://www.googletagmanager.com/gtag/js?id="+k;
      d.head.appendChild(t);t.onload = function(){
        w.dataLayer=w.dataLayer||[];w.gtag = function gtag(){w.dataLayer.push(arguments);}
        w.gtag('js', new Date());w.gtag('config', k);
      };
    })(window, document, "${n.googleAdsKey}");`,document.head.appendChild(t)}addPreconnectLink(t){let i=document.createElement("link");i.href=t,i.rel="preconnect",i.crossOrigin="anonymous",document.head.appendChild(i)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();export{w as a};
