"use strict";(self.webpackChunkmean_course=self.webpackChunkmean_course||[]).push([[124],{3124:(O,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>Y});var u=a(8583),i=a(665),h=a(4786),c=a(9868),n=a(3018),l=a(384),g=a(3738),f=a(4885),m=a(8295),d=a(9983),_=a(1095);function Z(t,e){1&t&&n._UZ(0,"mat-spinner")}function v(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Please Enter Valid Email."),n.qZA())}function S(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Please enter a valid password."),n.qZA())}function C(t,e){1&t&&(n.TgZ(0,"button",9),n._uU(1," Login "),n.qZA())}function L(t,e){1&t&&n._UZ(0,"mat-spinner")}function T(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"form",2,3),n.NdJ("submit",function(){n.CHM(o);const s=n.MAs(1);return n.oxw().onLogin(s)}),n.TgZ(2,"mat-form-field"),n._UZ(3,"input",4,5),n.YNc(5,v,2,0,"mat-error",0),n.qZA(),n.TgZ(6,"mat-form-field"),n._UZ(7,"input",6,7),n.YNc(9,S,2,0,"mat-error",0),n.qZA(),n.YNc(10,C,2,0,"button",8),n.YNc(11,L,1,0,"mat-spinner",0),n.qZA()}if(2&t){const o=n.MAs(4),r=n.MAs(8),s=n.oxw();n.xp6(5),n.Q6J("ngIf",o.invalid),n.xp6(4),n.Q6J("ngIf",r.invalid),n.xp6(1),n.Q6J("ngIf",!s.isLoading),n.xp6(1),n.Q6J("ngIf",s.isLoading)}}function A(t,e){1&t&&n._UZ(0,"mat-spinner")}function M(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"Please Enter Valid Email."),n.qZA())}function I(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1," Please enter a valid password."),n.qZA())}function b(t,e){1&t&&(n.TgZ(0,"button",9),n._uU(1," Sign Up "),n.qZA())}function J(t,e){1&t&&n._UZ(0,"mat-spinner")}function y(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"form",2,3),n.NdJ("submit",function(){n.CHM(o);const s=n.MAs(1);return n.oxw().onSignup(s)}),n.TgZ(2,"mat-form-field"),n._UZ(3,"input",4,5),n.YNc(5,M,2,0,"mat-error",0),n.qZA(),n.TgZ(6,"mat-form-field"),n._UZ(7,"input",6,7),n.YNc(9,I,2,0,"mat-error",0),n.qZA(),n.YNc(10,b,2,0,"button",8),n.YNc(11,J,1,0,"mat-spinner",0),n.qZA()}if(2&t){const o=n.MAs(4),r=n.MAs(8),s=n.oxw();n.xp6(5),n.Q6J("ngIf",o.invalid),n.xp6(4),n.Q6J("ngIf",r.invalid),n.xp6(1),n.Q6J("ngIf",!s.isLoading),n.xp6(1),n.Q6J("ngIf",s.isLoading)}}const N=[{path:"login",component:(()=>{class t{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(()=>{this.isLoading=!1})}onLogin(o){o.invalid||(this.isLoading=!0,this.authService.login(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["matInput","","type","password","name","password","placeholder","Password","ngModel","","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(o,r){1&o&&(n.TgZ(0,"mat-card"),n.YNc(1,Z,1,0,"mat-spinner",0),n.YNc(2,T,12,4,"form",1),n.qZA()),2&o&&(n.xp6(1),n.Q6J("ngIf",r.isLoading),n.xp6(1),n.Q6J("ngIf",!r.isLoading))},directives:[g.a8,u.O5,f.$g,i._Y,i.JL,i.F,m.KE,d.Nt,i.Fj,i.JJ,i.On,i.Q7,i.on,m.TO,_.lW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()},{path:"signup",component:(()=>{class t{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(()=>{this.isLoading=!1})}onSignup(o){o.invalid||(this.isLoading=!0,this.authService.createUser(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l.e))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["matInput","","type","password","name","password","placeholder","Password","ngModel","","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(o,r){1&o&&(n.TgZ(0,"mat-card"),n.YNc(1,A,1,0,"mat-spinner",0),n.YNc(2,y,12,4,"form",1),n.qZA()),2&o&&(n.xp6(1),n.Q6J("ngIf",r.isLoading),n.xp6(1),n.Q6J("ngIf",!r.isLoading))},directives:[g.a8,u.O5,f.$g,i._Y,i.JL,i.F,m.KE,d.Nt,i.Fj,i.JJ,i.On,i.Q7,i.on,m.TO,_.lW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),t})()}];let U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.Bz.forChild(N)],c.Bz]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.ez,h.h,i.u5,U]]}),t})()}}]);