(window.webpackJsonp=window.webpackJsonp||[]).push([[19,18],{HEwg:function(l,n,u){"use strict";var t=u("8Y7J"),o=u("oBZk"),i=u("ZZ/e"),e=u("WaXP"),r=u("iInd"),a=u("xgBC");u.d(n,"a",function(){return p});var s=t.vb({encapsulation:0,styles:[[".img-register[_ngcontent-%COMP%]{margin-top:10px!important;margin-bottom:10px!important;height:80px;width:88px;margin:auto;display:block}"]],data:{}});function b(l){return t.Sb(0,[(l()(),t.xb(0,0,null,null,6,"ion-header",[],null,null,null,o.P,o.k)),t.wb(1,49152,null,0,i.A,[t.i,t.n,t.B],null,null),(l()(),t.xb(2,0,null,0,4,"ion-toolbar",[["text-center",""]],null,null,null,o.jb,o.E)),t.wb(3,49152,null,0,i.Ab,[t.i,t.n,t.B],null,null),(l()(),t.xb(4,0,null,0,2,"ion-title",[],null,null,null,o.ib,o.D)),t.wb(5,49152,null,0,i.yb,[t.i,t.n,t.B],null,null),(l()(),t.Qb(-1,0,["Ajustes"])),(l()(),t.xb(7,0,null,null,10,"ion-content",[],null,null,null,o.M,o.h)),t.wb(8,49152,null,0,i.t,[t.i,t.n,t.B],null,null),(l()(),t.xb(9,0,null,0,8,"ion-list",[],null,null,null,o.V,o.q)),t.wb(10,49152,null,0,i.N,[t.i,t.n,t.B],null,null),(l()(),t.xb(11,0,null,0,6,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t},o.T,o.o)),t.wb(12,49152,null,0,i.G,[t.i,t.n,t.B],null,null),(l()(),t.xb(13,0,null,0,1,"ion-icon",[["color","footer"],["name","log-out"],["slot","start"]],null,null,null,o.Q,o.l)),t.wb(14,49152,null,0,i.B,[t.i,t.n,t.B],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.xb(15,0,null,0,2,"ion-label",[["detail",""]],null,null,null,o.U,o.p)),t.wb(16,49152,null,0,i.M,[t.i,t.n,t.B],null,null),(l()(),t.Qb(-1,0,["Cerrar sesion"]))],function(l,n){l(n,14,0,"footer","log-out")},null)}function c(l){return t.Sb(0,[(l()(),t.xb(0,0,null,null,1,"app-tucuenta",[],null,null,null,b,s)),t.wb(1,114688,null,0,e.a,[r.m,i.Jb,a.b],null,null)],function(l,n){l(n,1,0)},null)}var p=t.tb("app-tucuenta",e.a,c,{},{},[])},WaXP:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u("ZZ/e");class t{constructor(l,n,u){this.router=l,this.popoverController=n,this.storage=u}ngOnInit(){}logout(){this.popoverController.dismiss(),this.storage.clear().then(l=>{this.router.navigate(["/login"])})}CuentaPersonal(){this.popoverController.dismiss(),this.router.navigate(["/cuenta"])}}}}]);