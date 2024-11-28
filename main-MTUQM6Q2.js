import{a as T,b as V}from"./chunk-TGPCSEIN.js";import{a as k}from"./chunk-PQKPBZSB.js";import{b as U,c as _}from"./chunk-YAMJ3E4Q.js";import{c as $,d as p,g as B,h as q}from"./chunk-O5GJV65X.js";import{a as N,b as x,c as j,d as O,e as H,f as L,h as z}from"./chunk-L2KV7KJI.js";import{d as F,g as I,n as E}from"./chunk-HF7JXWS6.js";import{$ as h,$a as R,$b as w,Aa as v,Ba as b,Mb as P,R as u,T as d,Y as c,Ya as C,Z as a,_a as M,ac as D,bb as A,da as f,ea as g,tb as S,ua as y}from"./chunk-XWGZEMHA.js";var Y=(()=>{let e=class e{constructor(){this.tooltipConfig=a(_),this.dropdownConfig=a(U),this.analyticsService=a(V),this.dropdownConfig.container="body",this.tooltipConfig.container="body",this.tooltipConfig.placement=["bottom","top","bottom-right","bottom-left","top-right","top-left"]}ngAfterViewInit(){this.analyticsService.initialize()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[P],decls:1,vars:0,template:function(r,n){r&1&&S(0,"router-outlet")},dependencies:[$],encapsulation:2});let i=e;return i})();var Q=[{path:"",loadChildren:()=>import("./chunk-4LTFJVRJ.js").then(i=>i.contentRoutes)},{path:"**",loadChildren:()=>import("./chunk-4LTFJVRJ.js").then(i=>i.contentRoutes)}],W={scrollPositionRestoration:"enabled",anchorScrolling:"enabled",scrollOffset:[0,80]};var X=(()=>{let e=class e extends p{constructor(o){super(),this.title=o}updateTitle(o){let r=this.buildTitle(o)??"";this.title.setTitle(`${r}${r?" | ":""}Psic\xF3loga Manoella Larissa`.trim())}};e.\u0275fac=function(r){return new(r||e)(c(L))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var te="@",oe=(()=>{let e=class e{constructor(o,r,n,s,l){this.doc=o,this.delegate=r,this.zone=n,this.animationType=s,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=a(M,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-UMFQ6RPK.js").then(r=>r)).catch(r=>{throw new u(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:n})=>{this._engine=r(this.animationType,this.doc);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(o,r){let n=this.delegate.createRenderer(o,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new m(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let ee=l.createRenderer(o,r);s.use(ee),this.scheduler?.notify(9)}).catch(l=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){C()},e.\u0275prov=d({token:e,factory:e.\u0275fac});let i=e;return i})(),m=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(te)}};function Z(i="animations"){return A("NgAsyncAnimations"),f([{provide:R,useFactory:(e,t,o)=>new oe(e,t,o,i),deps:[F,j,y]},{provide:b,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}function re(i){let e=i,t=Math.floor(Math.abs(i)),o=i.toString().replace(/^[^.]*\.?/,"").length,r=parseInt(i.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return t===Math.floor(t)&&t>=0&&t<=1?1:r===0&&t!==0&&t%1e6===0&&o===0||!(r>=0&&r<=5)?4:5}var G=["pt",[["AM","PM"],void 0,void 0],void 0,[["D","S","T","Q","Q","S","S"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."],["domingo","segunda-feira","ter\xE7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xE1bado"],["dom.","seg.","ter.","qua.","qui.","sex.","s\xE1b."]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]],void 0,[["a.C.","d.C."],void 0,["antes de Cristo","depois de Cristo"]],0,[6,0],["dd/MM/y","d 'de' MMM 'de' y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4\xA0#,##0.00","#E0"],"BRL","R$","Real brasileiro",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],JPY:["JP\xA5","\xA5"],PHP:[void 0,"\u20B1"],PTE:["Esc."],RON:[void 0,"L"],SYP:[void 0,"S\xA3"],THB:["\u0E3F"],TWD:["NT$"],USD:["US$","$"]},"ltr",re];I(G);var K={providers:[z(),Z(),g(H),N(x()),B(Q,q(W)),{provide:w,useValue:"pt"},{provide:D,useValue:"BRL"},{provide:p,useClass:X},{provide:k,useFactory:()=>{let i=a(v);return E(i)?"":window.location.origin}}]};T.production&&void 0;O(Y,K).catch(i=>console.error(i));
