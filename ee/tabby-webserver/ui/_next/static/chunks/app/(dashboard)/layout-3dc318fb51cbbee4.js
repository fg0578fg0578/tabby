(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5642],{6435:function(e,t,n){"use strict";n.d(t,{F:function(){return d},f:function(){return c}});var r=n(2265);let s=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,o=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},d=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:l},c=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:l="theme",themes:d=u,defaultTheme:c=n?"system":"light",attribute:m="data-theme",value:x,children:v,nonce:b})=>{let[y,j]=(0,r.useState)(()=>h(l,c)),[w,N]=(0,r.useState)(()=>h(l)),A=x?Object.values(x):d,k=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());let a=x?x[r]:r,o=t?p():null,l=document.documentElement;if("class"===m?(l.classList.remove(...A),a&&l.classList.add(a)):a?l.setAttribute(m,a):l.removeAttribute(m),i){let e=s.includes(c)?c:null,t=s.includes(r)?r:e;l.style.colorScheme=t}null==o||o()},[]),C=(0,r.useCallback)(e=>{j(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),E=(0,r.useCallback)(t=>{let r=g(t);N(r),"system"===y&&n&&!e&&k("system")},[y,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&C(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{k(null!=e?e:y)},[e,y]);let S=(0,r.useMemo)(()=>({theme:y,setTheme:C,forcedTheme:e,resolvedTheme:"system"===y?w:y,themes:n?[...d,"system"]:d,systemTheme:n?w:void 0}),[y,C,e,w,n,d]);return r.createElement(o.Provider,{value:S},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:l,themes:d,defaultTheme:c,attribute:m,value:x,children:v,attrs:A,nonce:b}),v)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:o,defaultTheme:l,value:d,attrs:c,nonce:u})=>{let m="system"===l,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=o?s.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let a=d?d[e]:e,i=t?e+"|| ''":`'${a}'`,l="";return o&&r&&!t&&s.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||a?`c.add(${i})`:"null":a&&(l+=`d[s](n,${i})`),l},g=e?`!function(){${f}${p(e)}}()`:i?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${p(d?"x[e]":"e",!0)}}${m?"":"else{"+p(l,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${p(d?"x[e]":"e",!0)}}else{${p(l,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},34602:function(e,t,n){Promise.resolve().then(n.bind(n,15836)),Promise.resolve().then(n.bind(n,2961))},15836:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(57437),s=n(2265),a=n(16691),i=n.n(a),o=n(61396),l=n.n(o),d=n(24033),c={src:"/_next/static/media/logo-dark.362a169d.png",height:149,width:395,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOklEQVR42gXAIQqAMBQA0A+K3eIVHNhEk21Wk5iN4g6w6z9GyBaDZDLr9OH0qD6/4nWHUZLtNqvL0QDmsR1AxwcSfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},u={src:"/_next/static/media/logo.526f7cf9.png",height:184,width:607,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGPsKQh1f/HshV/PqtNtagrC8p++//rDAgQM//9/ZWJifMZYnRqg9+bVq6iZ51+1SP/5ovH//z8eRgbGbwyMjPxA9n0AMi8g2L1xUkUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},m=n(7404),f=n(58001),h=n(39311),p=n(13428),g=n(85744),x=n(56989),v=n(73763),b=n(51030),y=n(42210),j=n(9381),w=n(85606),N=n(20966);let A="Collapsible",[k,C]=(0,x.b)(A),[E,S]=k(A),$=(0,s.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:r,defaultOpen:a,disabled:i,onOpenChange:o,...l}=e,[d=!1,c]=(0,v.T)({prop:r,defaultProp:a,onChange:o});return(0,s.createElement)(E,{scope:n,disabled:i,contentId:(0,N.M)(),open:d,onOpenToggle:(0,s.useCallback)(()=>c(e=>!e),[c])},(0,s.createElement)(j.WV.div,(0,p.Z)({"data-state":O(d),"data-disabled":i?"":void 0},l,{ref:t})))}),I=(0,s.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...r}=e,a=S("CollapsibleTrigger",n);return(0,s.createElement)(j.WV.button,(0,p.Z)({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":O(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},r,{ref:t,onClick:(0,g.M)(e.onClick,a.onOpenToggle)}))}),T="CollapsibleContent",R=(0,s.forwardRef)((e,t)=>{let{forceMount:n,...r}=e,a=S(T,e.__scopeCollapsible);return(0,s.createElement)(w.z,{present:n||a.open},({present:e})=>(0,s.createElement)(_,(0,p.Z)({},r,{ref:t,present:e})))}),_=(0,s.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:r,children:a,...i}=e,o=S(T,n),[l,d]=(0,s.useState)(r),c=(0,s.useRef)(null),u=(0,y.e)(t,c),m=(0,s.useRef)(0),f=m.current,h=(0,s.useRef)(0),g=h.current,x=o.open||l,v=(0,s.useRef)(x),w=(0,s.useRef)();return(0,s.useEffect)(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,b.b)(()=>{let e=c.current;if(e){w.current=w.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();m.current=t.height,h.current=t.width,v.current||(e.style.transitionDuration=w.current.transitionDuration,e.style.animationName=w.current.animationName),d(r)}},[o.open,r]),(0,s.createElement)(j.WV.div,(0,p.Z)({"data-state":O(o.open),"data-disabled":o.disabled?"":void 0,id:o.contentId,hidden:!x},i,{ref:u,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":g?`${g}px`:void 0,...e.style}}),x&&a)});function O(e){return e?"open":"closed"}var D=n(84168);function L(e){let{children:t,className:n}=e,{data:s}=(0,f.kP)(),a=(null==s?void 0:s.isAdmin)||!1;return(0,r.jsx)("div",{className:(0,h.cn)("grid overflow-hidden md:grid-cols-[280px_1fr]",n),children:(0,r.jsx)("div",{className:"fixed inset-y-0 left-0 hidden w-[280px] border-r pt-4 md:block",children:(0,r.jsxs)("nav",{className:"flex h-full flex-col overflow-hidden text-sm font-medium",children:[(0,r.jsxs)(l(),{href:"/",className:"flex justify-center pb-4",children:[(0,r.jsx)(i(),{src:u,alt:"logo",width:128,className:"dark:hidden"}),(0,r.jsx)(i(),{src:c,alt:"logo",width:96,className:"hidden dark:block"})]}),(0,r.jsx)("div",{className:"flex-1 overflow-y-auto",children:(0,r.jsxs)("div",{className:"flex flex-col gap-2 px-4 pb-4",children:[(0,r.jsxs)(P,{href:"/",children:[(0,r.jsx)(D.IconHome,{})," Home"]}),(0,r.jsxs)(P,{href:"/profile",children:[(0,r.jsx)(D.IconUser,{})," Profile"]}),a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(P,{href:"/cluster",children:[(0,r.jsx)(D.IconNetwork,{})," Cluster Information"]}),(0,r.jsxs)(P,{href:"/jobs",children:[(0,r.jsx)(D.IconScrollText,{}),"Jobs"]}),(0,r.jsxs)(V,{title:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.IconGear,{}),"Settings"]}),children:[(0,r.jsx)(P,{href:"/settings/general",children:"General"}),(0,r.jsx)(P,{href:"/settings/team",children:"Members"}),(0,r.jsx)(P,{href:"/settings/subscription",children:"Subscription"})]}),(0,r.jsxs)(V,{title:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.IconLightingBolt,{}),"Integrations"]}),children:[(0,r.jsx)(P,{href:"/settings/git",children:"Git Providers"}),(0,r.jsx)(P,{href:"/settings/sso",children:"SSO"}),(0,r.jsx)(P,{href:"/settings/mail",children:"Mail Delivery"})]})]})]})})]})})})}let M=(0,m.j)("flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-accent",{variants:{state:{selected:"bg-accent","not-selected":""}},defaultVariants:{state:"not-selected"}});function P(e){let{href:t,children:n}=e,a=(0,d.usePathname)(),i=s.useMemo(()=>"/"===t?t===a:null==a?void 0:a.startsWith(t),[a,t]);return(0,r.jsx)(l(),{className:M({state:i?"selected":"not-selected"}),href:t,children:n})}function V(e){let{title:t,children:n,defaultOpen:s=!0}=e;return(0,r.jsxs)($,{defaultOpen:s,className:"[&_svg.ml-auto]:data-[state=open]:rotate-90",children:[(0,r.jsx)(I,{className:"w-full",children:(0,r.jsxs)("span",{className:M(),children:[t,(0,r.jsx)(D.IconChevronRight,{className:"ml-auto"})]})}),(0,r.jsx)(R,{className:"ml-7 flex flex-col gap-1 data-[state=open]:py-1",children:n})]})}},2961:function(e,t,n){"use strict";n.r(t),n.d(t,{Header:function(){return $}});var r=n(57437),s=n(2265);let a=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,i=e=>{if("string"!=typeof e)throw TypeError("Invalid argument expected string");let t=e.match(a);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},o=e=>"*"===e||"x"===e||"X"===e,l=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},d=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],c=(e,t)=>{if(o(e)||o(t))return 0;let[n,r]=d(l(e),l(t));return n>r?1:n<r?-1:0},u=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){let r=c(e[n]||"0",t[n]||"0");if(0!==r)return r}return 0},m=(e,t)=>{let n=i(e),r=i(t),s=n.pop(),a=r.pop(),o=u(n,r);return 0!==o?o:s&&a?u(s.split("."),a.split(".")):s||a?s?-1:1:0},f=(e,t,n)=>{g(n);let r=m(e,t);return h[n].includes(r)},h={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},p=Object.keys(h),g=e=>{if("string"!=typeof e)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(-1===p.indexOf(e))throw Error(`Invalid operator, expected one of ${p.join("|")}`)};var x=n(13287),v=n(1589),b=n(93023),y=n(84168),j=n(6435);function w(){let{setTheme:e,theme:t}=(0,j.F)(),[n,a]=s.useTransition();return(0,r.jsxs)(b.z,{variant:"ghost",size:"icon",onClick:()=>{a(()=>{e("light"===t?"dark":"light")})},children:["dark"===t?(0,r.jsx)(y.IconMoon,{className:"transition-all"}):(0,r.jsx)(y.IconSun,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}var N=n(11372),A=n(10356),k=n(19567),C=n(58001),E=n(56434);function S(){let e=(0,C.QJ)(),[{data:t}]=(0,A.P)(),n=null==t?void 0:t.me,s=(0,k.xG)();if(!n)return;let a=(0,N.B)(n.email);return(0,r.jsxs)(E.h_,{children:[(0,r.jsx)(E.$F,{children:(0,r.jsx)("span",{className:"flex h-10 w-10 rounded-full border",children:(0,r.jsx)(N.Z,{className:"w-full",...a})})}),(0,r.jsxs)(E.AW,{collisionPadding:{right:16},children:[(0,r.jsx)(E.Ju,{children:n.email}),(0,r.jsx)(E.VD,{}),s&&(0,r.jsxs)(E.Xi,{onClick:()=>window.open("/playground"),className:"cursor-pointer",children:[(0,r.jsx)(y.IconChat,{}),(0,r.jsx)("span",{className:"ml-2",children:"Chat Playground"})]}),(0,r.jsxs)(E.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer",children:[(0,r.jsx)(y.IconCode,{}),(0,r.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,r.jsxs)(E.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer",children:[(0,r.jsx)(y.IconBackpack,{}),(0,r.jsx)("span",{className:"ml-2",children:"API Docs"})]}),(0,r.jsx)(E.VD,{}),(0,r.jsxs)(E.Xi,{onClick:e,className:"cursor-pointer",children:[(0,r.jsx)(y.IconLogout,{}),(0,r.jsx)("span",{className:"ml-2",children:"Logout"})]})]})]})}function $(){var e;let{data:t}=(0,x.Q)(),n=null==t?void 0:null===(e=t.version)||void 0===e?void 0:e.git_describe,{data:s}=(0,v.Z)("https://api.github.com/repos/TabbyML/tabby/releases/latest",e=>fetch(e).then(e=>e.json())),a=function(e,t){try{return e&&t&&f(t.name,e,">")}catch(e){return console.warn(e),!0}}(n,s);return(0,r.jsxs)("header",{className:"sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b px-4 backdrop-blur-xl",children:[(0,r.jsx)("div",{className:"flex items-center",children:a&&(0,r.jsxs)("a",{target:"_blank",href:"https://github.com/TabbyML/tabby/releases/latest",rel:"noopener noreferrer",className:(0,b.d)({variant:"ghost"}),children:[(0,r.jsx)(y.IconNotice,{className:"text-yellow-600 dark:text-yellow-400"}),(0,r.jsxs)("span",{className:"ml-2 hidden md:flex",children:["New version (",null==s?void 0:s.name,") available"]})]})}),(0,r.jsxs)("div",{className:"flex items-center justify-center gap-6",children:[(0,r.jsx)(w,{}),(0,r.jsx)(S,{})]})]})}},93023:function(e,t,n){"use strict";n.d(t,{d:function(){return l},z:function(){return d}});var r=n(57437),s=n(2265),a=n(67256),i=n(7404),o=n(39311);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:n,variant:s,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:n})),ref:t,...c})});d.displayName="Button"},56434:function(e,t,n){"use strict";n.d(t,{$F:function(){return l},AW:function(){return c},Ju:function(){return m},VD:function(){return f},Xi:function(){return u},h_:function(){return o}});var r=n(57437),s=n(2265),a=n(5782),i=n(39311);let o=a.fC,l=a.xz;a.ZA,a.Uv,a.Tr,a.Ee;let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.tu,{ref:t,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...s})});d.displayName=a.tu.displayName;let c=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...o}=e;return(0,r.jsx)(a.Uv,{children:(0,r.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})})});c.displayName=a.VY.displayName;let u=s.forwardRef((e,t)=>{let{className:n,inset:s,...o}=e;return(0,r.jsx)(a.ck,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...o})});u.displayName=a.ck.displayName;let m=s.forwardRef((e,t)=>{let{className:n,inset:s,...o}=e;return(0,r.jsx)(a.__,{ref:t,className:(0,i.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",n),...o})});m.displayName=a.__.displayName;let f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Z0,{ref:t,className:(0,i.cn)("-mx-1 my-1 h-px bg-muted",n),...s})});f.displayName=a.Z0.displayName},13287:function(e,t,n){"use strict";n.d(t,{Q:function(){return a}});var r=n(30713),s=n(1592);function a(){return(0,r.ZP)("/v1/health",s.Z)}},1592:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(34084),s=n(58001),a=n(7820);let i=!1,o=[];async function l(e,t){let n=await fetch(e,d(t));if(401!==n.status)return(null==t?void 0:t.format)==="text"?n.text():n.json();{var r,a;if(i)return new Promise(n=>{o.push({url:e,init:t,resolve:n})});let n=null===(r=(0,s.bW)())||void 0===r?void 0:r.refreshToken;if(!n){(0,s.Rn)();return}i=!0;let l=await c(n),d=null==l?void 0:null===(a=l.data)||void 0===a?void 0:a.refreshToken;if(d){for((0,s.pC)({accessToken:d.accessToken,refreshToken:d.refreshToken}),i=!1;o.length;){let e=o.shift();null==e||e.resolve(u(e.url,e.init))}return u(e,t)}i=!1,o.length=0,(0,s.Rn)()}}function d(e){var t;let n=new Headers(null==e?void 0:e.headers);return n.append("authorization","Bearer ".concat(null===(t=(0,s.bW)())||void 0===t?void 0:t.accessToken)),{...e||{},headers:n}}async function c(e){let t=a.Lp.createRequestOperation("mutation",(0,r.h)(s.Dp,{refreshToken:e}));return a.Lp.executeMutation(t)}function u(e,t){return fetch(e,d(t)).then(e=>(null==t?void 0:t.format)==="text"?e.text():e.json())}},1589:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(30713),s=n(44796);let a=(0,s.xD)(r.ZP,e=>(t,n,r)=>(r.revalidateOnFocus=!1,r.revalidateIfStale=!1,r.revalidateOnReconnect=!1,e(t,n,r)))}},function(e){e.O(0,[3529,4762,2363,3072,2699,7070,3714,713,1372,5782,6691,7753,4168,7820,2971,7864,1744],function(){return e(e.s=34602)}),_N_E=e.O()}]);