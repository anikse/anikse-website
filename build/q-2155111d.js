import{g as e,j as r}from"./q-ff1dcb46.js";const s=[{text:"Matchmaking Server",id:"matchmaking-server",level:1},{text:"Hosting",id:"hosting",level:2},{text:"API",id:"api",level:2}],o={title:"Matchmaking Server",meta:[],styles:[],links:[],frontmatter:{}},h={title:"Matchmaking Server"};function i(n){const t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2"},n.components);return e(r,{children:[e(t.h1,{id:"matchmaking-server",children:"Matchmaking Server"}),`
`,e("sl-badge",{variant:"neutral",children:"Draft"}),`
`,e(t.p,{children:"Server should be a very simple and lightweight CRUD API that allows users to find other users to play with. Server should take into account the game metadata from registry such as number of players, and other parameters."}),`
`,e(t.p,{children:"Server should be able to:"}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:"Register a new game host instance"}),`
`,e(t.li,{children:"Find active game sessions"}),`
`,e(t.li,{children:"Change host of the game session (when host leaves)"}),`
`]}),`
`,e(t.p,{children:"For storage service should use Redis. At first it should be a simple in-memory store, but later Redis persistence could potentially be added in case of server restarts."}),`
`,e(t.h2,{id:"hosting",children:"Hosting"}),`
`,e(t.p,{children:"Use any cloud with VM support to host the server."}),`
`,e(t.p,{children:"Implement backend on Rust to keep it lightweight and reduce operational costs to bare minimum."}),`
`,e(t.p,{children:`Keep both service and Redis in the same VM, so that they can share the same network interface and communicate via localhost.
Later if needed Redis could be moved to a separate VM or cloud service.`}),`
`,e(t.h2,{id:"api",children:"API"}),`
`,e(t.p,{children:"Use HTTP REST API and provide OpenAPI spec (TBU)."})]})}function l(n={}){const{wrapper:t}=n.components||{};return t?e(t,Object.assign({},n,{children:e(i,n)})):i(n)}export{l as default,h as frontmatter,o as head,s as headings};
