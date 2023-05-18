/* Qwik Service Worker */
const appBundles=[["q-000fb4fd.js",[13],["gbTR5s532g0"]],["q-06593631.js",[13],["4f0j0JlYOoU","6y7o7VSNYDU"]],["q-17d7d623.js",[13],["zQpOYlJkb0s"]],["q-18296c3f.js",[13],["foRSjkQluCc"]],["q-1dc06051.js",[13],["5Go3iiHXUB4","aXA3vNn55QE","D04jAYuCnhM","LkCVrojX09Y"]],["q-214ebe09.js",[13,30],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-22949cf9.js",[],["zwO7CtYmrPQ"]],["q-26e8e895.js",[13],["GOVK6VcjcKI","sqeI0k4E8q4"]],["q-2ce66766.js",[]],["q-2e037503.js",[13],["9gV1yuUkB6k"]],["q-315c1516.js",[13]],["q-321d96f2.js",[13],["xYL1qOwPyDI"]],["q-361190ed.js",[13],["A5bZC7WO00A"]],["q-3e17a5c2.js",[]],["q-45aab3b6.js",[]],["q-50fc85e4.js",[8,13,30],["nJlkHBpwP1I"]],["q-56b9fb0f.js",[13,31],["4Q12sQnguZ0","7un8Cxuoe7g","f0cB0S7QJQs"]],["q-592cea40.js",[13,30],["eBQ0vFsFKsk"]],["q-59a8a16a.js",[8,13,30],["9ZxjQsS5R5U"]],["q-5e97f0c5.js",[13],["fle1EaVOup8"]],["q-66b14a7a.js",[13,31],["k0rvS00ivS0","urYmogf0008"]],["q-715d033f.js",[13],["7gzriUtQs98"]],["q-7d87659a.js",[13,30]],["q-8b5273d0.js",[13,30],["zrbrqoaqXSY"]],["q-8f282ee3.js",[13],["mBt9fIl89mc"]],["q-8fb73f0a.js",[13],["Y06nkxHFI9w"]],["q-92fef23d.js",[8,13,30],["AxynQeeYtSI"]],["q-98c09f96.js",[13,31,41],["bCJ2MdoLJwE","C0xj1h5HZtc"]],["q-98f771e5.js",[13,31,41],["JKHgMZ4xLZQ","Ku7AU0gi0Go","VkLNXphUh5s"]],["q-9ac1879e.js",[13,30],["wOIPfiQ04l4"]],["q-9bb91f8f.js",[13]],["q-9e2476f3.js",[]],["q-a09e97e7.js",[13],["bKnMFxJ3dpg"]],["q-b1057e90.js",[13,30],["e0ssiDXoeAM"]],["q-b605a946.js",[8,13,30],["qgtPW3dQ4Mc"]],["q-bcfbf173.js",[13,30],["3sccYCDd1Z0"]],["q-c4db8646.js",[13,30],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-c5352a64.js",[13]],["q-d0463ff0.js",[13,30],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-d29622ff.js",[13]],["q-ddd82882.js",[13,22,30],["u0bwM0i5dA8"]],["q-e08f6510.js",[13]],["q-e3399bd3.js",[13],["JuIgA4BlaSQ"]],["q-e3b2d506.js",[8,13,30],["zov20CdSKLU"]],["q-e5ac21ae.js",[13,30],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-ebf24da0.js",[13],["gRRz00JItKA","kJCtKbc9zbk","NYEDprtA0Lw","UxlJFslpf0s"]],["q-fd976799.js",[13],["dzxzyqdPP1A"]]];
const libraryBundleIds=[5];
const linkBundles=[[/^\/$/,[22,28,10,11]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
