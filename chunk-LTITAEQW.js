import{U as a,Vb as c,_ as n,rc as s,za as o}from"./chunk-MOSOV5P2.js";var i={production:!0,crp:"08/35519",whatsappUrl:"https://wa.me/+5545988095864",instagramUrl:"https://www.instagram.com/psi.manoella",googleMapsUrl:"https://maps.app.goo.gl/tPngVoJxaC3V9f4h6",clarityKey:"mpu5lu4426",googleAdsKey:"AW-16611235965"};var y=(()=>{let t=class t{constructor(){this.deveExecutar=s(n(o))&&!c()}initialize(){this.deveExecutar&&(this.initializeClarity(),this.initializeGoogleAds())}trackGoogleAdsConversion(){!this.deveExecutar||!i.googleAdsKey||typeof window.gtag=="function"&&window.gtag("event","conversion",{send_to:`${i.googleAdsKey}/GniOCK_5wroZEP2w7fA9`})}initializeClarity(){if(!this.deveExecutar||!i.clarityKey)return;let e=document.createElement("script");e.innerHTML=`(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${i.clarityKey}");`,document.head.appendChild(e)}initializeGoogleAds(){if(!this.deveExecutar||!i.googleAdsKey)return;let e=document.createElement("script");e.async=!0,e.innerHTML=`(function(w,d,k){
      var t=d.createElement("script");t.async=true;
      t.src="https://www.googletagmanager.com/gtag/js?id="+k;
      d.head.appendChild(t);t.onload = function(){
        w.dataLayer=w.dataLayer||[];w.gtag = function gtag(){w.dataLayer.push(arguments);}
        w.gtag('js', new Date());w.gtag('config', k);
      };
    })(window, document, "${i.googleAdsKey}");`,document.head.appendChild(e)}};t.\u0275fac=function(d){return new(d||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{i as a,y as b};
