(()=>{var e={};e.id=702,e.ids=[702],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},168:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),s(8256),s(2029),s(5866);var r=s(3191),a=s(8716),l=s(7922),i=s.n(l),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let d=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8256)),"/Users/allenlin/queuewebapp/frontend/src/app/dashboard/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,2029)),"/Users/allenlin/queuewebapp/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/allenlin/queuewebapp/frontend/src/app/dashboard/page.tsx"],u="/dashboard/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7708:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8166:()=>{},5300:(e,t,s)=>{Promise.resolve().then(s.bind(s,7932))},6557:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(7577),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let s=(0,r.forwardRef)(({color:s="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:d="",children:c,...u},p)=>(0,r.createElement)("svg",{ref:p,...a,width:i,height:i,stroke:s,strokeWidth:o?24*Number(n)/Number(i):n,className:["lucide",`lucide-${l(e)}`,d].join(" "),...u},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return s.displayName=`${e}`,s}},8998:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=(0,s(6557).Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},7932:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var r=s(326),a=s(7577),l=s(3016),i=s(1190),n=s(4794);let o=a.forwardRef(({className:e,...t},s)=>r.jsx("textarea",{ref:s,className:`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e}`,...t}));o.displayName="Textarea";var d=s(9752),c=s(1135),u=s(1009);let p=a.forwardRef(({className:e,variant:t="default",...s},a)=>r.jsx("div",{ref:a,className:function(...e){return(0,u.m6)((0,c.W)(e))}("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",{default:"bg-gray-100 text-gray-800",success:"bg-green-100 text-green-800",warning:"bg-yellow-100 text-yellow-800"}[t],e),...s}));p.displayName="Badge";var x=s(6557);let m=(0,x.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),h=(0,x.Z)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),f=(0,x.Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);var g=s(8998),b=s(4891);function y(){let[e,t]=(0,a.useState)(""),[s,c]=(0,a.useState)(""),[u,x]=(0,a.useState)(""),[y,v]=(0,a.useState)([]),[j,N]=(0,a.useState)([]),w=s=>{s.preventDefault();let r={id:Date.now(),name:e,status:"Waiting",position:null};v(e=>[...e,r]);let a={id:Date.now(),message:`${e}: Bot created and waiting in queue`,type:"info"};N(e=>[...e,a]),t(""),c(""),x("")},k=y.filter(e=>"Completed"===e.status).length,P=y.filter(e=>"In Queue"===e.status||"Waiting"===e.status).length,C=y.length;return(0,r.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200 p-8",children:[r.jsx("h1",{className:"text-4xl font-bold text-purple-800 mb-8",children:"QueueMaster AI Dashboard"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,r.jsxs)("div",{className:"space-y-8",children:[r.jsx(b.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,r.jsxs)(d.Zb,{children:[r.jsx(d.Ol,{children:r.jsx(d.ll,{className:"text-2xl text-purple-800",children:"Create AI Queue Bot"})}),r.jsx(d.aY,{children:r.jsx("form",{onSubmit:w,children:(0,r.jsxs)("div",{className:"grid w-full items-center gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[r.jsx(n._,{htmlFor:"name",children:"Bot Name"}),r.jsx(i.I,{id:"name",placeholder:"Enter bot name",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[r.jsx(n._,{htmlFor:"url",children:"Queue URL"}),r.jsx(i.I,{id:"url",placeholder:"https://example.com/queue",value:s,onChange:e=>c(e.target.value),required:!0})]}),(0,r.jsxs)("div",{className:"flex flex-col space-y-1.5",children:[r.jsx(n._,{htmlFor:"instructions",children:"Instructions"}),r.jsx(o,{id:"instructions",placeholder:"Enter specific instructions for the bot",value:u,onChange:e=>x(e.target.value),required:!0})]})]})})}),r.jsx(d.eW,{children:(0,r.jsxs)(l.z,{type:"submit",onClick:w,className:"w-full bg-purple-600 hover:bg-purple-700",children:[r.jsx(m,{className:"mr-2 h-4 w-4"})," Create Bot"]})})]})}),r.jsx(b.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:(0,r.jsxs)(d.Zb,{children:[r.jsx(d.Ol,{children:r.jsx(d.ll,{className:"text-2xl text-purple-800",children:"Active Bots"})}),r.jsx(d.aY,{children:r.jsx("ul",{className:"space-y-4",children:y.map((e,t)=>(0,r.jsxs)(b.E.li,{className:"flex items-center justify-between p-4 bg-white rounded-lg shadow",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.1*t},children:[(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"font-semibold text-purple-800",children:e.name}),(0,r.jsxs)("p",{className:"text-sm text-purple-600",children:["Status: ",e.status,e.position&&` (Position: ${e.position})`]})]}),r.jsx(p,{variant:"Completed"===e.status?"success":"default",children:e.status})]},e.id))})})]})})]}),r.jsx(b.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:(0,r.jsxs)(d.Zb,{className:"h-full",children:[r.jsx(d.Ol,{children:r.jsx(d.ll,{className:"text-2xl text-purple-800",children:"Dashboard"})}),(0,r.jsxs)(d.aY,{children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-4 mb-8",children:[r.jsx(d.Zb,{children:(0,r.jsxs)(d.aY,{className:"flex flex-col items-center justify-center p-6",children:[r.jsx(h,{className:"h-12 w-12 text-purple-600 mb-2"}),r.jsx("p",{className:"text-2xl font-bold text-purple-800",children:C}),r.jsx("p",{className:"text-sm text-purple-600",children:"Active Bots"})]})}),r.jsx(d.Zb,{children:(0,r.jsxs)(d.aY,{className:"flex flex-col items-center justify-center p-6",children:[r.jsx(f,{className:"h-12 w-12 text-green-500 mb-2"}),r.jsx("p",{className:"text-2xl font-bold text-purple-800",children:k}),r.jsx("p",{className:"text-sm text-purple-600",children:"Completed"})]})}),r.jsx(d.Zb,{children:(0,r.jsxs)(d.aY,{className:"flex flex-col items-center justify-center p-6",children:[r.jsx(g.Z,{className:"h-12 w-12 text-yellow-500 mb-2"}),r.jsx("p",{className:"text-2xl font-bold text-purple-800",children:P}),r.jsx("p",{className:"text-sm text-purple-600",children:"In Progress"})]})})]}),r.jsx("h3",{className:"text-lg font-semibold mb-4 text-purple-800",children:"Recent Notifications"}),r.jsx("ul",{className:"space-y-4",children:j.map((e,t)=>(0,r.jsxs)(b.E.li,{className:"flex items-center justify-between p-4 bg-white rounded-lg shadow",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.1*t},children:[r.jsx("p",{className:"text-sm text-purple-700",children:e.message}),r.jsx(p,{variant:"success"===e.type?"success":"warning"===e.type?"warning":"default",children:e.type})]},e.id))})]})]})})]})]})}},3016:(e,t,s)=>{"use strict";s.d(t,{z:()=>n});var r=s(326),a=s(7577),l=s(1135),i=s(1009);let n=a.forwardRef(({className:e,variant:t="default",size:s="default",...a},n)=>r.jsx("button",{ref:n,className:function(...e){return(0,i.m6)((0,l.W)(e))}("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{default:"bg-primary text-primary-foreground hover:bg-primary/90",ghost:"hover:bg-accent hover:text-accent-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",link:"text-primary underline-offset-4 hover:underline"}[t],{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}[s],e),...a}));n.displayName="Button"},9752:(e,t,s)=>{"use strict";s.d(t,{Ol:()=>i,Zb:()=>l,aY:()=>o,eW:()=>d,ll:()=>n});var r=s(326),a=s(7577);let l=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:e,...t}));l.displayName="Card";let i=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:e,...t}));i.displayName="CardHeader";let n=a.forwardRef(({className:e,...t},s)=>r.jsx("h3",{ref:s,className:e,...t}));n.displayName="CardTitle";let o=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:e,...t}));o.displayName="CardContent";let d=a.forwardRef(({className:e,...t},s)=>r.jsx("div",{ref:s,className:e,...t}));d.displayName="CardFooter"},1190:(e,t,s)=>{"use strict";s.d(t,{I:()=>a});var r=s(326);let a=s(7577).forwardRef(({className:e,type:t,...s},a)=>r.jsx("input",{type:t,className:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e}`,ref:a,...s}));a.displayName="Input"},4794:(e,t,s)=>{"use strict";s.d(t,{_:()=>a});var r=s(326);let a=s(7577).forwardRef(({className:e,...t},s)=>r.jsx("label",{ref:s,className:`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${e}`,...t}));a.displayName="Label"},8256:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(8570).createProxy)(String.raw`/Users/allenlin/queuewebapp/frontend/src/app/dashboard/page.tsx#default`)},2029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>i});var r=s(9510),a=s(5317),l=s.n(a);s(1159),s(4315);let i={title:"QueueMaster AI - Your Intelligent Queue Assistant",description:"Revolutionize your waiting experience with AI-powered queue management for concerts, classes, and theme parks."};function n({children:e}){return r.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:r.jsx("body",{className:`${l().className} min-h-screen bg-background antialiased`,children:r.jsx("main",{className:"relative flex min-h-screen flex-col",children:r.jsx("div",{className:"flex-1 container py-8",children:e})})})})}},4315:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[975,916],()=>s(168));module.exports=r})();