(()=>{var e={};e.id=879,e.ids=[879],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4090:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>u,routeModule:()=>c,tree:()=>d});var s=t(260),n=t(8203),i=t(5155),o=t.n(i),a=t(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);t.d(r,l);let d=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5395)),"/Users/allenlin/queuewebapp/app/signup/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,9611)),"/Users/allenlin/queuewebapp/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"]}],u=["/Users/allenlin/queuewebapp/app/signup/page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5222:(e,r,t)=>{Promise.resolve().then(t.bind(t,5395))},8782:(e,r,t)=>{Promise.resolve().then(t.bind(t,87))},9101:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},6893:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},6487:()=>{},8335:()=>{},87:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(5512),n=t(8009),i=t(8531),o=t.n(i),a=t(9488),l=t(5409),d=t(7699),u=t(7643),p=t(8590);function c(){let[e,r]=(0,n.useState)(""),[t,i]=(0,n.useState)(""),c=r=>{r.preventDefault(),console.log("Signing up with:",{email:e,password:t})};return(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200 flex items-center justify-center",children:(0,s.jsx)(p.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,s.jsxs)(u.Zp,{className:"w-[350px]",children:[(0,s.jsx)(u.aR,{children:(0,s.jsx)(u.ZB,{className:"text-2xl text-center text-purple-800",children:"Sign Up for QueueMaster AI"})}),(0,s.jsx)(u.Wu,{children:(0,s.jsx)("form",{onSubmit:c,children:(0,s.jsxs)("div",{className:"grid w-full items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[(0,s.jsx)(d.J,{htmlFor:"email",children:"Email"}),(0,s.jsx)(l.p,{id:"email",type:"email",placeholder:"Enter your email",value:e,onChange:e=>r(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[(0,s.jsx)(d.J,{htmlFor:"password",children:"Password"}),(0,s.jsx)(l.p,{id:"password",type:"password",placeholder:"Enter your password",value:t,onChange:e=>i(e.target.value),required:!0})]})]})})}),(0,s.jsxs)(u.wL,{className:"flex flex-col space-y-4",children:[(0,s.jsx)(a.$,{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-700",onClick:c,children:"Sign Up"}),(0,s.jsxs)("p",{className:"text-sm text-center text-purple-700",children:["Already have an account?"," ",(0,s.jsx)(o(),{href:"/login",className:"text-purple-800 hover:underline",children:"Log in"})]})]})]})})})}},9488:(e,r,t)=>{"use strict";t.d(r,{$:()=>a});var s=t(5512),n=t(8009),i=t(2281),o=t(4805);let a=n.forwardRef(({className:e,variant:r="default",size:t="default",...n},a)=>(0,s.jsx)("button",{ref:a,className:function(...e){return(0,o.QP)((0,i.$)(e))}("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{default:"bg-primary text-primary-foreground hover:bg-primary/90",ghost:"hover:bg-accent hover:text-accent-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",link:"text-primary underline-offset-4 hover:underline"}[r],{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}[t],e),...n}));a.displayName="Button"},7643:(e,r,t)=>{"use strict";t.d(r,{Wu:()=>l,ZB:()=>a,Zp:()=>i,aR:()=>o,wL:()=>d});var s=t(5512),n=t(8009);let i=n.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:e,...r}));i.displayName="Card";let o=n.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:e,...r}));o.displayName="CardHeader";let a=n.forwardRef(({className:e,...r},t)=>(0,s.jsx)("h3",{ref:t,className:e,...r}));a.displayName="CardTitle";let l=n.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:e,...r}));l.displayName="CardContent";let d=n.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:e,...r}));d.displayName="CardFooter"},5409:(e,r,t)=>{"use strict";t.d(r,{p:()=>n});var s=t(5512);let n=t(8009).forwardRef(({className:e,type:r,...t},n)=>(0,s.jsx)("input",{type:r,className:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e}`,ref:n,...t}));n.displayName="Input"},7699:(e,r,t)=>{"use strict";t.d(r,{J:()=>n});var s=t(5512);let n=t(8009).forwardRef(({className:e,...r},t)=>(0,s.jsx)("label",{ref:t,className:`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${e}`,...r}));n.displayName="Label"},9611:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i,metadata:()=>n});var s=t(2740);let n={title:"Next.js",description:"Generated by Next.js"};function i({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:e})})}},5395:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/allenlin/queuewebapp/app/signup/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/allenlin/queuewebapp/app/signup/page.tsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[403,590,621,531],()=>t(4090));module.exports=s})();