import{g as e,j as i}from"./q-ff1dcb46.js";const o=[{text:"Games Browser",id:"games-browser",level:1},{text:"Framework",id:"framework",level:2},{text:"API usage",id:"api-usage",level:2},{text:"Rate Limit",id:"rate-limit",level:3}],n={title:"Games Browser",meta:[],styles:[],links:[],frontmatter:{}},h={title:"Games Browser"};function s(t){const r=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3"},t.components);return e(i,{children:[e(r.h1,{id:"games-browser",children:"Games Browser"}),`
`,e("sl-badge",{variant:"neutral",children:"Draft"}),`
`,e(r.p,{children:"Browser is single page web app that allows users to browse games registry and play games."}),`
`,e(r.h2,{id:"framework",children:"Framework"}),`
`,e(r.p,{children:["Browser should be built using ",e(r.a,{href:"https://svelte.dev/",children:"Svelte"})," framework."]}),`
`,e(r.h2,{id:"api-usage",children:"API usage"}),`
`,e(r.p,{children:["Browser should use Github API to read ",e(r.a,{href:"/docs/games-registry/",children:"Games Registry"})," to retrieve games list and game metadata."]}),`
`,e(r.h3,{id:"rate-limit",children:"Rate Limit"}),`
`,e(r.p,{children:["Possible issue: Github API has a limit of 60 requests per hour per IP address. To resolve this issue, the browser could use a proxy server that would cache the registry and serve it to the browser. However, this would require a server to be hosted somewhere and that would increase the cost of the project. Hosting this server could be done same as for ",e(r.a,{href:"/docs/matchmaking-server/",children:"Matchmaking Server"}),"."]}),`
`,e(r.p,{children:"Another solution could be to ask users to provide their own Github API token (or just login in Github) to increase the limit, but this would make entry barrier higher, while it is important for games browser to be accessible to everyone."})]})}function l(t={}){const{wrapper:r}=t.components||{};return r?e(r,Object.assign({},t,{children:e(s,t)})):s(t)}export{l as default,h as frontmatter,n as head,o as headings};
