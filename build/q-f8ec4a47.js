import{g as e,j as r}from"./q-ff1dcb46.js";const s=[{text:"VS Code extension",id:"vs-code-extension",level:1},{text:"Storage",id:"storage",level:2},{text:"Publishing",id:"publishing",level:2},{text:"Include in registry",id:"include-in-registry",level:3},{text:"Serve from Github Pages",id:"serve-from-github-pages",level:3},{text:"Preview",id:"preview",level:2}],l={title:"VS Code extension",meta:[],styles:[],links:[],frontmatter:{}},a={title:"VS Code extension"};function n(t){const i=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},t.components);return e(r,{children:[e(i.h1,{id:"vs-code-extension",children:"VS Code extension"}),`
`,e("sl-badge",{variant:"neutral",children:"Draft"}),`
`,e(i.p,{children:"Extension should help with the final steps of the process - publishing and distribution via the web."}),`
`,e(i.p,{children:"Extension should be able to:"}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"Store: create repository in Github and upload game files"}),`
`,e(i.li,{children:["Publish: create a new game entry in the registry (see ",e(i.a,{href:"/docs/games-registry/",children:"Games Registry"}),")"]}),`
`,e(i.li,{children:"Run preview: run a local web server and open a preview in the browser, keeping multiplayer session possibly with other developers"}),`
`,e(i.li,{children:"(optional) Guide: explain the process of complete game development including supported engines installation"}),`
`]}),`
`,e(i.h2,{id:"storage",children:"Storage"}),`
`,e(i.p,{children:`Extension should at first guide user to create a new repository in Github. The repository should be created in the user's account and should be named after the game. The repository should be created with a README file and, .gitignore file and potentially other metadata files needed
for the game to be published later.`}),`
`,e(i.h2,{id:"publishing",children:"Publishing"}),`
`,e(i.h3,{id:"include-in-registry",children:"Include in registry"}),`
`,e(i.p,{children:["Extension should be able to request creation of a new game entry in the registry (see ",e(i.a,{href:"/docs/games-registry/",children:"Games Registry"}),")."]}),`
`,e(i.p,{children:"Creator should be able to provide metadata for the game such as name, description, tags, etc, as Game Registry requires."}),`
`,e(i.p,{children:"This might require use of Github API to create a new pull request in the registry repository."}),`
`,e(i.h3,{id:"serve-from-github-pages",children:"Serve from Github Pages"}),`
`,e(i.p,{children:"Extension should be able to request creation of a new Github Pages site for the game repository, or explain how to do it manually."}),`
`,e(i.h2,{id:"preview",children:"Preview"}),`
`,e(i.p,{children:`Usually engines provide a way to run a local web server and open a preview in the browser.
The extension should be able to provide Matchmaking SDK with a way to keep multiplayer session with other developers.
Possibly need to look into VS Code live share extension and if possible integrate with it.`})]})}function h(t={}){const{wrapper:i}=t.components||{};return i?e(i,Object.assign({},t,{children:e(n,t)})):n(t)}export{h as default,a as frontmatter,l as head,s as headings};
