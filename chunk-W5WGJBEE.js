import{A as W,B as U,Eb as F,F as N,H as Q,I as Y,P as h,Pb as oe,R as I,U as p,V as q,Wa as X,X as Z,_ as l,a as E,ac as S,b as $,ca as k,da as K,fb as ee,fc as T,g as j,ib as te,j as d,jb as x,l as z,n as R,qa as v,r as A,sa as w,ta as D,tb as ie,va as P,vb as ne,wb as se,x as g,y as J,z as y}from"./chunk-MOSOV5P2.js";var ue=["*"];var ae={animation:!0,transitionTimerDelayMs:5},re=(()=>{let e=class e{constructor(){this.animation=ae.animation}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function pe(i){let{transitionDelay:e,transitionDuration:a}=window.getComputedStyle(i),t=parseFloat(e),n=parseFloat(a);return(t+n)*1e3}function _e(i){return typeof i=="string"}function B(i){return i!=null}function fe(i){return i&&i.then}function le(i){return(i||document.body).getBoundingClientRect()}function ge(i){return e=>new j(a=>{let t=o=>i.run(()=>a.next(o)),n=o=>i.run(()=>a.error(o)),s=()=>i.run(()=>a.complete());return e.subscribe({next:t,error:n,complete:s})})}var me=()=>{},{transitionTimerDelayMs:be}=ae,O=new Map,M=(i,e,a,t)=>{let n=t.context||{},s=O.get(e);if(s)switch(t.runningTransition){case"continue":return z;case"stop":i.run(()=>s.transition$.complete()),n=Object.assign(s.context,n),O.delete(e)}let o=a(e,t.animation,n)||me;if(!t.animation||window.getComputedStyle(e).transitionProperty==="none")return i.run(()=>o()),R(void 0).pipe(ge(i));let r=new d,c=new d,u=r.pipe(Q(!0));O.set(e,{transition$:r,complete:()=>{c.next(),c.complete()},context:n});let f=pe(e);return i.runOutsideAngular(()=>{let _=g(e,"transitionend").pipe(h(u),y(({target:de})=>de===e)),b=J(f+be).pipe(h(u));W(b,_,c).pipe(h(u)).subscribe(()=>{O.delete(e),i.run(()=>{o(),r.next(),r.complete()})})}),r.asObservable()};var G=function(i){return i[i.Tab=9]="Tab",i[i.Enter=13]="Enter",i[i.Escape=27]="Escape",i[i.Space=32]="Space",i[i.PageUp=33]="PageUp",i[i.PageDown=34]="PageDown",i[i.End=35]="End",i[i.Home=36]="Home",i[i.ArrowLeft=37]="ArrowLeft",i[i.ArrowUp=38]="ArrowUp",i[i.ArrowRight=39]="ArrowRight",i[i.ArrowDown=40]="ArrowDown",i}(G||{});var ci=(()=>{let i=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(i()||e()):!1})();var ye=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function ce(i){let e=Array.from(i.querySelectorAll(ye)).filter(a=>a.tabIndex!==-1);return[e[0],e[e.length-1]]}var ve=(i,e,a,t=!1)=>{i.runOutsideAngular(()=>{let n=g(e,"focusin").pipe(h(a),A(s=>s.target));g(e,"keydown").pipe(h(a),y(s=>s.which===G.Tab),I(n)).subscribe(([s,o])=>{let[r,c]=ce(e);(o===r||o===e)&&s.shiftKey&&(c.focus(),s.preventDefault()),o===c&&!s.shiftKey&&(r.focus(),s.preventDefault())}),t&&g(e,"click").pipe(h(a),I(n),A(s=>s[1])).subscribe(s=>s.focus())})};var di=new Date(1882,10,12),hi=new Date(2174,10,25);var ui=1e3*60*60*24;var H=1080,we=24*H,De=12*H+793,pi=29*we+De,_i=11*H+204;var fi=(()=>{let e=class e{constructor(){this.autoClose=!0,this.placement=["bottom-start","bottom-end","top-start","top-end"],this.popperOptions=t=>t,this.container=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var m=class{constructor(e,a,t){this.nodes=e,this.viewRef=a,this.componentRef=t}};var Se=(()=>{let e=class e{constructor(){this._document=l(T)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),n=this._document.body,s=n.style,{overflow:o,paddingRight:r}=s;if(t>0){let c=parseFloat(window.getComputedStyle(n).paddingRight);s.paddingRight=`${c+t}px`}return s.overflow="hidden",()=>{t>0&&(s.paddingRight=r),s.overflow=o}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var gi=(()=>{let e=class e{constructor(){this._ngbConfig=l(re),this.autoClose=!0,this.placement="auto",this.popperOptions=t=>t,this.triggers="hover focus",this.disableTooltip=!1,this.openDelay=0,this.closeDelay=0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var mi=new Z("live announcer delay",{providedIn:"root",factory:()=>100});var Te=(()=>{let e=class e{constructor(){this._ngbConfig=l(re),this.backdrop=!0,this.keyboard=!0,this.position="start",this.scroll=!1}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),C=class{close(e){}dismiss(e){}},L=class{get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(h(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(h(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._panelCmptRef.instance.shown.asObservable()}constructor(e,a,t,n){this._panelCmptRef=e,this._contentRef=a,this._backdropCmptRef=t,this._beforeDismiss=n,this._closed=new d,this._dismissed=new d,this._hidden=new d,e.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),t&&t.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,o)=>{this._resolve=s,this._reject=o}),this.result.then(null,()=>{})}close(e){this._panelCmptRef&&(this._closed.next(e),this._resolve(e),this._removeOffcanvasElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeOffcanvasElements()}dismiss(e){if(this._panelCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let a=this._beforeDismiss();fe(a)?a.then(t=>{t!==!1&&this._dismiss(e)},()=>{}):a!==!1&&this._dismiss(e)}}_removeOffcanvasElements(){let e=this._panelCmptRef.instance.hide(),a=this._backdropCmptRef?this._backdropCmptRef.instance.hide():R(void 0);e.subscribe(()=>{let{nativeElement:t}=this._panelCmptRef.location;t.parentNode.removeChild(t),this._panelCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._panelCmptRef=null,this._contentRef=null}),a.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),U(e,a).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},V=function(i){return i[i.BACKDROP_CLICK=0]="BACKDROP_CLICK",i[i.ESC=1]="ESC",i}(V||{}),Oe=(()=>{let e=class e{constructor(){this._nativeElement=l(P).nativeElement,this._zone=l(D),this.dismissEvent=new w}ngOnInit(){this._zone.onStable.asObservable().pipe(N(1)).subscribe(()=>{M(this._zone,this._nativeElement,(t,n)=>{n&&le(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return M(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}dismiss(){this.static||this.dismissEvent.emit(V.BACKDROP_CLICK)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=k({type:e,selectors:[["ngb-offcanvas-backdrop"]],hostVars:6,hostBindings:function(n,s){n&1&&ie("mousedown",function(){return s.dismiss()}),n&2&&(x("offcanvas-backdrop"+(s.backdropClass?" "+s.backdropClass:"")),te("show",!s.animation)("fade",s.animation))},inputs:{animation:"animation",backdropClass:"backdropClass",static:"static"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[F],decls:0,vars:0,template:function(n,s){},encapsulation:2});let i=e;return i})(),Me=(()=>{let e=class e{constructor(){this._document=l(T),this._elRef=l(P),this._zone=l(D),this._closed$=new d,this._elWithFocus=null,this.keyboard=!0,this.position="start",this.dismissEvent=new w,this.shown=new d,this.hidden=new d}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(N(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let t={animation:this.animation,runningTransition:"stop"},n=M(this._zone,this._elRef.nativeElement,s=>(s.classList.remove("showing"),s.classList.add("hiding"),()=>s.classList.remove("show","hiding")),t);return n.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),n}_show(){let t={animation:this.animation,runningTransition:"continue"};M(this._zone,this._elRef.nativeElement,(s,o)=>(o&&le(s),s.classList.add("show","showing"),()=>s.classList.remove("showing")),t).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{g(t,"keydown").pipe(h(this._closed$),y(n=>n.which===G.Escape)).subscribe(n=>{this.keyboard&&requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(V.ESC))})})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let n=t.querySelector("[ngbAutofocus]"),s=ce(t)[0];(n||s||t).focus()}}_restoreFocus(){let t=this._document.body,n=this._elWithFocus,s;n&&n.focus&&t.contains(n)?s=n:s=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=k({type:e,selectors:[["ngb-offcanvas-panel"]],hostAttrs:["role","dialog","tabindex","-1"],hostVars:5,hostBindings:function(n,s){n&2&&(ee("aria-modal",!0)("aria-labelledby",s.ariaLabelledBy)("aria-describedby",s.ariaDescribedBy),x("offcanvas offcanvas-"+s.position+(s.panelClass?" "+s.panelClass:"")))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",keyboard:"keyboard",panelClass:"panelClass",position:"position"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[F],ngContentSelectors:ue,decls:1,vars:0,template:function(n,s){n&1&&(ne(),se(0))},encapsulation:2});let i=e;return i})(),Ce=(()=>{let e=class e{constructor(){this._applicationRef=l(oe),this._injector=l(v),this._document=l(T),this._scrollBar=l(Se),this._activePanelCmptHasChanged=new d,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._panelAttributes=["animation","ariaDescribedBy","ariaLabelledBy","keyboard","panelClass","position"],this._activeInstance=new w;let t=l(D);this._activePanelCmptHasChanged.subscribe(()=>{this._panelCmpt&&ve(t,this._panelCmpt.location.nativeElement,this._activePanelCmptHasChanged)})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,n,s){let o=s.container instanceof HTMLElement?s.container:B(s.container)?this._document.querySelector(s.container):this._document.body;if(!o)throw new Error(`The specified offcanvas container "${s.container||"body"}" was not found in the DOM.`);s.scroll||this._hideScrollBar();let r=new C,c=this._getContentRef(s.injector||t,n,r),u=s.backdrop!==!1?this._attachBackdrop(o):void 0,f=this._attachWindowComponent(o,c.nodes),_=new L(f,c,u,s.beforeDismiss);return this._registerOffcanvasRef(_),this._registerPanelCmpt(f),_.hidden.pipe(Y(()=>this._restoreScrollBar())).subscribe(),r.close=b=>{_.close(b)},r.dismiss=b=>{_.dismiss(b)},this._applyPanelOptions(f.instance,s),u&&u.instance&&(this._applyBackdropOptions(u.instance,s),u.changeDetectorRef.detectChanges()),f.changeDetectorRef.detectChanges(),_}get activeInstance(){return this._activeInstance}dismiss(t){this._offcanvasRef?.dismiss(t)}hasOpenOffcanvas(){return!!this._offcanvasRef}_attachBackdrop(t){let n=S(Oe,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(n.hostView),t.appendChild(n.location.nativeElement),n}_attachWindowComponent(t,n){let s=S(Me,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:n});return this._applicationRef.attachView(s.hostView),t.appendChild(s.location.nativeElement),s}_applyPanelOptions(t,n){this._panelAttributes.forEach(s=>{B(n[s])&&(t[s]=n[s])})}_applyBackdropOptions(t,n){this._backdropAttributes.forEach(s=>{B(n[s])&&(t[s]=n[s])}),t.static=n.backdrop==="static"}_getContentRef(t,n,s){return n?n instanceof X?this._createFromTemplateRef(n,s):_e(n)?this._createFromString(n):this._createFromComponent(t,n,s):new m([])}_createFromTemplateRef(t,n){let s={$implicit:n,close(r){n.close(r)},dismiss(r){n.dismiss(r)}},o=t.createEmbeddedView(s);return this._applicationRef.attachView(o),new m([o.rootNodes],o)}_createFromString(t){let n=this._document.createTextNode(`${t}`);return new m([[n]])}_createFromComponent(t,n,s){let o=v.create({providers:[{provide:C,useValue:s}],parent:t}),r=S(n,{environmentInjector:this._applicationRef.injector,elementInjector:o}),c=r.location.nativeElement;return this._applicationRef.attachView(r.hostView),new m([[c]],r.hostView,r)}_registerOffcanvasRef(t){let n=()=>{this._offcanvasRef=void 0,this._activeInstance.emit(this._offcanvasRef)};this._offcanvasRef=t,this._activeInstance.emit(this._offcanvasRef),t.result.then(n,n)}_registerPanelCmpt(t){this._panelCmpt=t,this._activePanelCmptHasChanged.next(),t.onDestroy(()=>{this._panelCmpt=void 0,this._activePanelCmptHasChanged.next()})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),bi=(()=>{let e=class e{constructor(){this._injector=l(v),this._offcanvasStack=l(Ce),this._config=l(Te)}open(t,n={}){let s=E($(E({},this._config),{animation:this._config.animation}),n);return this._offcanvasStack.open(this._injector,t,s)}get activeInstance(){return this._offcanvasStack.activeInstance}dismiss(t){this._offcanvasStack.dismiss(t)}hasOpenOffcanvas(){return this._offcanvasStack.hasOpenOffcanvas()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),yi=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=K({type:e}),e.\u0275inj=q({});let i=e;return i})();export{fi as a,gi as b,bi as c,yi as d};
