import{d as O}from"./chunk-BZ6GZT4Y.js";import{$ as x,A as U,Ab as ne,E as k,G as Q,H as q,Jb as L,O as d,Q as N,T as p,Vb as se,W as Y,Xa as Z,Z as l,a as R,b as j,g as v,gb as X,gc as T,ia as K,j as u,jb as ee,kb as B,l as z,n as A,qa as y,r as I,ra as F,ta as D,ua as S,w as g,wa as P,x as J,xb as te,y as w,z as W,zb as ie}from"./chunk-G2QE2KQT.js";function de(s){s||(K(de),s=l(F));let e=new v(o=>s.onDestroy(o.next.bind(o)));return o=>o.pipe(d(e))}var he=["*"];var oe={animation:!0,transitionTimerDelayMs:5},ae=(()=>{let e=class e{constructor(){this.animation=oe.animation}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function pe(s){let{transitionDelay:e,transitionDuration:o}=window.getComputedStyle(s),t=parseFloat(e),i=parseFloat(o);return(t+i)*1e3}function _e(s){return typeof s=="string"}function G(s){return s!=null}function fe(s){return s&&s.then}function re(s){return(s||document.body).getBoundingClientRect()}function ge(s){return e=>new v(o=>{let t=a=>s.run(()=>o.next(a)),i=a=>s.run(()=>o.error(a)),n=()=>s.run(()=>o.complete());return e.subscribe({next:t,error:i,complete:n})})}var me=()=>{},{transitionTimerDelayMs:be}=oe,M=new Map,C=(s,e,o,t)=>{let i=t.context||{},n=M.get(e);if(n)switch(t.runningTransition){case"continue":return z;case"stop":s.run(()=>n.transition$.complete()),i=Object.assign(n.context,i),M.delete(e)}let a=o(e,t.animation,i)||me;if(!t.animation||window.getComputedStyle(e).transitionProperty==="none")return s.run(()=>a()),A(void 0).pipe(ge(s));let r=new u,c=new u,h=r.pipe(Q(!0));M.set(e,{transition$:r,complete:()=>{c.next(),c.complete()},context:i});let f=pe(e);return s.runOutsideAngular(()=>{let _=g(e,"transitionend").pipe(d(h),w(({target:ce})=>ce===e)),b=J(f+be).pipe(d(h));W(b,_,c).pipe(d(h)).subscribe(()=>{M.delete(e),s.run(()=>{a(),r.next(),r.complete()})})}),r.asObservable()};var mi=(()=>{let s=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(s()||e()):!1})();var ye=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function le(s){let e=Array.from(s.querySelectorAll(ye)).filter(o=>o.tabIndex!==-1);return[e[0],e[e.length-1]]}var ve=(s,e,o,t=!1)=>{s.runOutsideAngular(()=>{let i=g(e,"focusin").pipe(d(o),I(n=>n.target));g(e,"keydown").pipe(d(o),w(n=>n.key==="Tab"),N(i)).subscribe(([n,a])=>{let[r,c]=le(e);(a===r||a===e)&&n.shiftKey&&(c.focus(),n.preventDefault()),a===c&&!n.shiftKey&&(r.focus(),n.preventDefault())}),t&&g(e,"click").pipe(d(o),N(i),I(n=>n[1])).subscribe(n=>n.focus())})};var bi=new Date(1882,10,12),yi=new Date(2174,10,25);var vi=1e3*60*60*24;var V=1080,we=24*V,De=12*V+793,wi=29*we+De,Di=11*V+204;var Si=(()=>{let e=class e{constructor(){this.autoClose=!0,this.placement=["bottom-start","bottom-end","top-start","top-end"],this.popperOptions=t=>t,this.container=null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var m=class{constructor(e,o,t){this.nodes=e,this.viewRef=o,this.componentRef=t}};var Se=(()=>{let e=class e{constructor(){this._document=l(O)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,n=i.style,{overflow:a,paddingRight:r}=n;if(t>0){let c=parseFloat(window.getComputedStyle(i).paddingRight);n.paddingRight=`${c+t}px`}return n.overflow="hidden",()=>{t>0&&(n.paddingRight=r),n.overflow=a}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Ti=(()=>{let e=class e{constructor(){this._ngbConfig=l(ae),this.autoClose=!0,this.placement="auto",this.popperOptions=t=>t,this.triggers="hover focus",this.disableTooltip=!1,this.openDelay=0,this.closeDelay=0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var Oi=new Y("live announcer delay",{providedIn:"root",factory:()=>100});var Te=(()=>{let e=class e{constructor(){this._ngbConfig=l(ae),this.backdrop=!0,this.keyboard=!0,this.position="start",this.scroll=!1}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),E=class{close(e){}dismiss(e){}},H=class{get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(d(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(d(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._panelCmptRef.instance.shown.asObservable()}constructor(e,o,t,i){this._panelCmptRef=e,this._contentRef=o,this._backdropCmptRef=t,this._beforeDismiss=i,this._closed=new u,this._dismissed=new u,this._hidden=new u,e.instance.dismissEvent.subscribe(n=>{this.dismiss(n)}),t&&t.instance.dismissEvent.subscribe(n=>{this.dismiss(n)}),this.result=new Promise((n,a)=>{this._resolve=n,this._reject=a}),this.result.then(null,()=>{})}close(e){this._panelCmptRef&&(this._closed.next(e),this._resolve(e),this._removeOffcanvasElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeOffcanvasElements()}dismiss(e){if(this._panelCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let o=this._beforeDismiss();fe(o)?o.then(t=>{t!==!1&&this._dismiss(e)},()=>{}):o!==!1&&this._dismiss(e)}}_removeOffcanvasElements(){let e=this._panelCmptRef.instance.hide(),o=this._backdropCmptRef?this._backdropCmptRef.instance.hide():A(void 0);e.subscribe(()=>{let{nativeElement:t}=this._panelCmptRef.location;t.parentNode.removeChild(t),this._panelCmptRef.destroy(),this._contentRef?.viewRef?.destroy(),this._panelCmptRef=null,this._contentRef=null}),o.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),U(e,o).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},$=function(s){return s[s.BACKDROP_CLICK=0]="BACKDROP_CLICK",s[s.ESC=1]="ESC",s}($||{}),Oe=(()=>{let e=class e{constructor(){this._nativeElement=l(P).nativeElement,this._zone=l(S),this.dismissEvent=new D}ngOnInit(){this._zone.onStable.asObservable().pipe(k(1)).subscribe(()=>{C(this._zone,this._nativeElement,(t,i)=>{i&&re(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return C(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}dismiss(){this.static||this.dismissEvent.emit($.BACKDROP_CLICK)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=x({type:e,selectors:[["ngb-offcanvas-backdrop"]],hostVars:6,hostBindings:function(i,n){i&1&&te("mousedown",function(){return n.dismiss()}),i&2&&(B("offcanvas-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),ee("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass",static:"static"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[L],decls:0,vars:0,template:function(i,n){},encapsulation:2});let s=e;return s})(),Me=(()=>{let e=class e{constructor(){this._document=l(O),this._elRef=l(P),this._zone=l(S),this._closed$=new u,this._elWithFocus=null,this.keyboard=!0,this.position="start",this.dismissEvent=new D,this.shown=new u,this.hidden=new u}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(k(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let t={animation:this.animation,runningTransition:"stop"},i=C(this._zone,this._elRef.nativeElement,n=>(n.classList.remove("showing"),n.classList.add("hiding"),()=>n.classList.remove("show","hiding")),t);return i.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),i}_show(){let t={animation:this.animation,runningTransition:"continue"};C(this._zone,this._elRef.nativeElement,(n,a)=>(a&&re(n),n.classList.add("show","showing"),()=>n.classList.remove("showing")),t).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{g(t,"keydown").pipe(d(this._closed$),w(i=>i.key==="Escape")).subscribe(i=>{this.keyboard&&requestAnimationFrame(()=>{i.defaultPrevented||this._zone.run(()=>this.dismiss($.ESC))})})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let i=t.querySelector("[ngbAutofocus]"),n=le(t)[0];(i||n||t).focus()}}_restoreFocus(){let t=this._document.body,i=this._elWithFocus,n;i&&i.focus&&t.contains(i)?n=i:n=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=x({type:e,selectors:[["ngb-offcanvas-panel"]],hostAttrs:["role","dialog","tabindex","-1"],hostVars:5,hostBindings:function(i,n){i&2&&(X("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),B("offcanvas offcanvas-"+n.position+(n.panelClass?" "+n.panelClass:"")))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",keyboard:"keyboard",panelClass:"panelClass",position:"position"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[L],ngContentSelectors:he,decls:1,vars:0,template:function(i,n){i&1&&(ie(),ne(0))},encapsulation:2});let s=e;return s})(),Ce=(()=>{let e=class e{constructor(){this._applicationRef=l(se),this._injector=l(y),this._document=l(O),this._scrollBar=l(Se),this._activePanelCmptHasChanged=new u,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._panelAttributes=["animation","ariaDescribedBy","ariaLabelledBy","keyboard","panelClass","position"],this._activeInstance=new D;let t=l(S);this._activePanelCmptHasChanged.subscribe(()=>{this._panelCmpt&&ve(t,this._panelCmpt.location.nativeElement,this._activePanelCmptHasChanged)})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,i,n){let a=n.container instanceof HTMLElement?n.container:G(n.container)?this._document.querySelector(n.container):this._document.body;if(!a)throw new Error(`The specified offcanvas container "${n.container||"body"}" was not found in the DOM.`);n.scroll||this._hideScrollBar();let r=new E,c=this._getContentRef(n.injector||t,i,r),h=n.backdrop!==!1?this._attachBackdrop(a):void 0,f=this._attachWindowComponent(a,c.nodes),_=new H(f,c,h,n.beforeDismiss);return this._registerOffcanvasRef(_),this._registerPanelCmpt(f),_.hidden.pipe(q(()=>this._restoreScrollBar())).subscribe(),r.close=b=>{_.close(b)},r.dismiss=b=>{_.dismiss(b)},this._applyPanelOptions(f.instance,n),h&&h.instance&&(this._applyBackdropOptions(h.instance,n),h.changeDetectorRef.detectChanges()),f.changeDetectorRef.detectChanges(),_}get activeInstance(){return this._activeInstance}dismiss(t){this._offcanvasRef?.dismiss(t)}hasOpenOffcanvas(){return!!this._offcanvasRef}_attachBackdrop(t){let i=T(Oe,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),t.appendChild(i.location.nativeElement),i}_attachWindowComponent(t,i){let n=T(Me,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(n.hostView),t.appendChild(n.location.nativeElement),n}_applyPanelOptions(t,i){this._panelAttributes.forEach(n=>{G(i[n])&&(t[n]=i[n])})}_applyBackdropOptions(t,i){this._backdropAttributes.forEach(n=>{G(i[n])&&(t[n]=i[n])}),t.static=i.backdrop==="static"}_getContentRef(t,i,n){return i?i instanceof Z?this._createFromTemplateRef(i,n):_e(i)?this._createFromString(i):this._createFromComponent(t,i,n):new m([])}_createFromTemplateRef(t,i){let n={$implicit:i,close(r){i.close(r)},dismiss(r){i.dismiss(r)}},a=t.createEmbeddedView(n);return this._applicationRef.attachView(a),new m([a.rootNodes],a)}_createFromString(t){let i=this._document.createTextNode(`${t}`);return new m([[i]])}_createFromComponent(t,i,n){let a=y.create({providers:[{provide:E,useValue:n}],parent:t}),r=T(i,{environmentInjector:this._applicationRef.injector,elementInjector:a}),c=r.location.nativeElement;return this._applicationRef.attachView(r.hostView),new m([[c]],r.hostView,r)}_registerOffcanvasRef(t){let i=()=>{this._offcanvasRef=void 0,this._activeInstance.emit(this._offcanvasRef)};this._offcanvasRef=t,this._activeInstance.emit(this._offcanvasRef),t.result.then(i,i)}_registerPanelCmpt(t){this._panelCmpt=t,this._activePanelCmptHasChanged.next(),t.onDestroy(()=>{this._panelCmpt=void 0,this._activePanelCmptHasChanged.next()})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),Mi=(()=>{let e=class e{constructor(){this._injector=l(y),this._offcanvasStack=l(Ce),this._config=l(Te)}open(t,i={}){let n=R(j(R({},this._config),{animation:this._config.animation}),i);return this._offcanvasStack.open(this._injector,t,n)}get activeInstance(){return this._offcanvasStack.activeInstance}dismiss(t){this._offcanvasStack.dismiss(t)}hasOpenOffcanvas(){return this._offcanvasStack.hasOpenOffcanvas()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{de as a,Si as b,Ti as c,Mi as d};