(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8043],{44680:function(e,r,t){Promise.resolve().then(t.bind(t,4791))},99268:function(e,r,t){"use strict";t.d(r,{I:function(){return a}});var n=t(57437),s=t(52373);let a=e=>{let{className:r}=e;return(0,n.jsx)(s.b,{className:r,externalLink:"https://tabby.tabbyml.com/blog/2023/10/16/repository-context-for-code-completion",children:"Connect to Git repositories and uses these repositories as a context to enhance performance of large language model."})}},4791:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var n=t(57437),s=t(61396),a=t.n(s),l=t(93023),i=t(99268),o=t(2265),d=t(71424),c=t(99109),u=t(61985),f=t(60106),m=t(7820),x=t(57166),h=t(84168),v=t(91320),p=t(32553),g=t(93111);let j=(0,f.BX)("\n  mutation deleteRepository($id: ID!) {\n    deleteRepository(id: $id)\n  }\n"),b=u.L;function N(){var e,r;let t=(0,c.m8)(),[{data:s,error:a,fetching:i,stale:u}]=(0,c.aM)({query:x.S1,variables:{first:b}}),[f]=(0,m.io)({data:s,error:a,stale:u}),[N,y]=o.useState(1),w=null==s?void 0:null===(e=s.repositories)||void 0===e?void 0:e.edges,R=null==s?void 0:null===(r=s.repositories)||void 0===r?void 0:r.pageInfo,C=Math.ceil(((null==w?void 0:w.length)||0)/b),k=o.useMemo(()=>{var e;return null==w?void 0:null===(e=w.slice)||void 0===e?void 0:e.call(w,(N-1)*b,N*b)},[N,w]),P=(null==R?void 0:R.hasNextPage)||N<C,I=N>1,T=!!(null==k?void 0:k.length)&&(P||I),_=e=>t.query(x.S1,e).toPromise(),L=(0,m.Db)(j),S=e=>{L({id:e.id}).then(e=>{if(null==e?void 0:e.error){d.A.error(e.error.message);return}})};return o.useEffect(()=>{C<N&&N>1&&y(C)},[C,N]),(0,n.jsx)("div",{children:f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(p.iA,{className:"table-fixed border-b",children:[(0,n.jsx)(p.xD,{children:(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.ss,{className:"w-[25%]",children:"Name"}),(0,n.jsx)(p.ss,{children:"Git URL"}),(0,n.jsx)(p.ss,{className:"w-[100px]"})]})}),(0,n.jsx)(p.RM,{children:(null==k?void 0:k.length)||1!==N?(0,n.jsx)(n.Fragment,{children:null==k?void 0:k.map(e=>(0,n.jsxs)(p.SC,{children:[(0,n.jsx)(p.pj,{className:"truncate",children:e.node.name}),(0,n.jsx)(p.pj,{className:"truncate",children:e.node.gitUrl}),(0,n.jsx)(p.pj,{className:"flex justify-end",children:(0,n.jsx)("div",{className:"flex gap-1",children:(0,n.jsx)(l.z,{size:"icon",variant:"hover-destructive",onClick:()=>S(e.node),children:(0,n.jsx)(h.IconTrash,{})})})})]},e.node.id))}):(0,n.jsx)(p.SC,{children:(0,n.jsx)(p.pj,{colSpan:3,className:"h-[100px] text-center",children:"No Data"})})})]}),T&&(0,n.jsx)(v.tl,{className:"my-4",children:(0,n.jsxs)(v.ng,{children:[(0,n.jsx)(v.nt,{children:(0,n.jsx)(v.dN,{disabled:!I,onClick:()=>{!(N<=1)&&(i||y(e=>e-1))}})}),(0,n.jsx)(v.nt,{children:(0,n.jsx)(v.$0,{disabled:!P,onClick:()=>{P&&(i||_({first:b,after:null==R?void 0:R.endCursor}).then(e=>{var r,t,n;(null==e?void 0:null===(n=e.data)||void 0===n?void 0:null===(t=n.repositories)||void 0===t?void 0:null===(r=t.edges)||void 0===r?void 0:r.length)&&y(e=>e+1)}))}})})]})})]}):(0,n.jsx)(g.c,{})})}function y(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.I,{}),(0,n.jsx)(N,{}),(0,n.jsx)("div",{className:"mt-4 flex justify-end",children:(0,n.jsx)(a(),{href:"/settings/git/new",className:(0,l.d)(),children:"Create"})})]})}},93111:function(e,r,t){"use strict";t.d(r,{c:function(){return a}});var n=t(57437),s=t(25645);let a=()=>(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"}),(0,n.jsx)(s.O,{className:"h-4 w-full"})]})},52373:function(e,r,t){"use strict";t.d(r,{b:function(){return o}});var n=t(57437);t(2265);var s=t(61396),a=t.n(s),l=t(39311),i=t(84168);let o=e=>{let{className:r,externalLink:t,externalLinkText:s="Learn more",children:o}=e;return(0,n.jsx)("div",{className:(0,l.cn)("mb-4 flex items-center gap-4",r),children:(0,n.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[o,!!t&&(0,n.jsxs)(a(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:t,target:"_blank",children:[s,(0,n.jsx)(i.IconExternalLink,{className:"ml-1"})]})]})})}},93023:function(e,r,t){"use strict";t.d(r,{d:function(){return o},z:function(){return d}});var n=t(57437),s=t(2265),a=t(67256),l=t(7404),i=t(39311);let o=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:l,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(o({variant:s,size:l,className:t})),ref:r,...c})});d.displayName="Button"},91320:function(e,r,t){"use strict";t.d(r,{$0:function(){return m},dN:function(){return f},ng:function(){return d},nt:function(){return c},tl:function(){return o}});var n=t(57437),s=t(2265),a=t(39311),l=t(93023),i=t(84168);let o=e=>{let{className:r,...t}=e;return(0,n.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,a.cn)("mx-auto flex w-full justify-center",r),...t})};o.displayName="Pagination";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("ul",{ref:r,className:(0,a.cn)("flex flex-row items-center gap-1",t),...s})});d.displayName="PaginationContent";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("li",{ref:r,className:(0,a.cn)("",t),...s})});c.displayName="PaginationItem";let u=e=>{let{className:r,isActive:t,size:s="icon",...i}=e;return(0,n.jsx)("a",{"aria-current":t?"page":void 0,className:(0,a.cn)((0,l.d)({variant:t?"outline":"ghost",size:s}),r),...i})};u.displayName="PaginationLink";let f=e=>{let{className:r,disabled:t,...s}=e;return(0,n.jsxs)(u,{"aria-label":"Go to previous page",size:"default",className:(0,a.cn)("cursor-pointer gap-1 pl-2.5",t&&"cursor-not-allowed text-muted-foreground",r),...s,children:[(0,n.jsx)(i.IconChevronLeft,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let m=e=>{let{className:r,disabled:t,...s}=e;return(0,n.jsxs)(u,{"aria-label":"Go to next page",size:"default",className:(0,a.cn)("cursor-pointer gap-1 pr-2.5",t&&"cursor-not-allowed text-muted-foreground",r),...s,children:[(0,n.jsx)("span",{children:"Next"}),(0,n.jsx)(i.IconChevronRight,{className:"h-4 w-4"})]})};m.displayName="PaginationNext"},25645:function(e,r,t){"use strict";t.d(r,{O:function(){return a}});var n=t(57437),s=t(39311);function a(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},32553:function(e,r,t){"use strict";t.d(r,{RM:function(){return o},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return u},xD:function(){return i}});var n=t(57437),s=t(2265),a=t(39311);let l=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("table",{ref:r,className:(0,a.cn)("w-full caption-bottom text-sm",t),...s})});l.displayName="Table";let i=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("thead",{ref:r,className:(0,a.cn)("[&_tr]:border-b",t),...s})});i.displayName="TableHeader";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tbody",{ref:r,className:(0,a.cn)("[&_tr:last-child]:border-0",t),...s})});o.displayName="TableBody";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tfoot",{ref:r,className:(0,a.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s})});d.displayName="TableFooter";let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("tr",{ref:r,className:(0,a.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s})});c.displayName="TableRow";let u=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("th",{ref:r,className:(0,a.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...s})});u.displayName="TableHead";let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("td",{ref:r,className:(0,a.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...s})});f.displayName="TableCell";let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("caption",{ref:r,className:(0,a.cn)("mt-4 text-sm text-muted-foreground",t),...s})});m.displayName="TableCaption"},61985:function(e,r,t){"use strict";t.d(r,{L:function(){return s},o:function(){return n}});let n="name@yourcompany.com",s=20}},function(e){e.O(0,[3529,4762,1424,2363,7753,4168,7820,2971,7864,1744],function(){return e(e.s=44680)}),_N_E=e.O()}]);