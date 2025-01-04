import{Ca as T,Fb as ue,Ga as Q,Gb as M,Hb as y,Ja as ee,Ka as te,Ma as ne,U as Y,X as m,Y as Z,_ as w,aa as E,ba as l,bb as I,ea as W,fa as R,ga as K,gb as P,hb as ie,ib as re,lc as ae,mb as se,mc as ce,na as O,oc as k,sb as oe,tc as A,ua as X,uc as N,xa as q,ya as J}from"./chunk-LA57CAU5.js";var pe=null;function $(){return pe}function Nt(t){pe??=t}var de=class{};var z=new w(""),me=(()=>{let n=class n{historyGo(e){throw new Error("")}};n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=m({token:n,factory:()=>l(we),providedIn:"platform"});let t=n;return t})();var we=(()=>{let n=class n extends me{constructor(){super(),this._doc=l(z),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return $().getBaseHref(this._doc)}onPopState(e){let i=$().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=$().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}};n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=m({token:n,factory:()=>new n,providedIn:"platform"});let t=n;return t})();function Ce(t,n){if(t.length==0)return n;if(n.length==0)return t;let s=0;return t.endsWith("/")&&s++,n.startsWith("/")&&s++,s==2?t+n.substring(1):s==1?t+n:t+"/"+n}function le(t){let n=t.match(/#|\?|$/),s=n&&n.index||t.length,e=s-(t[s-1]==="/"?1:0);return t.slice(0,e)+t.slice(s)}function C(t){return t&&t[0]!=="?"?"?"+t:t}var V=(()=>{let n=class n{historyGo(e){throw new Error("")}};n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=m({token:n,factory:()=>l(Se),providedIn:"root"});let t=n;return t})(),Ae=new w(""),Se=(()=>{let n=class n extends V{constructor(e,i){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??l(z).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ce(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+C(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let u=this.prepareExternalUrl(r+C(o));this._platformLocation.pushState(e,i,u)}replaceState(e,i,r,o){let u=this.prepareExternalUrl(r+C(o));this._platformLocation.replaceState(e,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}};n.\u0275fac=function(i){return new(i||n)(E(me),E(Ae,8))},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var be=(()=>{let n=class n{constructor(e){this._subject=new q,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=Ie(le(he(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+C(i))}normalize(e){return n.stripTrailingSlash(_e(this._basePath,he(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i,complete:r})}};n.normalizeQueryParams=C,n.joinWithSlash=Ce,n.stripTrailingSlash=le,n.\u0275fac=function(i){return new(i||n)(E(V))},n.\u0275prov=m({token:n,factory:()=>ve(),providedIn:"root"});let t=n;return t})();function ve(){return new be(E(V))}function _e(t,n){if(!t||!n.startsWith(t))return n;let s=n.substring(t.length);return s===""||["/",";","?","#"].includes(s[0])?s:n}function he(t){return t.replace(/\/index.html$/,"")}function Ie(t){if(new RegExp("^(https?:)?//").test(t)){let[,s]=t.split(/\/\/[^\/]+/);return s}return t}var Fe={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},Ee=function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t}(Ee||{});var p={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function S(t,n){let s=M(t),e=s[y.NumberSymbols][n];if(typeof e>"u"){if(n===p.CurrencyDecimal)return s[y.NumberSymbols][p.Decimal];if(n===p.CurrencyGroup)return s[y.NumberSymbols][p.Group]}return e}function Me(t,n){return M(t)[y.NumberFormats][n]}function Be(t){return M(t)[y.Currencies]}function Le(t,n,s="en"){let e=Be(s)[t]||Fe[t]||[],i=e[1];return n==="narrow"&&typeof i=="string"?i:e[0]||t}var Re=2;function Oe(t){let n,s=Fe[t];return s&&(n=s[2]),typeof n=="number"?n:Re}var Te=/^(\d+)?\.((\d+)(-(\d+))?)?$/,fe=22,B=".",b="0",Pe=";",ke=",",x="#",De="\xA4";function Ne(t,n,s,e,i,r,o=!1){let u="",h=!1;if(!isFinite(t))u=S(s,p.Infinity);else{let c=ze(t);o&&(c=Ue(c));let f=n.minInt,a=n.minFrac,D=n.maxFrac;if(r){let F=r.match(Te);if(F===null)throw new Error(`${r} is not a valid digit info`);let G=F[1],L=F[3],H=F[5];G!=null&&(f=U(G)),L!=null&&(a=U(L)),H!=null?D=U(H):L!=null&&a>D&&(D=a)}Ve(c,a,D);let d=c.digits,g=c.integerLen,j=c.exponent,v=[];for(h=d.every(F=>!F);g<f;g++)d.unshift(0);for(;g<0;g++)d.unshift(0);g>0?v=d.splice(g,d.length):(v=d,d=[0]);let _=[];for(d.length>=n.lgSize&&_.unshift(d.splice(-n.lgSize,d.length).join(""));d.length>n.gSize;)_.unshift(d.splice(-n.gSize,d.length).join(""));d.length&&_.unshift(d.join("")),u=_.join(S(s,e)),v.length&&(u+=S(s,i)+v.join("")),j&&(u+=S(s,p.Exponential)+"+"+j)}return t<0&&!h?u=n.negPre+u+n.negSuf:u=n.posPre+u+n.posSuf,u}function $e(t,n,s,e,i){let r=Me(n,Ee.Currency),o=xe(r,S(n,p.MinusSign));return o.minFrac=Oe(e),o.maxFrac=o.minFrac,Ne(t,o,n,p.CurrencyGroup,p.CurrencyDecimal,i).replace(De,s).replace(De,"").trim()}function xe(t,n="-"){let s={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},e=t.split(Pe),i=e[0],r=e[1],o=i.indexOf(B)!==-1?i.split(B):[i.substring(0,i.lastIndexOf(b)+1),i.substring(i.lastIndexOf(b)+1)],u=o[0],h=o[1]||"";s.posPre=u.substring(0,u.indexOf(x));for(let f=0;f<h.length;f++){let a=h.charAt(f);a===b?s.minFrac=s.maxFrac=f+1:a===x?s.maxFrac=f+1:s.posSuf+=a}let c=u.split(ke);if(s.gSize=c[1]?c[1].length:0,s.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,r){let f=i.length-s.posPre.length-s.posSuf.length,a=r.indexOf(x);s.negPre=r.substring(0,a).replace(/'/g,""),s.negSuf=r.slice(a+f).replace(/'/g,"")}else s.negPre=n+s.posPre,s.negSuf=s.posSuf;return s}function Ue(t){if(t.digits[0]===0)return t;let n=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(n===0?t.digits.push(0,0):n===1&&t.digits.push(0),t.integerLen+=2),t}function ze(t){let n=Math.abs(t)+"",s=0,e,i,r,o,u;for((i=n.indexOf(B))>-1&&(n=n.replace(B,"")),(r=n.search(/e/i))>0?(i<0&&(i=r),i+=+n.slice(r+1),n=n.substring(0,r)):i<0&&(i=n.length),r=0;n.charAt(r)===b;r++);if(r===(u=n.length))e=[0],i=1;else{for(u--;n.charAt(u)===b;)u--;for(i-=r,e=[],o=0;r<=u;r++,o++)e[o]=Number(n.charAt(r))}return i>fe&&(e=e.splice(0,fe-1),s=i-1,i=1),{digits:e,exponent:s,integerLen:i}}function Ve(t,n,s){if(n>s)throw new Error(`The minimum number of digits after fraction (${n}) is higher than the maximum (${s}).`);let e=t.digits,i=e.length-t.integerLen,r=Math.min(Math.max(n,i),s),o=r+t.integerLen,u=e[o];if(o>0){e.splice(Math.max(t.integerLen,o));for(let a=o;a<e.length;a++)e[a]=0}else{i=Math.max(0,i),t.integerLen=1,e.length=Math.max(1,o=r+1),e[0]=0;for(let a=1;a<o;a++)e[a]=0}if(u>=5)if(o-1<0){for(let a=0;a>o;a--)e.unshift(0),t.integerLen++;e.unshift(1),t.integerLen++}else e[o-1]++;for(;i<Math.max(0,r);i++)e.push(0);let h=r!==0,c=n+t.integerLen,f=e.reduceRight(function(a,D,d,g){return D=D+a,g[d]=D<10?D:D-10,h&&(g[d]===0&&d>=c?g.pop():h=!1),D>=10?1:0},0);f&&(e.unshift(f),t.integerLen++)}function U(t){let n=parseInt(t);if(isNaN(n))throw new Error("Invalid integer literal when parsing "+t);return n}function $t(t,n,s){return ue(t,n,s)}function xt(t,n){n=encodeURIComponent(n);for(let s of t.split(";")){let e=s.indexOf("="),[i,r]=e==-1?[s,""]:[s.slice(0,e),s.slice(e+1)];if(i.trim()===n)return decodeURIComponent(r)}return null}var Ut=(()=>{let n=class n{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};n.\u0275fac=function(i){return new(i||n)(I(re))},n.\u0275dir=R({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[O]});let t=n;return t})();function je(t,n){return new Y(2100,!1)}var zt=(()=>{let n=class n{constructor(e,i="USD"){this._locale=e,this._defaultCurrencyCode=i}transform(e,i=this._defaultCurrencyCode,r="symbol",o,u){if(!Ge(e))return null;u||=this._locale,typeof r=="boolean"&&(r=r?"symbol":"code");let h=i||this._defaultCurrencyCode;r!=="code"&&(r==="symbol"||r==="symbol-narrow"?h=Le(h,r==="symbol"?"wide":"narrow",u):h=r);try{let c=He(e);return $e(c,u,h,i,o)}catch(c){throw je(n,c.message)}}};n.\u0275fac=function(i){return new(i||n)(I(ae,16),I(ce,16))},n.\u0275pipe=K({name:"currency",type:n,pure:!0,standalone:!0});let t=n;return t})();function Ge(t){return!(t==null||t===""||t!==t)}function He(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new Error(`${t} is not a number`);return t}var Vt=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=W({type:n}),n.\u0275inj=Z({});let t=n;return t})(),Ye="browser",Ze="server";function jt(t){return t===Ye}function We(t){return t===Ze}var ge=class{};var ye=t=>t.src,Ke=new w("",{providedIn:"root",factory:()=>ye});var Xe=new w("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set}),qe=(()=>{let n=class n{constructor(){this.preloadedImages=l(Xe),this.document=l(z)}createPreloadLinkTag(e,i,r,o){if(this.preloadedImages.has(i))return;this.preloadedImages.add(i);let u=e.createElement("link");e.setAttribute(u,"as","image"),e.setAttribute(u,"href",i),e.setAttribute(u,"rel","preload"),e.setAttribute(u,"fetchpriority","high"),o&&e.setAttribute(u,"imageSizes",o),r&&e.setAttribute(u,"imageSrcset",r),e.appendChild(this.document.head,u)}};n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var Je=/^((\s*\d+w\s*(,|$)){1,})$/;var Qe=[1,2],et=640;var tt=1920,nt=1080;var Gt=(()=>{let n=class n{constructor(){this.imageLoader=l(Ke),this.config=it(l(te)),this.renderer=l(P),this.imgElement=l(T).nativeElement,this.injector=l(X),this.isServer=We(l(Q)),this.preloadLinkCreator=l(qe),this.lcpObserver=null,this._renderedSrc=null,this.priority=!1,this.disableOptimizedSrcset=!1,this.fill=!1}ngOnInit(){ie("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes&&this.setHostAttribute("sizes",this.sizes),this.isServer&&this.priority&&this.preloadLinkCreator.createPreloadLinkTag(this.renderer,this.getRewrittenSrc(),e,this.sizes)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let i=this._renderedSrc;this.updateSrcAndSrcset(!0);let r=this._renderedSrc;this.lcpObserver!==null&&i&&r&&i!==r&&this.injector.get(J).runOutsideAngular(()=>{this.lcpObserver?.updateImage(i,r)})}}callImageLoader(e){let i=e;return this.loaderParams&&(i.loaderParams=this.loaderParams),this.imageLoader(i)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=Je.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let o=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:o})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,i=e;return this.sizes?.trim()==="100vw"&&(i=e.filter(o=>o>=et)),i.map(o=>`${this.callImageLoader({src:this.ngSrc,width:o})} ${o}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let i=this.getRewrittenSrc();this.setHostAttribute("src",i);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return Qe.map(i=>`${this.callImageLoader({src:this.ngSrc,width:this.width*i})} ${i}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>tt||this.height>nt),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==ye&&!e}generatePlaceholder(e){let{placeholderResolution:i}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:i,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let i=()=>{let u=this.injector.get(k);r(),o(),this.placeholder=!1,u.markForCheck()},r=this.renderer.listen(e,"load",i),o=this.renderer.listen(e,"error",i)}ngOnDestroy(){}setHostAttribute(e,i){this.renderer.setAttribute(this.imgElement,e,i)}};n.\u0275fac=function(i){return new(i||n)},n.\u0275dir=R({type:n,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(i,r){i&2&&oe("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",rt],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",N],height:[2,"height","height",N],loading:"loading",priority:[2,"priority","priority",A],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",A],fill:[2,"fill","fill",A],placeholder:[2,"placeholder","placeholder",st],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},standalone:!0,features:[se,O]});let t=n;return t})();function it(t){let n={};return t.breakpoints&&(n.breakpoints=t.breakpoints.sort((s,e)=>s-e)),Object.assign({},ee,t,n)}function rt(t){return typeof t=="string"?t:ne(t)}function st(t){return typeof t=="string"&&t!=="true"&&t!=="false"&&t!==""?t:A(t)}export{$ as a,Nt as b,de as c,z as d,V as e,be as f,$t as g,xt as h,Ut as i,zt as j,Vt as k,Ye as l,jt as m,We as n,ge as o,Gt as p};
