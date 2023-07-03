import e,{Router as t}from"express";import i from"body-parser";import{Utils as n,Did as a,connect as o,ConfigService as s,Attestation as r,Blockchain as c,Message as d,Quote as l,CType as u,Credential as m,Claim as p}from"@kiltprotocol/sdk-js";import{cryptoWaitReady as y,randomAsHex as f}from"@polkadot/util-crypto";import{cwd as I}from"node:process";import h from"node:path";import{config as N}from"dotenv";import{pino as E}from"pino";import w from"pino-pretty";import g from"express-basic-auth";import{StatusCodes as M}from"http-status-codes";import{randomUUID as b}from"node:crypto";import{setDoc as D,doc as A,getDocs as C,collection as T,getDoc as R,updateDoc as k,getFirestore as v}from"firebase/firestore";import{getApps as O,initializeApp as S}from"firebase/app";import L from"node-cache";N();class j extends Error{constructor(e){super(e),E().fatal(e),process.exit(1)}}const{env:x}=process,U=x.URL;if(!U)throw new j("URL is not provided");const Y=x.DID,F=x.SECRET_PAYER_MNEMONIC;if(!F)throw new j("SECRET_PAYER_MNEMONIC is not provided");const Z=x.SECRET_AUTHENTICATION_MNEMONIC;if(!Z)throw new j("SECRET_AUTHENTICATION_MNEMONIC is not provided");const G=x.SECRET_ASSERTION_METHOD_MNEMONIC;if(!G)throw new j("SECRET_ASSERTION_METHOD_MNEMONIC is not provided");const _=x.SECRET_KEY_AGREEMENT_MNEMONIC;if(!_)throw new j("SECRET_KEY_AGREEMENT_MNEMONIC is not provided");const W=x.BLOCKCHAIN_ENDPOINT;if(!W)throw new j("No blockchain endpoint provided");const q=x.ADMIN_USERNAME,K=x.ADMIN_PASSWORD;if(!q||!K)throw new j("Admin credentials missing");const H={port:parseInt(x.PORT)||3e3,blockchainEndpoint:W,baseUri:U,distFolder:h.join(I(),"dist","frontend"),did:Y,payerMnemonic:F,authenticationMnemonic:Z,assertionMethodMnemonic:G,keyAgreementMnemonic:_,adminUsername:q,adminPassword:K},V=(async()=>{await y();return{payer:n.Crypto.makeKeypairFromUri(H.payerMnemonic),authentication:n.Crypto.makeKeypairFromUri(H.authenticationMnemonic),assertionMethod:n.Crypto.makeKeypairFromUri(H.assertionMethodMnemonic),keyAgreement:n.Crypto.makeEncryptionKeypairFromSeed(n.Crypto.mnemonicToMiniSecret(H.keyAgreementMnemonic))}})();async function J(){await o(H.blockchainEndpoint)}async function z(e,t,i){if(!t)throw new Error(`Your on-chain DID is broken: the resolved key for ${i} is undefined`);if(n.Crypto.u8aToHex(e.publicKey)!==n.Crypto.u8aToHex(t.publicKey))throw new Error(`Your on-chain DID is broken: the configured key for ${i} does not match resolved one`)}const Q=(async()=>{await J();const{did:e}=H;if(!e)throw new Error("DID not configured, have you run createDID script?");const t=await a.resolve(e);if(!t||!t.document)throw new Error(`Could not resolve the configured DID ${e}, have you run createDID script?`);const{document:i}=t;await async function(e){const t=await V;await z(t.authentication,e.authentication[0],"authentication"),await z(t.assertionMethod,e.assertionMethod?.[0],"assertionMethod"),await z(t.keyAgreement,e.keyAgreement?.[0],"keyAgreement")}(i);const n=i.authentication?.[0];if(!n)throw new Error("Impossible: authentication key not found");const o=i.assertionMethod?.[0];if(!o)throw new Error("Impossible: assertion method key not found");const s=i.keyAgreement?.[0];if(!s)throw new Error("Impossible: key agreement key not found");return{did:e,didDocument:i,authenticationKey:n,assertionMethodKey:o,keyAgreementKey:s}})(),X=w({levelFirst:!0,colorize:!0,ignore:"time,hostname,pid"}),B=E({level:"trace"},X),{adminUsername:$,adminPassword:P}=H,ee=g({users:{[$]:P},challenge:!0}),te={session:"/api/session",terms:"/api/terms",requestAttestation:"/api/request-attestation",pay:"/api/pay",credentials:{list:"/api/credentials",item:"/api/credentials/:id",attest:"/api/credentials/:id/attest",revoke:"/api/credentials/:id/revoke"}},ie=O(),ne=v(ie.length>0?ie[0]:S({apiKey:"AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc",authDomain:"peranto-test.firebaseapp.com",projectId:"peranto-test",storageBucket:"peranto-test.appspot.com",messagingSenderId:"777447831295",appId:"1:777447831295:web:6a987d7c8b307ecef43eca"}));const ae=t();ae.post("/api/metamap",(async function(e,t){try{const{eventName:i}=e.body,n=await D(A(ne,"metamap","testId_"+i),{payload:JSON.stringify({computed:{age:{data:30}},documents:[{country:"MX",merchantFields:[],region:null,type:"national-id",subtype:"credencial-para-votar",steps:[{status:200,id:"age-check",cacheHit:null,data:{age:30,ageThreshold:18,underage:!1},error:null},{status:200,id:"alteration-detection",cacheHit:null,error:null},{status:200,id:"facematch",cacheHit:null,data:{score:100},error:null},{status:200,id:"template-matching",cacheHit:null,error:null},{status:200,id:"document-reading",cacheHit:null,data:{fullName:{value:"EDGAR DANIEL SALINAS LEDESMA",required:!0,label:"Name"},address:{value:"AV MARINA NACIONAL 200 EDIF 1 A 74 U HAB MARINA NACIONAL 11320 MIGUEL HIDALGO, CDMX.",required:!1,label:"Address"},emissionDate:{value:"2017-01-01",required:!1,label:"Emission Date",format:"date"},documentNumber:{value:"163631998",required:!0,label:"Document Number"},dateOfBirth:{value:"1992-07-18",required:!0,label:"Day of Birth",format:"date"},expirationDate:{value:"2027-12-31",required:!1,label:"Date of Expiration",format:"date"},documentType:{value:"ID",required:!1,label:"Document Type"},firstName:{value:"EDGAR DANIEL",required:!1,label:"First Name"},issueCountry:{value:"MEX",required:!1,label:"Issue Country"},nationality:{value:"MEX",required:!1,label:"Nationality"},sex:{value:"M",required:!1,label:"Sex"},surname:{value:"SALINAS LEDESMA",required:!1,label:"Surname"},cde:{value:"SLLDED92071809H000",required:!1,label:"Elector Key"},curp:{value:"SALE920718HDFLDD08",required:!1,label:"CURP"},ne:{value:"01",required:!1,label:"Emission Number"},ocrNumber:{value:"5182086432677",required:!1,label:"OCR Number"}},error:null}],fields:{address:{value:"AV MARINA NACIONAL 200 EDIF 1 A 74 U HAB MARINA NACIONAL 11320 MIGUEL HIDALGO, CDMX."},cde:{value:"SLLDED92071809H000"},curp:{value:"SALE920718HDFLDD08"},dateOfBirth:{value:"1992-07-18"},documentNumber:{value:"163631998"},documentType:{value:"ID"},emissionDate:{value:"2017-01-01"},expirationDate:{value:"2027-12-31"},firstName:{value:"EDGAR DANIEL"},fullName:{value:"EDGAR DANIEL SALINAS LEDESMA"},issueCountry:{value:"MEX"},nationality:{value:"MEX"},ne:{value:"01"},ocrNumber:{value:"5182086432677"},sex:{value:"M"},surname:{value:"SALINAS LEDESMA"}},photos:["https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6ImQwNmM2YWI0LTM2YmYtNDdkOC04NzE3LWQ0Y2NlNDRmNDU5ZC5qcGVnIiwiZm9sZGVyIjoiZG9jdW1lbnQiLCJpYXQiOjE2ODgzNDAyMTMsImV4cCI6MTY4ODQyNjYxMywiYXVkIjoiZWFjMTYwZmYtYTBlNS00M2QxLWFkNTktNTIwMjI1YmQ3OWI4In0.2mkLDqtZfGz8XcraYd1PoZnoYkkwUrPxXCvmYehQHxY","https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6ImNlYzdlNjE4LTVkMmMtNDcxNi05MWM4LWUxYTAyM2RiMWNiNC5qcGVnIiwiZm9sZGVyIjoiZG9jdW1lbnQiLCJpYXQiOjE2ODgzNDAyMTMsImV4cCI6MTY4ODQyNjYxMywiYXVkIjoiZWFjMTYwZmYtYTBlNS00M2QxLWFkNTktNTIwMjI1YmQ3OWI4In0.aXVYcsK0D6VqfIeiTsRqZd2R_53G-sk7SD-SxB5Oq3g"]}],expired:!1,flow:{id:"64811ce44d683b001b9013ef",name:"Default flow"},identity:{id:"64a0f46f43bd9d001b7a2778",status:"verified"},steps:[{status:200,id:"liveness",cacheHit:null,data:{videoUrl:"https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6Ijk2YTA0NTBlLWQzZGUtNGNjYS05MGFkLTQ5NGZiMjc4MGUwNy5ta3YiLCJmb2xkZXIiOiJ2aWRlbyIsImlhdCI6MTY4ODM0MDIxMywiZXhwIjoxNjg4NDI2NjEzLCJhdWQiOiJlYWMxNjBmZi1hMGU1LTQzZDEtYWQ1OS01MjAyMjViZDc5YjgifQ.TEQNks36DielBu29ThmFnColNqFYYwMWeehoaY-mTVk",spriteUrl:"https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6IjEzOWMxNjhkLWY1MTUtNGEwNS04NWFjLTQ4ZjRjYmQ1MDI5Mi5qcGVnIiwiZm9sZGVyIjoic2VsZmllIiwiaWF0IjoxNjg4MzQwMjEzLCJleHAiOjE2ODg0MjY2MTMsImF1ZCI6ImVhYzE2MGZmLWEwZTUtNDNkMS1hZDU5LTUyMDIyNWJkNzliOCJ9.1qEptKVwj9lUI3P9trJXWy7HRpIA_nBpbXrlNwNPnoY",selfieUrl:"https://media.getmati.com/file?location=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaWxlTmFtZSI6IjM5YWYwYzAzLTVlZWYtNDM5ZC1iZDNkLWI0N2RkZDlhYjg0MC5qcGVnIiwiZm9sZGVyIjoic2VsZmllIiwiaWF0IjoxNjg4MzQwMjEzLCJleHAiOjE2ODg0MjY2MTMsImF1ZCI6ImVhYzE2MGZmLWEwZTUtNDNkMS1hZDU5LTUyMDIyNWJkNzliOCJ9.wjiXYcGF13To2E4IqZL5u0MKLhkBwNdGhxy9VEzylD8"},error:null}],masJobToBePostpone:!1,profileId:"MX|NATIONAL-ID|163631998",id:"64a0f46f43bd9d001b7a277a",deviceFingerprint:{ua:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",browser:{name:"Chrome",version:"114.0.0.0",major:"114"},engine:{name:"Blink",version:"114.0.0.0"},os:{name:"Mac OS",version:"10.15.7"},app:{platform:"web_desktop",version:"22.3.5"},ip:"187.191.38.141",vpnDetectionEnabled:!1},hasProblem:!1})});t.json({docRef:n})}catch(e){B.error(e),t.status(M.INTERNAL_SERVER_ERROR).send(e)}}));class oe extends Error{}const se=new Map;function re(e){const t=b();D(A(ne,"credentials",t),{claim:e})}async function ce(){let e={};return(await C(T(ne,"credentials"))).forEach((t=>{e={...e,[t.id]:{...t.data(),id:t.id}}})),e}async function de(e){const t={...(await R(A(ne,"credentials",e))).data(),id:e};if(!t)throw new oe("Credential not found");return t}function le(e){if(!se.delete(e))throw new oe("Credential not found")}async function ue(e,t){const i=await de(e);return await k(A(ne,"credentials",e),{...i,attestation:t}),await de(e)}async function me({data:e,keyRelationship:t}){if("capabilityDelegation"===t)throw new Error("Delegation not supported");const{authentication:i,assertionMethod:n}=await V,{did:a,authenticationKey:o,assertionMethodKey:s}=await Q,[r,c]="authentication"===t?[i,o]:[n,s],d=`${a}${c.id}`;return{signature:r.sign(e,{withType:!1}),keyType:r.type,keyUri:d}}async function pe({data:e,peerPublicKey:t}){const{keyAgreement:i}=await V,{did:a,keyAgreementKey:o}=await Q,s=`${a}${o.id}`,{box:r,nonce:c}=n.Crypto.encryptAsymmetric(e,t,i.secretKey);return{data:r,nonce:c,keyUri:s}}async function ye({data:e,nonce:t,peerPublicKey:i}){const{keyAgreement:a}=await V,o=n.Crypto.decryptAsymmetric({box:e,nonce:t},i,a.secretKey);if(!o)throw new Error("Failed to decrypt with given key");return{data:o}}async function fe(e){const t=s.get("api"),i=r.fromCredentialAndDid(e,H.did),{claimHash:n,cTypeHash:o}=i,{payer:d}=await V,l=t.tx.attestation.add(n,o,null),u=await a.authorizeTx(H.did,l,me,d.address);return await c.signAndSubmitTx(u,d),i}async function Ie(e){const t=s.get("api"),{rootHash:i}=e,n=t.tx.attestation.revoke(i,null),{payer:o}=await V,d=await a.authorizeTx(H.did,n,me,o.address);await c.signAndSubmitTx(d,o);const l=await t.query.attestation.attestations(i);return r.fromChain(l,i)}function he(e,t){B.error(e),e instanceof oe?t.status(M.NOT_FOUND).send(e):t.status(M.INTERNAL_SERVER_ERROR).send(e)}const Ne=t();Ne.get(te.credentials.list,(async(e,t)=>{B.debug("Getting list of credentials"),t.send(await ce())})),Ne.get(te.credentials.item,(async(e,t)=>{try{const{id:i}=e.params;B.debug("Getting credential"),t.send(await de(i))}catch(e){he(e,t)}})),Ne.delete(te.credentials.item,(async(e,t)=>{try{const{id:i}=e.params;B.debug("Deleting credential"),le(i),t.sendStatus(M.OK)}catch(e){he(e,t)}})),Ne.post(te.credentials.attest,(async(e,t)=>{try{const{id:i}=e.params;B.debug("Getting credential");const{claim:n}=await de(i);B.debug("Attesting credential");const a=await fe(n);B.debug("Credential attested, updating database");const o=await ue(i,a);t.send(o)}catch(e){he(e,t)}})),Ne.post(te.credentials.revoke,(async(e,t)=>{try{const{id:i}=e.params;B.debug("Getting credential");const{claim:n}=await de(i);B.debug("Revoking credential");const a=await Ie(n);B.debug("Credential revoked, updating database");const o=await ue(i,a);t.send(o)}catch(e){he(e,t)}}));const Ee=t();Ee.use(Ne),Ee.use(e.static(`${H.distFolder}/admin`,{dotfiles:"allow",setHeaders(e){e.set("Access-Control-Allow-Origin","*")}})),Ee.get("*",((e,t)=>{t.sendFile(`${H.distFolder}/admin/index.html`)}));const we=new L({stdTTL:18e3,useClones:!1});function ge(e){const t=e.get("x-session-id");if(!t)throw new Error("Required header x-session-id is missing");return function(e){const t=we.get(e);if(!t)throw new Error(`Unknown or expired session ${e}`);return t}(t)}function Me(e){we.set(e.sessionId,e)}function be(e,t,i){try{const t=function(e){const t=ge(e),{did:i,didConfirmed:n,encryptionKeyUri:a}=t;if(!i||!n||!a)throw new Error("Unconfirmed DID");return{...t,did:i,encryptionKeyUri:a}}(e);e.session=t,i()}catch(e){t.status(M.FORBIDDEN).send(e)}}const De=t();De.post(te.pay,be,(async function(e,t){try{B.debug("Mock processing payment");const{session:{credential:i}}=e;if(!i)throw new Error("Session credential not found");re(i),B.debug("Payment received, sent credential to attester"),t.sendStatus(M.NO_CONTENT)}catch(e){B.error(e),t.status(M.INTERNAL_SERVER_ERROR).send(e)}}));const Ae={email:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Email",properties:{Email:{type:"string"}},type:"object",$id:"kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac"},twitter:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Twitter",properties:{Twitter:{type:"string"}},type:"object",$id:"kilt:ctype:0x47d04c42bdf7fdd3fc5a194bcaa367b2f4766a6b16ae3df628927656d818f420"},id:{$schema:"http://kilt-protocol.org/draft-01/ctype#",properties:{email:{type:"string"},username:{type:"string"}},title:"Authorization",type:"object",$id:"kilt:ctype:0xdf952230c87e7fbdc8503a394540c8e99029180611e7107c4eee33f67f57aa57"}},Ce={id:2,email:2,twitter:3};const Te=t();function Re(){const e=f(24),t=f(24);return Me({sessionId:e,didChallenge:t}),{challenge:t,sessionId:e}}Te.post(te.requestAttestation,be,(async function(e,t){try{B.debug("Handling attestation request");const i=(await d.decrypt(e.body,ye)).body;B.debug("Request attestation message decrypted"),d.verifyMessageBody(i);const{type:n}=i;if("reject"===n||"reject-terms"===n)return void t.status(M.CONFLICT).send("Message contains rejection");if("request-attestation"!==n)throw new Error("Unexpected message type");const{quote:a,credential:o}=i.content;a&&(await l.verifyQuoteAgreement(a),B.debug("Quote agreement verified"));const s=Object.values(Ae),r=u.hashToId(o.claim.cTypeHash),c=s.find((({$id:e})=>e===r));c||t.status(M.FORBIDDEN).send("Unsupported CType"),B.debug("CType supported"),await m.verifyWellFormed(o,{ctype:c}),B.debug("Credential data structure verified");const{session:p}=e;Me({...p,credential:o}),B.debug("Request attestation complete"),t.sendStatus(M.NO_CONTENT)}catch(e){t.status(M.INTERNAL_SERVER_ERROR).send(e)}}));const ke=te.session,ve=t();async function Oe(e,t){const{did:i}=a.parse(e),n=d.fromBody(t,H.did,i);return d.encrypt(n,pe,e)}ve.get(ke,(async(e,t)=>{const{did:i,keyAgreementKey:n}=await Q,a=`${i}${n.id}`;t.send({dAppEncryptionKeyUri:a,...Re()})})),ve.post(ke,(function(e,t,i){try{const t=ge(e);e.session=t,i()}catch(e){t.status(M.FORBIDDEN).send(e)}}),(async function(e,t){try{B.debug("Session confirmation started");const i=e.body,{encryptionKeyUri:o,encryptedChallenge:s,nonce:r}=i,{session:c}=e,d=await a.resolveKey(o);B.debug("Session confirmation resolved DID encryption key");const{keyAgreementKey:l,did:u}=await Q,{data:m}=await ye({data:n.Crypto.coToUInt8(s),nonce:n.Crypto.coToUInt8(r),keyUri:`${u}${l.id}`,peerPublicKey:d.publicKey});B.debug("Session confirmation decrypted challenge");const p=n.Crypto.u8aToHex(m);if(p!==c.didChallenge)return void t.status(M.FORBIDDEN).send("Challenge signature mismatch");Me({...c,did:d.controller,encryptionKeyUri:o,didConfirmed:!0}),B.debug("Challenge confirmation matches"),t.sendStatus(M.NO_CONTENT)}catch(e){t.status(M.INTERNAL_SERVER_ERROR).send(e)}}));const Se=t();Se.post(te.terms,be,(async function(e,t){try{B.debug("Submit terms started");const{session:i}=e,{encryptionKeyUri:n}=i,{type:a,claimContents:o}=e.body;B.info("ctype: "+JSON.stringify(Ae[a]));const s=p.fromCTypeAndClaimContents(Ae[a],o,i.did);B.debug("Generated claim");const r={attesterDid:H.did,cTypeHash:s.cTypeHash,cost:{tax:{VAT:0},net:Ce[a],gross:Ce[a]},currency:"KILT",timeframe:new Date(Date.now()+18e6).toISOString(),termsAndConditions:"https://example.com/terms-and-conditions"},c=await l.createAttesterSignedQuote(r,me);B.debug("Signed quote");const d=await Oe(n,{content:{claim:s,legitimations:[],quote:c,cTypes:[Ae[a]]},type:"submit-terms"});B.debug("Submit terms complete"),t.send(d)}catch(e){t.status(M.INTERNAL_SERVER_ERROR).send(e)}}));const Le=t();Le.use(ve),Le.use(Se),Le.use(Te),Le.use(De),Le.use(ae),Le.use(e.static(`${H.distFolder}/user`,{dotfiles:"allow",setHeaders(e){e.set("Access-Control-Allow-Origin","*")}})),Le.get("*",((e,t)=>{t.sendFile(`${H.distFolder}/user/index.html`)}));(async()=>{await Q,B.info("Blockchain connection initialized");const t=e();t.use(i.json()),t.use("/admin",ee,Ee),t.use("/",Le),B.info("Routes configured");const n="0.0.0.0",{port:a,baseUri:o}=H,s=t.listen(a,n,(()=>B.info(`Listening on ${o} (host: 0.0.0.0, port: ${a})`)));function r(){s.close(),process.exit(1)}process.on("unhandledRejection",r),process.on("uncaughtException",r)})();
//# sourceMappingURL=server.js.map
