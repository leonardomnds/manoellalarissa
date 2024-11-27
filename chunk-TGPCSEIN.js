import{m as d}from"./chunk-HF7JXWS6.js";import{Aa as c,T as a,Z as o,bc as s}from"./chunk-XWGZEMHA.js";var n={production:!0,crp:"08/35519",whatsappUrl:"https://wa.me/+5545988095864",instagramUrl:"https://www.instagram.com/psi.manoella",googleMapsUrl:"https://maps.app.goo.gl/tPngVoJxaC3V9f4h6",clarityKey:"mpu5lu4426",googleAdsKey:"AW-16611235965"};var h=(()=>{let e=class e{constructor(){this.deveExecutar=d(o(c))&&!s()}initialize(){this.deveExecutar&&(this.initializeClarity(),this.initializeGoogleAds())}trackGoogleAdsConversion(){!this.deveExecutar||!n.googleAdsKey||typeof window.gtag=="function"&&window.gtag("event","conversion",{send_to:`${n.googleAdsKey}/GniOCK_5wroZEP2w7fA9`})}initializeClarity(){if(!this.deveExecutar||!n.clarityKey)return;this.addPreconnectLink("https://c.clarity.ms"),this.addPreconnectLink("https://www.clarity.ms");let t=document.createElement("script");t.innerHTML=`(function(c,l,a,r,i,t,y){
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
    })(window, document, "${n.googleAdsKey}");`,document.head.appendChild(t)}addPreconnectLink(t){let r=document.createElement("link");r.href=t,r.rel="preconnect",r.crossOrigin="anonymous",document.head.appendChild(r)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{n as a,h as b};
