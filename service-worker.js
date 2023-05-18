/* Qwik Service Worker */
const appBundles=[["q-000fb4fd.js",[16],["gbTR5s532g0"]],["q-06354c25.js",[10,16,18],["AxynQeeYtSI"]],["q-06593631.js",[16],["4f0j0JlYOoU","6y7o7VSNYDU"]],["q-17d7d623.js",[16],["zQpOYlJkb0s"]],["q-18296c3f.js",[16],["foRSjkQluCc"]],["q-1dc06051.js",[16],["5Go3iiHXUB4","aXA3vNn55QE","D04jAYuCnhM","LkCVrojX09Y"]],["q-22949cf9.js",[],["zwO7CtYmrPQ"]],["q-24bab22e.js",[16,18],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-26e8e895.js",[16],["GOVK6VcjcKI","sqeI0k4E8q4"]],["q-2b4eab28.js",[16,18],["3sccYCDd1Z0"]],["q-2ce66766.js",[]],["q-2e037503.js",[16],["9gV1yuUkB6k"]],["q-315c1516.js",[16]],["q-321d96f2.js",[16],["xYL1qOwPyDI"]],["q-361190ed.js",[16],["A5bZC7WO00A"]],["q-3b31d3a9.js",[16,18,26],["u0bwM0i5dA8"]],["q-3e17a5c2.js",[]],["q-45aab3b6.js",[]],["q-468dde80.js",[16]],["q-56b9fb0f.js",[16,33],["4Q12sQnguZ0","7un8Cxuoe7g","f0cB0S7QJQs"]],["q-5e97f0c5.js",[16],["fle1EaVOup8"]],["q-5ee4235c.js",[10,16,18],["nJlkHBpwP1I"]],["q-60d9c4b6.js",[16]],["q-66b14a7a.js",[16,33],["k0rvS00ivS0","urYmogf0008"]],["q-715d033f.js",[16],["7gzriUtQs98"]],["q-7374898e.js",[16,18],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-77097c20.js",[16,18]],["q-777361e1.js",[10,16,18],["zov20CdSKLU"]],["q-7d846e4d.js",[16,18],["wOIPfiQ04l4"]],["q-8f282ee3.js",[16],["mBt9fIl89mc"]],["q-8fb73f0a.js",[16],["Y06nkxHFI9w"]],["q-91012866.js",[10,16,18],["qgtPW3dQ4Mc"]],["q-9c0bc07e.js",[16,18],["zrbrqoaqXSY"]],["q-9e2476f3.js",[]],["q-a09e97e7.js",[16],["bKnMFxJ3dpg"]],["q-b6e49f1b.js",[16,18],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-bab77daa.js",[16,18],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-bacd5699.js",[10,16,18],["9ZxjQsS5R5U"]],["q-bbdee966.js",[16,33,41],["bCJ2MdoLJwE","C0xj1h5HZtc"]],["q-bbfcf320.js",[16,18],["e0ssiDXoeAM"]],["q-c7a854e5.js",[16,18],["eBQ0vFsFKsk"]],["q-ca3bddd6.js",[16]],["q-d0086b13.js",[16,41],["JKHgMZ4xLZQ","Ku7AU0gi0Go","VkLNXphUh5s"]],["q-d29622ff.js",[16]],["q-e3399bd3.js",[16],["JuIgA4BlaSQ"]],["q-ebf24da0.js",[16],["gRRz00JItKA","kJCtKbc9zbk","NYEDprtA0Lw","UxlJFslpf0s"]],["q-fd976799.js",[16],["dzxzyqdPP1A"]]];
const libraryBundleIds=[35];
const linkBundles=[[/^\/$/,[26,42,12,13]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
