"use strict";(self.webpackChunktodo_list=self.webpackChunktodo_list||[]).push([[630],{3630:(q,m,s)=>{s.r(m),s.d(m,{LoginModule:()=>_});var g=s(6019),d=s(1509),i=s(7537),p=s(273),v=s(6263),f=s(5591),c=s(3405),o=s(3556),h=s(6636);function Z(e,n){1&e&&(o.TgZ(0,"div",18),o._uU(1," This field is required "),o.qZA())}function w(e,n){1&e&&(o.TgZ(0,"div",18),o._uU(1," Format is invalid "),o.qZA())}function T(e,n){1&e&&(o.TgZ(0,"div",18),o._uU(1," This field is required "),o.qZA())}function A(e,n){1&e&&(o.TgZ(0,"li"),o._uU(1," Password must be at have at least 8 characters "),o.qZA())}function F(e,n){1&e&&(o.TgZ(0,"li"),o._uU(1," Password must be at have at least 1 number "),o.qZA())}function b(e,n){1&e&&(o.TgZ(0,"li"),o._uU(1," Password must be at have at least 1 lowercase letter "),o.qZA())}function L(e,n){1&e&&(o.TgZ(0,"li"),o._uU(1," Password must be at have at least 1 uppercase letter "),o.qZA())}function y(e,n){1&e&&(o.TgZ(0,"li"),o._uU(1," Password must be at have at least 1 of the following symbols *._%+- "),o.qZA())}const U=[{path:"",component:(()=>{class e{constructor(r,t,l){this.fb=r,this.authService=t,this.router=l,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.destroy$=new p.x,this.createForm()}createForm(){this.loginForm=this.fb.group({email:["",[i.kI.required,i.kI.pattern(this.emailPattern)]],password:["",[i.kI.required]]},{validators:this.validateStrongPassword})}login(){this.loginForm.markAllAsTouched(),this.loginForm.valid&&this.authService.login(this.loginForm.value).pipe((0,v.R)(this.destroy$)).subscribe({next:r=>{var t,l,a;200===(null===(t=null==r?void 0:r.meta)||void 0===t?void 0:t.status)||201===(null===(l=null==r?void 0:r.meta)||void 0===l?void 0:l.status)?this.setLoggedUser(null===(a=null==r?void 0:r.data)||void 0===a?void 0:a.user):(0,c.Ym)()},error:r=>{console.log(r),(0,c.mN)()}})}setLoggedUser(r){const t=new f.n(r.id,r.email,r.created_at,r.updated_at,r.Folders,r.Todos);this.authService.setUser(t),this.authService.getUser()&&this.router.navigateByUrl("/dashboard")}validateStrongPassword(r){const t=r.get("password");t.pristine||(/\d/.test(t.value)?/[a-z]/.test(t.value)?/[A-Z]/.test(t.value)?/[*._%+-]/.test(t.value)?t.value.length<8&&t.setErrors({minlength:!0}):t.setErrors({notSymbols:!0}):t.setErrors({noUppercase:!0}):t.setErrors({noLowercase:!0}):t.setErrors({notDigits:!0}))}showStrongPasswordErrorMsgs(){var r,t,l,a,u;return this.loginForm.controls.password.touched&&((null===(r=this.loginForm.controls.password.errors)||void 0===r?void 0:r.notDigits)||(null===(t=this.loginForm.controls.password.errors)||void 0===t?void 0:t.noLowercase)||(null===(l=this.loginForm.controls.password.errors)||void 0===l?void 0:l.noUppercase)||(null===(a=this.loginForm.controls.password.errors)||void 0===a?void 0:a.notSymbols)||(null===(u=this.loginForm.controls.password.errors)||void 0===u?void 0:u.minlength))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(o.Y36(i.qu),o.Y36(h.e),o.Y36(d.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:33,vars:9,consts:[[1,"card","animate__animated","animate__fadeIn","animate__faster"],[1,"card-header"],[1,"text-center"],[3,"formGroup","ngSubmit"],[1,"card-body"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","id","exampleInputEmail1","aria-describedby","emailHelp","formControlName","email",1,"form-control"],["id","emailHelp",1,"form-text"],["class","form-text text-danger",4,"ngIf"],["for","exampleInputPassword1",1,"form-label"],["type","password","id","exampleInputPassword1","formControlName","password",1,"form-control"],[1,"form-text","text-danger","list-unstyled"],[4,"ngIf"],[1,"card-footer","text-center"],["type","submit",1,"btn","btn-primary"],[1,"form-text","mb-0"],["routerLink","/register"],[1,"form-text","text-danger"]],template:function(r,t){1&r&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h3",2),o._uU(3,"Login"),o.qZA(),o.qZA(),o.TgZ(4,"form",3),o.NdJ("ngSubmit",function(){return t.login()}),o.TgZ(5,"div",4),o.TgZ(6,"div",5),o.TgZ(7,"label",6),o._uU(8,"Email address"),o.qZA(),o._UZ(9,"input",7),o.TgZ(10,"div",8),o._uU(11," We'll never share your email with anyone else. "),o.qZA(),o.YNc(12,Z,2,0,"div",9),o.YNc(13,w,2,0,"div",9),o.qZA(),o.TgZ(14,"div",5),o.TgZ(15,"label",10),o._uU(16,"Password"),o.qZA(),o._UZ(17,"input",11),o.YNc(18,T,2,0,"div",9),o.TgZ(19,"div"),o.TgZ(20,"ul",12),o.YNc(21,A,2,0,"li",13),o.YNc(22,F,2,0,"li",13),o.YNc(23,b,2,0,"li",13),o.YNc(24,L,2,0,"li",13),o.YNc(25,y,2,0,"li",13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(26,"div",14),o.TgZ(27,"button",15),o._uU(28,"Submit"),o.qZA(),o.TgZ(29,"p",16),o._uU(30,"If you dont have an account just "),o.TgZ(31,"a",17),o._uU(32,"Sign up"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&r&&(o.xp6(4),o.Q6J("formGroup",t.loginForm),o.xp6(8),o.Q6J("ngIf",(null==t.loginForm.controls.email.errors?null:t.loginForm.controls.email.errors.required)&&t.loginForm.controls.email.touched),o.xp6(1),o.Q6J("ngIf",(null==t.loginForm.controls.email.errors?null:t.loginForm.controls.email.errors.pattern)&&t.loginForm.controls.email.touched),o.xp6(5),o.Q6J("ngIf",(null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.required)&&t.loginForm.controls.password.touched),o.xp6(3),o.Q6J("ngIf",t.showStrongPasswordErrorMsgs()),o.xp6(1),o.Q6J("ngIf",t.showStrongPasswordErrorMsgs()),o.xp6(1),o.Q6J("ngIf",t.showStrongPasswordErrorMsgs()),o.xp6(1),o.Q6J("ngIf",t.showStrongPasswordErrorMsgs()),o.xp6(1),o.Q6J("ngIf",t.showStrongPasswordErrorMsgs()))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,g.O5,d.yS],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[d.Bz.forChild(U)],d.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[g.ez,S,i.UX,d.Bz]]}),e})()}}]);