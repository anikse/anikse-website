import{g as e,j as a}from"./q-ff1dcb46.js";const o=[{text:"Multiplayer SDK",id:"multiplayer-sdk",level:1},{text:"API design",id:"api-design",level:2},{text:"Scripting",id:"scripting",level:2}],r={title:"Multiplayer SDK",meta:[],styles:[],links:[],frontmatter:{}},l={title:"Multiplayer SDK"};function i(t){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li"},t.components);return e(a,{children:[e(n.h1,{id:"multiplayer-sdk",children:"Multiplayer SDK"}),`
`,e("sl-badge",{variant:"neutral",children:"Draft"}),`
`,e(n.p,{children:"SDK should be integrated with major WebGL based game engines and frameworks such as Babylon.js, Godot, (maybe) Unity, etc."}),`
`,e(n.p,{children:"The first step would be to make a POC with one of open source engines, f.e. Bablyon.js."}),`
`,e(n.h2,{id:"api-design",children:"API design"}),`
`,e(n.p,{children:"SDK should be able to:"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:"Create a game session"}),`
`,e(n.li,{children:"Join a game session"}),`
`,e(n.li,{children:"Leave a game session"}),`
`,e(n.li,{children:"Switch when host leaves"}),`
`,e(n.li,{children:"Sync game session state"}),`
`]}),`
`,e(n.p,{children:"SDK should use matchmaking service for session creation and joining."}),`
`,e(n.p,{children:"SDK should use WebRTC for peer-to-peer communication."}),`
`,e(n.p,{children:"SDK should use Rollback or Lockstep for game state synchronization."}),`
`,e(n.h2,{id:"scripting",children:"Scripting"}),`
`,e(n.p,{children:"The API would have to take into account capabilities of the game engine and provide a way to integrate with it."}),`
`,e(n.p,{children:"For example, in Godot, the game state is represented by a tree of nodes. The game state is synchronized by serializing the tree and sending it to other players. The tree is deserialized and applied to the game state."}),`
`,e(n.p,{children:"Selecting a game engine and making a POC would help to understand how to integrate with it."}),`
`,e(n.p,{children:`Host/Client separation should be taken into account. When host leaves, another client would have to become a new host and this process should be transparent to the game. Need to decide whether to use a separate host/client API or a single API with host/client separation on the SDK side and how would that work with game engine scripting.
Specifics are TBU here.`})]})}function h(t={}){const{wrapper:n}=t.components||{};return n?e(n,Object.assign({},t,{children:e(i,t)})):i(t)}export{h as default,l as frontmatter,r as head,o as headings};
