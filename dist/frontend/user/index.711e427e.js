var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequire94c2;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire94c2=s);var i=s("aaGF3"),a=s("5a1fP"),r=s("jQ7Zu"),o=s("l4VFs"),c=s("aLBVI"),l=(c=s("aLBVI"),s("3hLxt"));async function d(){return c.default.get(l.paths.session).json()}async function u(e,t){const n={"x-session-id":t};await c.default.post(l.paths.session,{json:e,headers:n})}const p=window;function h(){return Object.entries(p.kilt).filter((([,e])=>e.specVersion.startsWith("3."))).map((([e])=>e))}async function f(e){if(!e)throw new Error("No provider");const{dAppEncryptionKeyUri:t,challenge:n,sessionId:s}=await d(),i=await e.startSession("CertifiedProof",t,n),{encryptionKeyUri:a,encryptedChallenge:r,nonce:o}=i;await u({encryptionKeyUri:a,encryptedChallenge:r,nonce:o},s);const{name:c}=e;return{...i,sessionId:s,name:c}}function m(e){return e instanceof Error?e:new Error(String(e))}var y=s("5jKHo");const b=["email","twitter","id"],x={email:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Email",properties:{Email:{type:"string"}},type:"object",$id:"kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac"},twitter:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Twitter",properties:{Twitter:{type:"string"}},type:"object",$id:"kilt:ctype:0x47d04c42bdf7fdd3fc5a194bcaa367b2f4766a6b16ae3df628927656d818f420"},id:{$schema:"http://kilt-protocol.org/draft-01/ctype#",properties:{age:{type:"integer"},name:{type:"string"}},title:"INE ID",type:"object",$id:"kilt:ctype:0x3112e1e3fb387e5eb6c109aa45afc7ed9df01f1c90a976a8b00585abf817ca82"}},j={id:2,email:2,twitter:3};function w(e){return b.includes(e)}l=s("3hLxt");const g={closed:(0,i.jsx)("p",{children:"Your wallet was closed. Please try again."}),unauthorized:(0,i.jsxs)("p",{children:["The authorization was rejected. Follow the instructions on our Tech Support site to establish the connection between this attester and your wallet.",(0,i.jsx)("a",{href:"https://support.kilt.io/support/solutions/articles/80000968082-how-to-grant-access-to-website",target:"_blank",rel:"noreferrer",children:"Tech Support"})]}),unknown:(0,i.jsx)("p",{children:"Something went wrong! Try again or reload the page or restart your browser."})};function k({onConnect:e}){const{kilt:t}=p,[n,s]=(0,r.useState)(h()),[a,o]=(0,r.useState)(!1),[c,l]=(0,r.useState)();(0,r.useEffect)((()=>{function e(){s(h())}return window.dispatchEvent(new CustomEvent("kilt-dapp#initialized")),window.addEventListener("kilt-extension#initialized",e),()=>window.removeEventListener("kilt-extension#initialized",e)}),[]);const d=(0,r.useCallback)((async n=>{try{o(!0),l(void 0),e(await f(t[n]))}catch(e){const{message:t}=m(e);t.includes("closed")?l("closed"):t.includes("Not authorized")?l("unauthorized"):(l("unknown"),console.error(e)),o(!1)}}),[e,t]);return(0,i.jsxs)("section",{children:[0===n.length&&(0,i.jsx)("p",{children:"Looking for a wallet… To make a claim you need to have e.g. Sporran wallet installed and have an identity configured in it."}),n.map((e=>(0,i.jsxs)("button",{className:"btn btn-active btn-primary",type:"button",onClick:()=>d(e),children:["Connect to ",t[e].name]},e))),a&&(0,i.jsx)("p",{children:"Connecting…"}),c&&g[c]]})}function v(){const{type:e}=(0,o.useParams)(),[t,n]=(0,r.useState)(),[s,a]=(0,r.useState)(),[d,u]=(0,r.useState)("start"),[p,h]=(0,r.useState)();(0,r.useEffect)((()=>{setTimeout((()=>{const e=document.querySelector("mati-button");e?.addEventListener("mati:userStartedSdk",(()=>{n(e.__flowId)}))}),3e3)}),[]);const f=(0,r.useCallback)((e=>{a(e)}),[]),b=(0,r.useCallback)((async t=>{if(t.preventDefault(),h(void 0),!s||!e||!w(e))return;const n=Object.fromEntries(new FormData(t.currentTarget).entries());try{const{sessionId:t}=s,i={"x-session-id":t};await s.listen((async e=>{await c.default.post(l.paths.requestAttestation,{headers:i,json:e}),u("requested")}));const a=await c.default.post(l.paths.terms,{headers:i,json:{type:e,claimContents:n}}).json();await s.send(a)}catch(e){const{message:t}=m(e);t.includes("closed")||t.includes("Conflict")?h("closed"):t.includes("Not authorized")?h("unauthorized"):(h("unknown"),console.error(e))}}),[s,e]),v=(0,r.useCallback)((async e=>{if(e.preventDefault(),h(void 0),s)try{const{sessionId:e}=s,t={"x-session-id":e};await c.default.post(l.paths.pay,{headers:t}),u("paid")}catch(e){console.error(e),h("unknown")}}),[s]);if(!e||!w(e))return(0,i.jsx)("p",{children:"Error - Unsupported CType"});const S=x[e],{title:C,properties:T}=S;return console.log("ASD",t),(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{children:C}),(0,i.jsxs)("p",{className:"mb-4",children:["Price: ",j[e]," KILT"]}),"start"===d&&"id"===e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("mati-button",{clientid:"64811ce44d683b001b9013f0",flowId:"64811ce44d683b001b9013ef"}),(0,i.jsxs)("form",{className:"my-2",onSubmit:b,children:[Object.keys(T).map((e=>(0,i.jsxs)("label",{className:"hidden",children:[e,":",(0,i.jsx)("input",{name:e,disabled:!s,required:!0})]},e))),!s&&(0,i.jsx)(k,{onConnect:f}),s&&(0,i.jsx)("button",{className:"btn btn-active btn-primary",type:"submit",children:"Submit"})]})]}),"start"===d&&"id"!==e&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("form",{onSubmit:b,children:[Object.keys(T).map((e=>(0,i.jsxs)("label",{children:[e,":",(0,i.jsx)("input",{name:e,disabled:!s,required:!0})]},e))),!s&&(0,i.jsx)(k,{onConnect:f}),s&&(0,i.jsx)("button",{className:"btn btn-active btn-primary",type:"submit",children:"Submit"})]})}),"requested"===d&&(0,i.jsxs)("form",{onSubmit:v,children:[(0,i.jsx)("p",{children:"Thanks for your request. Please pay"}),(0,i.jsx)("button",{children:"Pay"})]}),"paid"===d&&(0,i.jsx)("p",{children:"Thanks for your payment! Your request has been sent to the attester for processing. You can check the attestation status in your wallet."}),p&&g[p],(0,i.jsx)(o.Link,{to:y.paths.home,children:"Back"})]})}function S(){return(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{className:"my-4",children:"CertifiedProof"}),(0,i.jsx)("p",{children:"This KILT Attester Example demonstrates how to issue credentials for a couple basic claim types which already exist on the KILT blockchain. The user chooses a claim type, enters the claim data, makes a (mock) payment, and the claim is sent to the attester to be reviewed."}),(0,i.jsx)("h2",{children:"Choose your claim type:"}),(0,i.jsx)("ul",{className:"flex flex-col gap-2 my-4",children:b.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(o.Link,{className:"link link-primary",to:(0,o.generatePath)(y.paths.claim,{type:e}),children:x[e].title})},e)))})]})}(0,a.createRoot)(document.querySelector("#app")).render((0,i.jsx)(o.BrowserRouter,{children:(0,i.jsxs)(o.Routes,{children:[(0,i.jsx)(o.Route,{path:y.paths.home,element:(0,i.jsx)(S,{})}),(0,i.jsx)(o.Route,{path:y.paths.claim,element:(0,i.jsx)(v,{})}),(0,i.jsx)(o.Route,{path:"*",element:(0,i.jsx)("p",{children:"404 - Not found"})})]})}));
//# sourceMappingURL=index.711e427e.js.map
