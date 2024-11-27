import{R as $,T as p,U as x,Va as v,W as B,Y as F,Z as y,Zb as Z,_b as W,aa as U,ab as H,ba as z,ca as V,ja as j,ta as G,vb as Y,wb as _,xb as E}from"./chunk-7YOIOW7K.js";var te=null;function L(){return te}function St(e){te??=e}var K=class{};var ne=new B(""),ie=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=p({token:t,factory:()=>y(de),providedIn:"platform"});let e=t;return e})();var de=(()=>{let t=class t extends ie{constructor(){super(),this._doc=y(ne),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return L().getBaseHref(this._doc)}onPopState(n){let i=L().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=L().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=p({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function re(e,t){if(e.length==0)return t;if(t.length==0)return e;let s=0;return e.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?e+t.substring(1):s==1?e+t:e+"/"+t}function X(e){let t=e.match(/#|\?|$/),s=t&&t.index||e.length,n=s-(e[s-1]==="/"?1:0);return e.slice(0,n)+e.slice(s)}function m(e){return e&&e[0]!=="?"?"?"+e:e}var T=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=p({token:t,factory:()=>y(he),providedIn:"root"});let e=t;return e})(),le=new B(""),he=(()=>{let t=class t extends T{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??y(ne).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return re(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+m(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,u){let o=this.prepareExternalUrl(r+m(u));this._platformLocation.pushState(n,i,o)}replaceState(n,i,r,u){let o=this.prepareExternalUrl(r+m(u));this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(F(ie),F(le,8))},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var fe=(()=>{let t=class t{constructor(n){this._subject=new G,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=pe(X(q(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+m(i))}normalize(n){return t.stripTrailingSlash(ge(this._basePath,q(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+m(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+m(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};t.normalizeQueryParams=m,t.joinWithSlash=re,t.stripTrailingSlash=X,t.\u0275fac=function(i){return new(i||t)(F(T))},t.\u0275prov=p({token:t,factory:()=>De(),providedIn:"root"});let e=t;return e})();function De(){return new fe(F(T))}function ge(e,t){if(!e||!t.startsWith(e))return t;let s=t.substring(e.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function q(e){return e.replace(/\/index.html$/,"")}function pe(e){if(new RegExp("^(https?:)?//").test(e)){let[,s]=e.split(/\/\/[^\/]+/);return s}return e}var se={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},oe=function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e}(oe||{});var g={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function w(e,t){let s=_(e),n=s[E.NumberSymbols][t];if(typeof n>"u"){if(t===g.CurrencyDecimal)return s[E.NumberSymbols][g.Decimal];if(t===g.CurrencyGroup)return s[E.NumberSymbols][g.Group]}return n}function me(e,t){return _(e)[E.NumberFormats][t]}function Ce(e){return _(e)[E.Currencies]}function Fe(e,t,s="en"){let n=Ce(s)[e]||se[e]||[],i=n[1];return t==="narrow"&&typeof i=="string"?i:n[0]||e}var Ee=2;function ye(e){let t,s=se[e];return s&&(t=s[2]),typeof t=="number"?t:Ee}var we=/^(\d+)?\.((\d+)(-(\d+))?)?$/,J=22,I=".",A="0",Ae=";",Se=",",R="#",Q="\xA4";function be(e,t,s,n,i,r,u=!1){let o="",l=!1;if(!isFinite(e))o=w(s,g.Infinity);else{let c=Me(e);u&&(c=Ie(c));let h=t.minInt,a=t.minFrac,f=t.maxFrac;if(r){let C=r.match(we);if(C===null)throw new Error(`${r} is not a valid digit info`);let k=C[1],M=C[3],N=C[5];k!=null&&(h=O(k)),M!=null&&(a=O(M)),N!=null?f=O(N):M!=null&&a>f&&(f=a)}Be(c,a,f);let d=c.digits,D=c.integerLen,P=c.exponent,S=[];for(l=d.every(C=>!C);D<h;D++)d.unshift(0);for(;D<0;D++)d.unshift(0);D>0?S=d.splice(D,d.length):(S=d,d=[0]);let b=[];for(d.length>=t.lgSize&&b.unshift(d.splice(-t.lgSize,d.length).join(""));d.length>t.gSize;)b.unshift(d.splice(-t.gSize,d.length).join(""));d.length&&b.unshift(d.join("")),o=b.join(w(s,n)),S.length&&(o+=w(s,i)+S.join("")),P&&(o+=w(s,g.Exponential)+"+"+P)}return e<0&&!l?o=t.negPre+o+t.negSuf:o=t.posPre+o+t.posSuf,o}function ve(e,t,s,n,i){let r=me(t,oe.Currency),u=_e(r,w(t,g.MinusSign));return u.minFrac=ye(n),u.maxFrac=u.minFrac,be(e,u,t,g.CurrencyGroup,g.CurrencyDecimal,i).replace(Q,s).replace(Q,"").trim()}function _e(e,t="-"){let s={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=e.split(Ae),i=n[0],r=n[1],u=i.indexOf(I)!==-1?i.split(I):[i.substring(0,i.lastIndexOf(A)+1),i.substring(i.lastIndexOf(A)+1)],o=u[0],l=u[1]||"";s.posPre=o.substring(0,o.indexOf(R));for(let h=0;h<l.length;h++){let a=l.charAt(h);a===A?s.minFrac=s.maxFrac=h+1:a===R?s.maxFrac=h+1:s.posSuf+=a}let c=o.split(Se);if(s.gSize=c[1]?c[1].length:0,s.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,r){let h=i.length-s.posPre.length-s.posSuf.length,a=r.indexOf(R);s.negPre=r.substring(0,a).replace(/'/g,""),s.negSuf=r.slice(a+h).replace(/'/g,"")}else s.negPre=t+s.posPre,s.negSuf=s.posSuf;return s}function Ie(e){if(e.digits[0]===0)return e;let t=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(t===0?e.digits.push(0,0):t===1&&e.digits.push(0),e.integerLen+=2),e}function Me(e){let t=Math.abs(e)+"",s=0,n,i,r,u,o;for((i=t.indexOf(I))>-1&&(t=t.replace(I,"")),(r=t.search(/e/i))>0?(i<0&&(i=r),i+=+t.slice(r+1),t=t.substring(0,r)):i<0&&(i=t.length),r=0;t.charAt(r)===A;r++);if(r===(o=t.length))n=[0],i=1;else{for(o--;t.charAt(o)===A;)o--;for(i-=r,n=[],u=0;r<=o;r++,u++)n[u]=Number(t.charAt(r))}return i>J&&(n=n.splice(0,J-1),s=i-1,i=1),{digits:n,exponent:s,integerLen:i}}function Be(e,t,s){if(t>s)throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${s}).`);let n=e.digits,i=n.length-e.integerLen,r=Math.min(Math.max(t,i),s),u=r+e.integerLen,o=n[u];if(u>0){n.splice(Math.max(e.integerLen,u));for(let a=u;a<n.length;a++)n[a]=0}else{i=Math.max(0,i),e.integerLen=1,n.length=Math.max(1,u=r+1),n[0]=0;for(let a=1;a<u;a++)n[a]=0}if(o>=5)if(u-1<0){for(let a=0;a>u;a--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[u-1]++;for(;i<Math.max(0,r);i++)n.push(0);let l=r!==0,c=t+e.integerLen,h=n.reduceRight(function(a,f,d,D){return f=f+a,D[d]=f<10?f:f-10,l&&(D[d]===0&&d>=c?D.pop():l=!1),f>=10?1:0},0);h&&(n.unshift(h),e.integerLen++)}function O(e){let t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}function bt(e,t,s){return Y(e,t,s)}function vt(e,t){t=encodeURIComponent(t);for(let s of e.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===t)return decodeURIComponent(r)}return null}var _t=(()=>{let t=class t{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(n,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};t.\u0275fac=function(i){return new(i||t)(v(H))},t.\u0275dir=z({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[j]});let e=t;return e})();function Le(e,t){return new $(2100,!1)}var It=(()=>{let t=class t{constructor(n,i="USD"){this._locale=n,this._defaultCurrencyCode=i}transform(n,i=this._defaultCurrencyCode,r="symbol",u,o){if(!Re(n))return null;o||=this._locale,typeof r=="boolean"&&(r=r?"symbol":"code");let l=i||this._defaultCurrencyCode;r!=="code"&&(r==="symbol"||r==="symbol-narrow"?l=Fe(l,r==="symbol"?"wide":"narrow",o):l=r);try{let c=Oe(n);return ve(c,o,l,i,u)}catch(c){throw Le(t,c.message)}}};t.\u0275fac=function(i){return new(i||t)(v(Z,16),v(W,16))},t.\u0275pipe=V({name:"currency",type:t,pure:!0,standalone:!0});let e=t;return e})();function Re(e){return!(e==null||e===""||e!==e)}function Oe(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new Error(`${e} is not a number`);return e}var Mt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=U({type:t}),t.\u0275inj=x({});let e=t;return e})(),Te="browser",Pe="server";function Bt(e){return e===Te}function Lt(e){return e===Pe}var ee=class{};export{L as a,St as b,K as c,ne as d,T as e,fe as f,bt as g,vt as h,_t as i,It as j,Mt as k,Te as l,Bt as m,Lt as n,ee as o};