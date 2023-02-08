import{g as e,j as a}from"./q-ff1dcb46.js";const o=[{text:"Games Registry",id:"games-registry",level:1},{text:"Game",id:"game",level:2},{text:"List of Games",id:"list-of-games",level:2},{text:"Storage",id:"storage",level:2},{text:"Automation",id:"automation",level:2}],r={title:"Games Registry",meta:[],styles:[],links:[],frontmatter:{}},l={title:"Games Registry"};function n(i){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li"},i.components);return e(a,{children:[e(t.h1,{id:"games-registry",children:"Games Registry"}),`
`,e("sl-badge",{variant:"neutral",children:"Draft"}),`
`,e(t.h2,{id:"game",children:"Game"}),`
`,e(t.p,{children:"Each game is registered in a JSON file. The file contains the following information:"}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:"Game name"}),`
`,e(t.li,{children:"Game description"}),`
`,e(t.li,{children:"Game icon"}),`
`,e(t.li,{children:"Game repository in GitHub"}),`
`]}),`
`,e(t.h2,{id:"list-of-games",children:"List of Games"}),`
`,e(t.p,{children:"The list of games is stored in a JSON file."}),`
`,e(t.p,{children:"File contains an array of links to game JSON files."}),`
`,e(t.h2,{id:"storage",children:"Storage"}),`
`,e(t.p,{children:`The list of games and game JSON files are stored in GitHub repository. This approach has potential issues
with scaling and performance, but it is the easiest to implement and maintain at the start.`}),`
`,e(t.h2,{id:"automation",children:"Automation"}),`
`,e(t.p,{children:`Whenever new PR is created in the repository, CI should check that the PR contains a valid game JSON file
and whether user is not trying to modify other files. Optionally can validate user against lists of contributors
and/or maintainers and banned users (to prevent abuse and other misuse).
Contributors and maintainers are allowed to modify any files, banned users are not allowed to modify any files.`}),`
`,e(t.p,{children:`If PR is valid, CI should merge it into the main branch automatically, otherwise report what went wrong back to PR.
If user is banned, CI should close the PR automatically.`}),`
`,e(t.p,{children:"Possible issue: if CI run out of credits, it will not be able to merge PRs automatically and manual work would be required."}),`
`,e(t.p,{children:`For such case, same logic can be implemented in a separate service that will be triggered by GitHub webhooks, however
hosting that service would require additional costs, which shouldn't be spent until it is needed.`})]})}function d(i={}){const{wrapper:t}=i.components||{};return t?e(t,Object.assign({},i,{children:e(n,i)})):n(i)}export{d as default,l as frontmatter,r as head,o as headings};
