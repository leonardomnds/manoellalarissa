import{a as W,d as B}from"./chunk-SEUDPWZQ.js";import{b as Q,g as j}from"./chunk-QPEHCZNY.js";import{a as F,c as z,e as A,f as N}from"./chunk-4KX6QDMT.js";import"./chunk-BDU3YJAJ.js";import{d as D,i as I}from"./chunk-ZBCRZFNQ.js";import{$ as v,Cb as T,Db as R,Eb as V,Fb as M,Gb as p,Kb as O,Lb as L,Ob as y,Sa as x,Ua as _,Z as f,bb as H,fb as u,hb as h,ka as d,la as m,mb as S,pb as r,qb as i,ra as E,rb as g,sb as P,tb as b,y as k,yb as l,zb as s}from"./chunk-7YOIOW7K.js";var X=["logo"],G=()=>["/"];function J(t,o){t&1&&P(0)}function K(t,o){if(t&1){let a=b();r(0,"nav",7),u(1,J,1,0,"ng-container",8),i(),r(2,"button",9),l("click",function(){d(a);let e=s(),c=M(10);return m(e.abrirMenu(c))}),g(3,"fa-icon",10),i()}if(t&2){let a=s(),n=M(8);_(),h("ngTemplateOutlet",n),_(2),h("icon",a.menuIcon)}}function Z(t,o){if(t&1){let a=b();r(0,"a",11),l("click",function(){d(a);let e=s();return m(e.fecharMenu())}),p(1,"In\xEDcio"),i(),r(2,"a",12),l("click",function(){d(a);let e=s();return m(e.fecharMenu())}),p(3,"\xC1reas de Atua\xE7\xE3o"),i(),r(4,"a",13),l("click",function(){d(a);let e=s();return m(e.fecharMenu())}),p(5,"Como Funciona"),i(),r(6,"a",14),l("click",function(){d(a);let e=s();return m(e.fecharMenu())}),p(7,"Benef\xEDcios"),i(),r(8,"a",15),l("click",function(){d(a);let e=s();return m(e.fecharMenu())}),p(9,"A Psic\xF3loga"),i(),r(10,"a",16),l("click",function(){d(a);let e=s();return m(e.fecharMenu())}),p(11,"Contato"),i()}}function $(t,o){t&1&&P(0)}function ee(t,o){if(t&1&&(r(0,"div",17),g(1,"img",6),i(),r(2,"div",18),u(3,$,1,0,"ng-container",8),i()),t&2){s();let a=M(8);_(3),h("ngTemplateOutlet",a)}}var q=(()=>{let o=class o{constructor(){this.isLandingPage=H(!0),this.menuIcon=Q,this.router=f(A),this.document=f(D),this.destroyRef=f(E),this.sidebarService=f(B),this.router.events.pipe(k(n=>n instanceof F),W(this.destroyRef)).subscribe(n=>{let e=n.urlAfterRedirects==="/"||n.urlAfterRedirects.startsWith("/#");this.isLandingPage.set(e),this.document.querySelector('meta[name="robots"]').setAttribute("content",e?te:ne)})}ngAfterContentInit(){this.onWindowScroll()}abrirMenu(n){this.sidebarRef=this.sidebarService.open(n,{position:"end"})}fecharMenu(){this.sidebarRef&&(this.sidebarRef.close(),this.sidebarRef=void 0)}onWindowScroll(){let n=this.logoWrapper.nativeElement;if(!this.isLandingPage()){n.classList.add(w);return}let e=this.document.querySelector("section.initial .logo")?.height??0;if(!e)return;if(this.document.documentElement.scrollTop>=e){n.classList.add(w);return}n.classList.remove(w)}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=v({type:o,selectors:[["app-header"]],viewQuery:function(e,c){if(e&1&&T(X,7),e&2){let C;R(C=V())&&(c.logoWrapper=C.first)}},hostBindings:function(e,c){e&1&&l("resize",function(){return c.fecharMenu()},!1,x)("scroll",function(){return c.onWindowScroll()},!1,x)},standalone:!0,features:[O],decls:11,vars:3,consts:[["logo",""],["menus",""],["sidebar",""],[1,"page-wrapper"],[1,"logo-container","no-clarity"],[3,"routerLink"],["src","assets/images/logo.svg","alt","Logo"],[1,"menu-desktop"],[4,"ngTemplateOutlet"],["aria-label","Menu",1,"menu-mobile","btn","text-rosa-claro",3,"click"],["size","2x",3,"icon"],["href","#",1,"hover-underline",3,"click"],["href","#areas-atuacao",1,"hover-underline",3,"click"],["href","#como-funciona",1,"hover-underline",3,"click"],["href","#beneficios",1,"hover-underline",3,"click"],["href","#sobre",1,"hover-underline",3,"click"],["href","#contato",1,"hover-underline",3,"click"],[1,"offcanvas-header","bg-rosa-escuro"],[1,"offcanvas-body","bg-rosa-escuro"]],template:function(e,c){e&1&&(r(0,"header")(1,"div",3)(2,"div",4,0)(4,"a",5),g(5,"img",6),i()(),u(6,K,4,2),i()(),u(7,Z,12,0,"ng-template",null,1,y)(9,ee,4,1,"ng-template",null,2,y)),e&2&&(_(4),h("routerLink",L(2,G)),_(2),S(c.isLandingPage()?6:-1))},dependencies:[N,j,I],styles:["header[_ngcontent-%COMP%]{z-index:1030;position:fixed;top:0;left:0;right:0;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(var(--rosa-escuro-rgb),.85)}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;height:var(--header-height);display:flex;align-items:center;justify-content:space-between;padding:0 16px!important;gap:16px}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{opacity:0;transform:translateY(-100%);animation:_ngcontent-%COMP%_slideDown .5s ease forwards}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(2){animation-delay:.15s}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(3){animation-delay:.3s}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(4){animation-delay:.45s}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(5){animation-delay:.6s}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-desktop[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-of-type(6){animation-delay:.75s}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{opacity:0;transition:opacity .3s linear;pointer-events:none}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo-container.visible[_ngcontent-%COMP%]{opacity:1;pointer-events:all}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{font-weight:500;display:inline-flex;align-items:center;gap:16px}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--rosa-claro);text-wrap:nowrap}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--primary)}@media screen and (max-width: 870px){header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-desktop[_ngcontent-%COMP%]{display:none}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]{display:inline-flex}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]:hover{background-color:#0000001a}header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{z-index:3000;position:fixed;width:var(--sidebar-width);top:var(--header-height);bottom:0;right:0;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(var(--rosa-escuro-rgb),.85)}}  .offcanvas{width:320px!important}  .offcanvas .offcanvas-header{display:flex;align-items:center;justify-content:center}  .offcanvas .offcanvas-header img{width:80%;height:auto}  .offcanvas .offcanvas-body{display:flex;flex-direction:column;gap:16px}  .offcanvas .offcanvas-body a{outline:none;font-size:22px;font-weight:500;color:var(--rosa-claro)}"]});let t=o;return t})(),w="visible",te="index, follow, notranslate, max-image-preview:large, max-snippet:-1, max-video-preview:-1",ne="noindex, nofollow";var U=(()=>{let o=class o{};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=v({type:o,selectors:[["ng-component"]],standalone:!0,features:[O],decls:3,vars:0,consts:[[1,"w-100",2,"padding-top","var(--header-height)"]],template:function(e,c){e&1&&(r(0,"div",0),g(1,"app-header")(2,"router-outlet"),i())},dependencies:[q,z],encapsulation:2});let t=o;return t})();var ve=[{path:"",component:U,children:[{path:"",loadChildren:()=>import("./chunk-4SQS3E27.js").then(t=>t.homeRoutes)},{path:"avisos",loadChildren:()=>import("./chunk-FRK422CY.js").then(t=>t.avisosRoutes)},{path:"form",loadChildren:()=>import("./chunk-DPOM5D5Y.js").then(t=>t.fichaCadastralRoutes)},{path:"**",redirectTo:"",pathMatch:"full"}]}];export{ve as contentRoutes};