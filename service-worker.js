/* Qwik Service Worker */
const appBundles=[["q-2029b5d5.js",[29]],["q-2155111d.js",[29]],["q-26f3ad55.js",[29]],["q-307ec18f.js",[0,29],["Ar1Rk0DIWfc","cOJovapykbw"]],["q-42b81fca.js",[29]],["q-42f1775f.js",[29]],["q-45aab3b6.js",[]],["q-4cf52425.js",[29]],["q-51907a12.js",[0,29],["2Eo7WCpaqI8","TxCFOy819ag"]],["q-538484c3.js",[0,29],["WmYC5H00wtI"]],["q-604d9cf5.js",[0,29],["nLbBHlBv5wA","Xat9SdJQ0LI"]],["q-72eb1f12.js",[0,17,29],["BV6DkTrpSeA","tbhdUL5gwn8"]],["q-79ef6f8f.js",[29]],["q-7d6e2fd6.js",[29],["SJXELuV78sw"]],["q-86f04e04.js",[29]],["q-b99329f5.js",[29]],["q-bdb464dc.js",[29]],["q-c6aeaf2f.js",[29],["6Th4x3E4qU0","kftySQvZflM","qTLpr0I01ak"]],["q-c8ffc558.js",[29]],["q-cd08f946.js",[0,29],["29zvpjc3ft0"]],["q-cecfddba.js",[29]],["q-cf90e4f5.js",[29],["g4QrniXOPdY","gtsrV5FOoQE"]],["q-e1b3166e.js",[0,29],["KOwdCDBKKO8"]],["q-e383455f.js",[]],["q-f29d3472.js",[29]],["q-f5d12a53.js",[0,29],["mL01YhwLwfw","UmQ8SS6kQCY"]],["q-f5fc6841.js",[0,29],["AKetNByE5TM"]],["q-f8ec4a47.js",[29]],["q-fe84f4cd.js",[0,29],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-ff1dcb46.js",[]]];
const libraryBundleIds=[14];
const linkBundles=[[/^\/$/,[15,17,16,13]],[/^\/docs\/games-browser\/?$/,[15,17,12,18]],[/^\/docs\/games-registry\/?$/,[15,17,12,2]],[/^\/docs\/matchmaking-server\/?$/,[15,17,12,1]],[/^\/docs\/multiplayer-sdk\/?$/,[15,17,12,5]],[/^\/docs\/vs-code-extension\/?$/,[15,17,12,27]],[/^\/about\/?$/,[15,17,20]],[/^\/docs\/?$/,[15,17,12,24]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
