var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=t.parcelRequire94c2;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var s=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,s.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequire94c2=s);var i,r,o,a=s("aaGF3"),c=s("5a1fP"),h=s("jQ7Zu"),u=s("l4VFs"),l=i={};function d(){throw new Error("setTimeout has not been defined")}function f(){throw new Error("clearTimeout has not been defined")}function p(t){if(r===setTimeout)return setTimeout(t,0);if((r===d||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:d}catch(t){r=d}try{o="function"==typeof clearTimeout?clearTimeout:f}catch(t){o=f}}();var g,m=[],y=!1,v=-1;function w(){y&&g&&(y=!1,g.length?m=g.concat(m):v=-1,m.length&&b())}function b(){if(!y){var t=p(w);y=!0;for(var e=m.length;e;){for(g=m,m=[];++v<e;)g&&g[v].run();v=-1,e=m.length}g=null,y=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===f||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function E(t,e){this.fun=t,this.array=e}function T(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new E(t,e)),1!==m.length||y||p(b)},E.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=T,l.addListener=T,l.once=T,l.off=T,l.removeListener=T,l.removeAllListeners=T,l.emit=T,l.prependListener=T,l.prependOnceListener=T,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,h=i>>2,u=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[h],n[u],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(C(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw new I;const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A=function(t){return function(t){const e=C(t);return S.encodeByteArray(e,!0)}(t).replace(/\./g,"")},_=function(t){try{return S.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,k=()=>{try{return D()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&_(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},N=t=>{const e=(t=>{var e,n;return null===(n=null===(e=k())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},x=()=>{var t;return null===(t=k())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[A(JSON.stringify({alg:"none",type:"JWT"})),A(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){try{return"object"==typeof indexedDB}catch(t){return!1}}class M extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(F,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new M(s,o,n)}}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(U(n)&&U(r)){if(!V(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function U(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){return t&&t._delegate?t._delegate:t}class B{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new L;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,"[DEFAULT]"===s?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class z{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new q(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=[];var K,H;(H=K||(K={}))[H.DEBUG=0]="DEBUG",H[H.VERBOSE=1]="VERBOSE",H[H.INFO=2]="INFO",H[H.WARN=3]="WARN",H[H.ERROR=4]="ERROR",H[H.SILENT=5]="SILENT";const G={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},W=K.INFO,Q={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Y=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Q[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class X{constructor(t){this.name=t,this._logLevel=W,this._logHandler=Y,this._userLogHandler=null,$.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?G[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}let J,Z;const tt=new WeakMap,et=new WeakMap,nt=new WeakMap,st=new WeakMap,it=new WeakMap;let rt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return et.get(t);if("objectStoreNames"===e)return t.objectStoreNames||nt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ct(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ot(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Z||(Z=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(ht(this),e),ct(tt.get(this))}:function(...e){return ct(t.apply(ht(this),e))}:function(e,...n){const s=t.call(ht(this),e,...n);return nt.set(s,e.sort?e.sort():[e]),ct(s)}}function at(t){return"function"==typeof t?ot(t):(t instanceof IDBTransaction&&function(t){if(et.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));et.set(t,e)}(t),e=t,(J||(J=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,rt):t);var e}function ct(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(ct(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&tt.set(e,t)})).catch((()=>{})),it.set(e,t),e}(t);if(st.has(t))return st.get(t);const e=at(t);return e!==t&&(st.set(t,e),it.set(e,t)),e}const ht=t=>it.get(t);function ut(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ct(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(ct(o.result),t.oldVersion,t.newVersion,ct(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const lt=["get","getKey","getAll","getAllKeys","count"],dt=["put","add","delete","clear"],ft=new Map;function pt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(ft.get(e))return ft.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=dt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!lt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return ft.set(e,r),r}rt=(t=>({...t,get:(e,n,s)=>pt(e,n)||t.get(e,n,s),has:(e,n)=>!!pt(e,n)||t.has(e,n)}))(rt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const mt=new X("@firebase/app"),yt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},vt=new Map,wt=new Map;function bt(t,e){try{t.container.addComponent(e)}catch(n){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Et(t){const e=t.name;if(wt.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;wt.set(e,t);for(const e of vt.values())bt(e,t);return!0}function Tt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct=new P("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new B("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw Ct.create("bad-app-name",{appName:String(i)});if(n||(n=x()),!n)throw Ct.create("no-options");const r=vt.get(i);if(r){if(V(n,r.options)&&V(s,r.config))return r;throw Ct.create("duplicate-app",{appName:i})}const o=new z(i);for(const t of wt.values())o.addComponent(t);const a=new St(n,s,o);return vt.set(i,a),a}function At(t="[DEFAULT]"){const e=vt.get(t);if(!e&&"[DEFAULT]"===t&&x())return It();if(!e)throw Ct.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=null!==(s=yt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void mt.warn(t.join(" "))}Et(new B(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}let Dt=null;function kt(){return Dt||(Dt=ut("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Ct.create("idb-open",{originalErrorMessage:t.message})}))),Dt}async function Nt(t,e){try{const n=(await kt()).transaction("firebase-heartbeat-store","readwrite"),s=n.objectStore("firebase-heartbeat-store");await s.put(e,xt(t)),await n.done}catch(t){if(t instanceof M)mt.warn(t.message);else{const e=Ct.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});mt.warn(e.message)}}}function xt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ot(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Mt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=A(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Rt(){return(new Date).toISOString().substring(0,10)}class Ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!O()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await kt();return await e.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(xt(t))}catch(t){if(t instanceof M)mt.warn(t.message);else{const e=Ct.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});mt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Nt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Mt(t){return A(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;Pt="",Et(new B("platform-logger",(t=>new gt(t)),"PRIVATE")),Et(new B("heartbeat",(t=>new Lt(t)),"PRIVATE")),_t("@firebase/app","0.9.13",Pt),_t("@firebase/app","0.9.13","esm2017"),_t("fire-js","");var Ft,Vt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Ut={},jt=jt||{},Bt=Vt||self;function qt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function zt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var $t="closure_uid_"+(1e9*Math.random()>>>0),Kt=0;function Ht(t,e,n){return t.call.apply(t.bind,arguments)}function Gt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Wt(t,e,n){return(Wt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ht:Gt).apply(null,arguments)}function Qt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Yt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Xt(){this.s=this.s,this.o=this.o}Xt.prototype.s=!1,Xt.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,$t)&&t[$t]||(t[$t]=++Kt))},Xt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zt(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function te(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(qt(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function ee(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var ne=function(){if(!Bt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Bt.addEventListener("test",(()=>{}),e),Bt.removeEventListener("test",(()=>{}),e)}catch(t){}return t}();function se(t){return/^[\s\xa0]*$/.test(t)}function ie(){var t=Bt.navigator;return t&&(t=t.userAgent)?t:""}function re(t){return-1!=ie().indexOf(t)}function oe(t){return oe[" "](t),t}oe[" "]=function(){};var ae,ce,he,ue=re("Opera"),le=re("Trident")||re("MSIE"),de=re("Edge"),fe=de||le,pe=re("Gecko")&&!(-1!=ie().toLowerCase().indexOf("webkit")&&!re("Edge"))&&!(re("Trident")||re("MSIE"))&&!re("Edge"),ge=-1!=ie().toLowerCase().indexOf("webkit")&&!re("Edge");function me(){var t=Bt.document;return t?t.documentMode:void 0}t:{var ye="",ve=(ce=ie(),pe?/rv:([^\);]+)(\)|;)/.exec(ce):de?/Edge\/([\d\.]+)/.exec(ce):le?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ce):ge?/WebKit\/(\S+)/.exec(ce):ue?/(?:Version)[ \/]?(\S+)/.exec(ce):void 0);if(ve&&(ye=ve?ve[1]:""),le){var we=me();if(null!=we&&we>parseFloat(ye)){ae=String(we);break t}}ae=ye}if(Bt.document&&le){var be=me();he=be||(parseInt(ae,10)||void 0)}else he=void 0;var Ee=he;function Te(t,e){if(ee.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pe){t:{try{oe(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ce[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Te.$.h.call(this)}}Yt(Te,ee);var Ce={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),Ie=0;function Ae(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Ie,this.fa=this.ia=!1}function _e(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function De(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ke(t){const e={};for(const n in t)e[n]=t[n];return e}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xe(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Ne.length;e++)n=Ne[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Le(t){this.src=t,this.g={},this.h=0}function Re(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Jt(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(_e(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Oe(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}Le.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Oe(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Ae(e,this.src,r,!!s,i)).ia=n,t.push(e)),e};var Me="closure_lm_"+(1e6*Math.random()|0),Pe={};function Fe(t,e,n,s,i){if(s&&s.once)return Ue(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Fe(t,e[r],n,s,i);return null}return n=He(n),t&&t[Se]?t.O(e,n,zt(s)?!!s.capture:!!s,i):Ve(t,e,n,!1,s,i)}function Ve(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=zt(i)?!!i.capture:!!i,a=$e(t);if(a||(t[Me]=a=new Le(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ze;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ne||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(qe(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Ue(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ue(t,e[r],n,s,i);return null}return n=He(n),t&&t[Se]?t.P(e,n,zt(s)?!!s.capture:!!s,i):Ve(t,e,n,!0,s,i)}function je(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)je(t,e[r],n,s,i);else s=zt(s)?!!s.capture:!!s,n=He(n),t&&t[Se]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Oe(r=t.g[e],n,s,i))&&(_e(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=$e(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Oe(e,n,s,i)),(n=-1<t?e[t]:null)&&Be(n))}function Be(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Se])Re(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(qe(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=$e(e))?(Re(n,t),0==n.h&&(n.src=null,e[Me]=null)):_e(t)}}}function qe(t){return t in Pe?Pe[t]:Pe[t]="on"+t}function ze(t,e){if(t.fa)t=!0;else{e=new Te(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Be(t),t=n.call(s,e)}return t}function $e(t){return(t=t[Me])instanceof Le?t:null}var Ke="__closure_events_fn_"+(1e9*Math.random()>>>0);function He(t){return"function"==typeof t?t:(t[Ke]||(t[Ke]=function(e){return t.handleEvent(e)}),t[Ke])}function Ge(){Xt.call(this),this.i=new Le(this),this.S=this,this.J=null}function We(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"==typeof e)e=new ee(e,t);else if(e instanceof ee)e.target=e.target||t;else{var i=e;xe(e=new ee(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Qe(o,s,!0,e)&&i}if(i=Qe(o=e.g=t,s,!0,e)&&i,i=Qe(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=Qe(o=e.g=n[r],s,!1,e)&&i}function Qe(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Re(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}Yt(Ge,Xt),Ge.prototype[Se]=!0,Ge.prototype.removeEventListener=function(t,e,n,s){je(this,t,e,n,s)},Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)_e(n[s]);delete e.g[t],e.h--}}this.J=null},Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ge.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Ye=Bt.JSON.stringify;function Xe(){var t=rn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Je=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ze),(t=>t.reset()));class Ze{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function tn(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function en(t){Bt.setTimeout((()=>{throw t}),0)}let nn,sn=!1,rn=new class{constructor(){this.h=this.g=null}add(t,e){const n=Je.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},on=()=>{const t=Bt.Promise.resolve(void 0);nn=()=>{t.then(an)}};var an=()=>{for(var t;t=Xe();){try{t.h.call(t.g)}catch(t){en(t)}var e=Je;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sn=!1};function cn(t,e){Ge.call(this),this.h=t||1,this.g=e||Bt,this.j=Wt(this.qb,this),this.l=Date.now()}function hn(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function un(t,e,n){if("function"==typeof t)n&&(t=Wt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Wt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Bt.setTimeout(t,e||0)}function ln(t){t.g=un((()=>{t.g=null,t.i&&(t.i=!1,ln(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Yt(cn,Ge),(Ft=cn.prototype).ga=!1,Ft.T=null,Ft.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(hn(this),this.start()))}},Ft.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ft.N=function(){cn.$.N.call(this),hn(this),delete this.g};class dn extends Xt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ln(this)}N(){super.N(),this.g&&(Bt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(t){Xt.call(this),this.h=t,this.g={}}Yt(fn,Xt);var pn=[];function gn(t,e,n,s){Array.isArray(n)||(n&&(pn[0]=n.toString()),n=pn);for(var i=0;i<n.length;i++){var r=Fe(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function mn(t){De(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Be(t)}),t),t.g={}}function yn(){this.g=!0}function vn(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Ye(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}fn.prototype.N=function(){fn.$.N.call(this),mn(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},yn.prototype.Ea=function(){this.g=!1},yn.prototype.info=function(){};var wn={},bn=null;function En(){return bn=bn||new Ge}function Tn(t){ee.call(this,wn.Ta,t)}function Cn(t){const e=En();We(e,new Tn(e))}function Sn(t,e){ee.call(this,wn.STAT_EVENT,t),this.stat=e}function In(t){const e=En();We(e,new Sn(e,t))}function An(t,e){ee.call(this,wn.Ua,t),this.size=e}function _n(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Bt.setTimeout((function(){t()}),e)}wn.Ta="serverreachability",Yt(Tn,ee),wn.STAT_EVENT="statevent",Yt(Sn,ee),wn.Ua="timingevent",Yt(An,ee);var Dn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Nn(){}function xn(t){return t.h||(t.h=t.i())}function Ln(){}Nn.prototype.h=null;var Rn,On={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mn(){ee.call(this,"d")}function Pn(){ee.call(this,"c")}function Fn(){}function Vn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new fn(this),this.P=jn,t=fe?125:void 0,this.V=new cn(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Un}function Un(){this.i=null,this.g="",this.h=!1}Yt(Mn,ee),Yt(Pn,ee),Yt(Fn,Nn),Fn.prototype.g=function(){return new XMLHttpRequest},Fn.prototype.i=function(){return{}},Rn=new Fn;var jn=45e3,Bn={},qn={};function zn(t,e,n){t.L=1,t.v=cs(ss(e)),t.s=n,t.S=!0,$n(t,null)}function $n(t,e){t.G=Date.now(),Wn(t),t.A=ss(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Es(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Un,t.g=wi(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dn(Wt(t.Pa,t,t.g),t.O)),gn(t.U,t.g,"readystatechange",t.nb),e=t.I?ke(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Cn(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function Kn(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Hn(t,e,n){let s,i=!0;for(;!t.J&&t.C<n.length;){if(s=Gn(t,n),s==qn){4==e&&(t.o=4,In(14),i=!1),vn(t.j,t.m,null,"[Incomplete Response]");break}if(s==Bn){t.o=4,In(15),vn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}vn(t.j,t.m,s,null),Zn(t,s)}Kn(t)&&s!=qn&&s!=Bn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,In(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),li(e),e.M=!0,In(11))):(vn(t.j,t.m,n,"[Invalid Chunked Response]"),Jn(t),Xn(t))}function Gn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?qn:(n=Number(e.substring(n,s)),isNaN(n)?Bn:(s+=1)+n>e.length?qn:(e=e.slice(s,s+n),t.C=s+n,e))}function Wn(t){t.Y=Date.now()+t.P,Qn(t,t.P)}function Qn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=_n(Wt(t.lb,t),e)}function Yn(t){t.B&&(Bt.clearTimeout(t.B),t.B=null)}function Xn(t){0==t.l.H||t.J||pi(t.l,t)}function Jn(t){Yn(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,hn(t.V),mn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Zn(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||_s(n.i,t)))if(!t.K&&_s(n.i,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;fi(n),si(n)}ui(n),In(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=_n(Wt(n.ib,n),6e3));if(1>=As(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else mi(n,11)}else if((t.K||n.g==t)&&fi(n),!se(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.V=h[0],h=h[1],2==n.H)if("c"==h[0]){n.K=h[1],n.pa=h[2];const e=h[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=h[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Ds(r,r.h),r.h=null))}if(s.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,as(s.I,s.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((s=n).wa=vi(s,s.J?s.pa:null,s.Y),o.K){ks(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Yn(a),Wn(a)),s.g=o}else hi(s);0<n.j.length&&ri(n)}else"stop"!=h[0]&&"close"!=h[0]||mi(n,7);else 3==n.H&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?mi(n,7):ni(n):"noop"!=h[0]&&n.h&&n.h.Aa(h),n.A=0)}Cn()}catch(t){}}function ts(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(qt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(qt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(qt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(Ft=Vn.prototype).setTimeout=function(t){this.P=t},Ft.nb=function(t){t=t.target;const e=this.M;e&&3==Ys(t)?e.l():this.Pa(t)},Ft.Pa=function(t){try{if(t==this.g)t:{const u=Ys(this.g);var e=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||fe||this.g&&(this.h.h||this.g.ja()||Xs(this.g)))){this.J||4!=u||7==e||Cn(),Yn(this);var n=this.g.da();this.ca=n;e:if(Kn(this)){var s=Xs(this.g);t="";var i=s.length,r=4==Ys(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Jn(this),Xn(this);var o="";break e}this.h.i=new Bt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,In(12),Jn(this),Xn(this);break t}vn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zn(this,n)}this.S?(Hn(this,u,o),fe&&this.i&&3==u&&(gn(this.U,this.V,"tick",this.mb),this.V.start())):(vn(this.j,this.m,o,null),Zn(this,o)),4==u&&Jn(this),this.i&&!this.J&&(4==u?pi(this.l,this):(this.i=!1,Wn(this)))}else(function(t){const e={};t=(t.g&&2<=Ys(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(se(t[s]))continue;var n=tn(t[s]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,In(12)):(this.o=0,In(13)),Jn(this),Xn(this)}}}catch(t){}},Ft.mb=function(){if(this.g){var t=Ys(this.g),e=this.g.ja();this.C<e.length&&(Yn(this),Hn(this,t,e),this.i&&4!=t&&Wn(this))}},Ft.cancel=function(){this.J=!0,Jn(this)},Ft.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Cn(),In(17)),Jn(this),this.o=2,Xn(this)):Qn(this,this.Y-t)};var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ns(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ns){this.h=t.h,is(this,t.j),this.s=t.s,this.g=t.g,rs(this,t.m),this.l=t.l;var e=t.i,n=new ys;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),os(this,n),this.o=t.o}else t&&(e=String(t).match(es))?(this.h=!1,is(this,e[1]||"",!0),this.s=hs(e[2]||""),this.g=hs(e[3]||"",!0),rs(this,e[4]),this.l=hs(e[5]||"",!0),os(this,e[6]||"",!0),this.o=hs(e[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}function ss(t){return new ns(t)}function is(t,e,n){t.j=n?hs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function os(t,e,n){e instanceof ys?(t.i=e,function(t,e){e&&!t.j&&(vs(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ws(this,e),Es(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=us(e,gs)),t.i=new ys(e,t.h))}function as(t,e,n){t.i.set(e,n)}function cs(t){return as(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function us(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ls),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ls(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(us(e,ds,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(us(e,ds,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(us(n,"/"==n.charAt(0)?ps:fs,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",us(n,ms)),t.join("")};var ds=/[#\/\?@]/g,fs=/[#\?:]/g,ps=/[#\?]/g,gs=/[#\?@]/g,ms=/#/g;function ys(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vs(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ws(t,e){vs(t),e=Ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bs(t,e){return vs(t),e=Ts(t,e),t.g.has(e)}function Es(t,e,n){ws(t,e),0<n.length&&(t.i=null,t.g.set(Ts(t,e),Zt(n)),t.h+=n.length)}function Ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ft=ys.prototype).add=function(t,e){vs(this),this.i=null,t=Ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ft.forEach=function(t,e){vs(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Ft.ta=function(){vs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},Ft.Z=function(t){vs(this);let e=[];if("string"==typeof t)bs(this,t)&&(e=e.concat(this.g.get(Ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ft.set=function(t,e){return vs(this),this.i=null,bs(this,t=Ts(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ft.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Ft.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Cs(t){this.l=t||Ss,Bt.PerformanceNavigationTiming?t=0<(t=Bt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Bt.g&&Bt.g.Ka&&Bt.g.Ka()&&Bt.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ss=10;function Is(t){return!!t.h||!!t.g&&t.g.size>=t.j}function As(t){return t.h?1:t.g?t.g.size:0}function _s(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ds(t,e){t.g?t.g.add(e):t.h=e}function ks(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ns(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zt(t.i)}Cs.prototype.cancel=function(){if(this.i=Ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function xs(){this.g=new class{stringify(t){return Bt.JSON.stringify(t,void 0)}parse(t){return Bt.JSON.parse(t,void 0)}}}function Ls(t,e,n){const s=n||"";try{ts(t,(function(t,n){let i=t;zt(t)&&(i=Ye(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Rs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Os(t){this.l=t.fc||null,this.j=t.ob||!1}function Ms(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ps,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Yt(Os,Nn),Os.prototype.g=function(){return new Ms(this.l,this.j)},Os.prototype.i=function(t){return function(){return t}}({}),Yt(Ms,Ge);var Ps=0;function Fs(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Vs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Us(t)}function Us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ft=Ms.prototype).open=function(t,e){if(this.readyState!=Ps)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Us(this)},Ft.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Bt).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Ft.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vs(this)),this.readyState=Ps},Ft.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Bt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fs(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Ft.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vs(this):Us(this),3==this.readyState&&Fs(this)}},Ft.Za=function(t){this.g&&(this.response=this.responseText=t,Vs(this))},Ft.Ya=function(t){this.g&&(this.response=t,Vs(this))},Ft.ka=function(){this.g&&Vs(this)},Ft.setRequestHeader=function(t,e){this.v.append(t,e)},Ft.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ft.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var js=Bt.JSON.parse;function Bs(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qs,this.L=this.M=!1}Yt(Bs,Ge);var qs="",zs=/^https?$/i,$s=["POST","PUT"];function Ks(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hs(t),Ws(t)}function Hs(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}function Gs(t){if(t.h&&void 0!==jt&&(!t.C[1]||4!=Ys(t)||2!=t.da()))if(t.v&&4==Ys(t))un(t.La,0,t);else if(We(t,"readystatechange"),4==Ys(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===o){var i=String(t.I).match(es)[1]||null;!i&&Bt.self&&Bt.self.location&&(i=Bt.self.location.protocol.slice(0,-1)),s=!zs.test(i?i.toLowerCase():"")}n=s}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var r=2<Ys(t)?t.g.statusText:""}catch(t){r=""}t.j=r+" ["+t.da()+"]",Hs(t)}}finally{Ws(t)}}}function Ws(t,e){if(t.g){Qs(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Qs(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Bt.clearTimeout(t.A),t.A=null)}function Ys(t){return t.g?t.g.readyState:0}function Xs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case qs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Js(t){let e="";return De(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Zs(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Js(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):as(t,e,n))}function ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ei(t){this.Ga=0,this.j=[],this.l=new yn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ti("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ti("baseRetryDelayMs",5e3,t),this.hb=ti("retryDelaySeedMs",1e4,t),this.eb=ti("forwardChannelMaxRetries",2,t),this.xa=ti("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Cs(t&&t.concurrentRequestLimit),this.Ja=new xs,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function ni(t){if(ii(t),3==t.H){var e=t.W++,n=ss(t.I);if(as(n,"SID",t.K),as(n,"RID",e),as(n,"TYPE","terminate"),ai(t,n),(e=new Vn(t,t.l,e)).L=2,e.v=cs(ss(n)),n=!1,Bt.navigator&&Bt.navigator.sendBeacon)try{n=Bt.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&Bt.Image&&((new Image).src=e.v,n=!0),n||(e.g=wi(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Wn(e)}yi(t)}function si(t){t.g&&(li(t),t.g.cancel(),t.g=null)}function ii(t){si(t),t.u&&(Bt.clearTimeout(t.u),t.u=null),fi(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Bt.clearTimeout(t.m),t.m=null)}function ri(t){if(!Is(t.i)&&!t.m){t.m=!0;var e=t.Na;nn||on(),sn||(nn(),sn=!0),rn.add(e,t),t.C=0}}function oi(t,e){var n;n=e?e.m:t.W++;const s=ss(t.I);as(s,"SID",t.K),as(s,"RID",n),as(s,"AID",t.V),ai(t,s),t.o&&t.s&&Zs(s,t.o,t.s),n=new Vn(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ci(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ds(t.i,n),zn(n,s,e)}function ai(t,e){t.na&&De(t.na,(function(t,n){as(e,n,t)})),t.h&&ts({},(function(t,n){as(e,n,t)}))}function ci(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Wt(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),r=!1;else try{Ls(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,s}function hi(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;nn||on(),sn||(nn(),sn=!0),rn.add(e,t),t.A=0}}function ui(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=_n(Wt(t.Ma,t),gi(t,t.A)),t.A++,!0)}function li(t){null!=t.B&&(Bt.clearTimeout(t.B),t.B=null)}function di(t){t.g=new Vn(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=ss(t.wa);as(e,"RID","rpc"),as(e,"SID",t.K),as(e,"AID",t.V),as(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&as(e,"TO",t.qa),as(e,"TYPE","xmlhttp"),ai(t,e),t.o&&t.s&&Zs(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=cs(ss(e)),n.s=null,n.S=!0,$n(n,t)}function fi(t){null!=t.v&&(Bt.clearTimeout(t.v),t.v=null)}function pi(t,e){var n=null;if(t.g==e){fi(t),li(t),t.g=null;var s=2}else{if(!_s(t.i,e))return;n=e.F,ks(t.i,e),s=1}if(0!=t.H)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;We(s=En(),new An(s,n)),ri(t)}else hi(t);else if(3==(i=e.o)||0==i&&0<e.ca||!(1==s&&function(t,e){return!(As(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=_n(Wt(t.Na,t,e),gi(t,t.C)),t.C++,0)))}(t,e)||2==s&&ui(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}function gi(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function mi(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var s=Wt(t.pb,t);n||(n=new ns("//www.google.com/images/cleardot.gif"),Bt.location&&"http"==Bt.location.protocol||is(n,"https"),cs(n)),function(t,e){const n=new yn;if(Bt.Image){const s=new Image;s.onload=Qt(Rs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qt(Rs,n,s,"TestLoadImage: error",!1,e),s.onabort=Qt(Rs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qt(Rs,n,s,"TestLoadImage: timeout",!1,e),Bt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else In(2);t.H=0,t.h&&t.h.za(e),yi(t),ii(t)}function yi(t){if(t.H=0,t.ma=[],t.h){const e=Ns(t.i);0==e.length&&0==t.j.length||(te(t.ma,e),te(t.ma,t.j),t.i.i.length=0,Zt(t.j),t.j.length=0),t.h.ya()}}function vi(t,e,n){var s=n instanceof ns?ss(n):new ns(n);if(""!=s.g)e&&(s.g=e+"."+s.g),rs(s,s.m);else{var i=Bt.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ns(null);s&&is(r,s),e&&(r.g=e),i&&rs(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&as(s,n,e),as(s,"VER",t.ra),ai(t,s),s}function wi(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new Bs(new Os({ob:!0})):new Bs(t.va)).Oa(t.J),e}function bi(){}function Ei(){if(le&&!(10<=Number(Ee)))throw Error("Environmental error: no available transport.")}function Ti(t,e){Ge.call(this),this.g=new ei(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!se(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!se(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ii(this)}function Ci(t){Mn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Si(){Pn.call(this),this.status=1}function Ii(t){this.g=t}function Ai(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function _i(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;o=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=n+(o<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(e=n+((o=e+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=r+((o=i+(e^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}function Di(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=0|t[i];s&&r==e||(n[i]=r,s=!1)}this.g=n}(Ft=Bs.prototype).Oa=function(t){this.M=t},Ft.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rn.g(),this.C=this.u?xn(this.u):xn(Rn),this.g.onreadystatechange=Wt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Ks(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Bt.FormData&&t instanceof Bt.FormData,!(0<=Jt($s,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qs(this),0<this.B&&((this.L=function(t){return le&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.ua,this)):this.A=un(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ks(this,t)}},Ft.ua=function(){void 0!==jt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))},Ft.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Ws(this))},Ft.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ws(this,!0)),Bs.$.N.call(this)},Ft.La=function(){this.s||(this.G||this.v||this.l?Gs(this):this.kb())},Ft.kb=function(){Gs(this)},Ft.isActive=function(){return!!this.g},Ft.da=function(){try{return 2<Ys(this)?this.g.status:-1}catch(t){return-1}},Ft.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ft.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),js(e)}},Ft.Ia=function(){return this.m},Ft.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ft=ei.prototype).ra=8,Ft.H=1,Ft.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Vn(this,this.l,t);let r=this.s;if(this.U&&(r?(r=ke(r),xe(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ci(this,i,e),as(n=ss(this.I),"RID",t),as(n,"CVER",22),this.F&&as(n,"X-HTTP-Session-Id",this.F),ai(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Js(r)))+"&"+e:this.o&&Zs(n,this.o,r)),Ds(this.i,i),this.bb&&as(n,"TYPE","init"),this.P?(as(n,"$req",e),as(n,"SID","null"),i.aa=!0,zn(i,n,null)):zn(i,n,e),this.H=2}}else 3==this.H&&(t?oi(this,t):0==this.j.length||Is(this.i)||oi(this))},Ft.Ma=function(){if(this.u=null,di(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_n(Wt(this.jb,this),t)}},Ft.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,In(10),si(this),di(this))},Ft.ib=function(){null!=this.v&&(this.v=null,si(this),ui(this),In(19))},Ft.pb=function(t){t?(this.l.info("Successfully pinged google.com"),In(2)):(this.l.info("Failed to ping google.com"),In(1))},Ft.isActive=function(){return!!this.h&&this.h.isActive(this)},(Ft=bi.prototype).Ba=function(){},Ft.Aa=function(){},Ft.za=function(){},Ft.ya=function(){},Ft.isActive=function(){return!0},Ft.Va=function(){},Ei.prototype.g=function(t,e){return new Ti(t,e)},Yt(Ti,Ge),Ti.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;In(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=vi(t,null,t.Y),ri(t)},Ti.prototype.close=function(){ni(this.g)},Ti.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Ye(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&ri(e)},Ti.prototype.N=function(){this.g.h=null,delete this.j,ni(this.g),delete this.g,Ti.$.N.call(this)},Yt(Ci,Mn),Yt(Si,Pn),Yt(Ii,bi),Ii.prototype.Ba=function(){We(this.g,"a")},Ii.prototype.Aa=function(t){We(this.g,new Ci(t))},Ii.prototype.za=function(t){We(this.g,new Si)},Ii.prototype.ya=function(){We(this.g,"b")},Yt(Ai,(function(){this.blockSize=-1})),Ai.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ai.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(0==i)for(;r<=n;)_i(this,t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){_i(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){_i(this,s),i=0;break}}this.h=i,this.i+=e},Ai.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var ki={};function Ni(t){return-128<=t&&128>t?function(t,e){var n=ki;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Di([0|t],0>t?-1:0)})):new Di([0|t],0>t?-1:0)}function xi(t){if(isNaN(t)||!isFinite(t))return Ri;if(0>t)return Vi(xi(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Li;return new Di(e,0)}var Li=4294967296,Ri=Ni(0),Oi=Ni(1),Mi=Ni(16777216);function Pi(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Fi(t){return-1==t.h}function Vi(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Di(n,~t.h).add(Oi)}function Ui(t,e){return t.add(Vi(e))}function ji(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bi(t,e){this.g=t,this.h=e}function qi(t,e){if(Pi(e))throw Error("division by zero");if(Pi(t))return new Bi(Ri,Ri);if(Fi(t))return e=qi(Vi(t),e),new Bi(Vi(e.g),Vi(e.h));if(Fi(e))return e=qi(t,Vi(e)),new Bi(Vi(e.g),e.h);if(30<t.g.length){if(Fi(t)||Fi(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Oi,s=e;0>=s.X(t);)n=zi(n),s=zi(s);var i=$i(n,1),r=$i(s,1);for(s=$i(s,2),n=$i(n,2);!Pi(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=$i(s,1),n=$i(n,1)}return e=Ui(t,i.R(e)),new Bi(i,e)}for(i=Ri;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(r=xi(n)).R(e);Fi(o)||0<o.X(t);)o=(r=xi(n-=s)).R(e);Pi(r)&&(r=Oi),i=i.add(r),t=Ui(t,o)}return new Bi(i,t)}function zi(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Di(n,t.h)}function $i(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Di(i,t.h)}(Ft=Di.prototype).ea=function(){if(Fi(this))return-Vi(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Li+s)*e,e*=Li}return t},Ft.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Pi(this))return"0";if(Fi(this))return"-"+Vi(this).toString(t);for(var e=xi(Math.pow(t,6)),n=this,s="";;){var i=qi(n,e).g,r=((0<(n=Ui(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Pi(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},Ft.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Ft.X=function(t){return Fi(t=Ui(this,t))?-1:Pi(t)?0:1},Ft.abs=function(){return Fi(this)?Vi(this):this},Ft.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(65535&this.D(i))+(65535&t.D(i)),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Di(n,-2147483648&n[n.length-1]?-1:0)},Ft.R=function(t){if(Pi(this)||Pi(t))return Ri;if(Fi(this))return Fi(t)?Vi(this).R(Vi(t)):Vi(Vi(this).R(t));if(Fi(t))return Vi(this.R(Vi(t)));if(0>this.X(Mi)&&0>t.X(Mi))return xi(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=65535&this.D(s),a=t.D(i)>>>16,c=65535&t.D(i);n[2*s+2*i]+=o*c,ji(n,2*s+2*i),n[2*s+2*i+1]+=r*c,ji(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,ji(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,ji(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Di(n,0)},Ft.gb=function(t){return qi(this,t).h},Ft.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Di(n,this.h&t.h)},Ft.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Di(n,this.h|t.h)},Ft.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Di(n,this.h^t.h)},Ei.prototype.createWebChannel=Ei.prototype.g,Ti.prototype.send=Ti.prototype.u,Ti.prototype.open=Ti.prototype.m,Ti.prototype.close=Ti.prototype.close,Dn.NO_ERROR=0,Dn.TIMEOUT=8,Dn.HTTP_ERROR=6,kn.COMPLETE="complete",Ln.EventType=On,On.OPEN="a",On.CLOSE="b",On.ERROR="c",On.MESSAGE="d",Ge.prototype.listen=Ge.prototype.O,Bs.prototype.listenOnce=Bs.prototype.P,Bs.prototype.getLastError=Bs.prototype.Sa,Bs.prototype.getLastErrorCode=Bs.prototype.Ia,Bs.prototype.getStatus=Bs.prototype.da,Bs.prototype.getResponseJson=Bs.prototype.Wa,Bs.prototype.getResponseText=Bs.prototype.ja,Bs.prototype.send=Bs.prototype.ha,Bs.prototype.setWithCredentials=Bs.prototype.Oa,Ai.prototype.digest=Ai.prototype.l,Ai.prototype.reset=Ai.prototype.reset,Ai.prototype.update=Ai.prototype.j,Di.prototype.add=Di.prototype.add,Di.prototype.multiply=Di.prototype.R,Di.prototype.modulo=Di.prototype.gb,Di.prototype.compare=Di.prototype.X,Di.prototype.toNumber=Di.prototype.ea,Di.prototype.toString=Di.prototype.toString,Di.prototype.getBits=Di.prototype.D,Di.fromNumber=xi,Di.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Vi(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=xi(Math.pow(n,8)),i=Ri,r=0;r<e.length;r+=8){var o=Math.min(8,e.length-r),a=parseInt(e.substring(r,r+o),n);8>o?(o=xi(Math.pow(n,o)),i=i.R(o).add(xi(a))):i=(i=i.R(s)).add(xi(a))}return i};var Ki=Ut.createWebChannelTransport=function(){return new Ei},Hi=Ut.getStatEventTarget=function(){return En()},Gi=Ut.ErrorCode=Dn,Wi=Ut.EventType=kn,Qi=Ut.Event=wn,Yi=Ut.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Xi=Ut.FetchXmlHttpFactory=Os,Ji=Ut.WebChannel=Ln,Zi=Ut.XhrIo=Bs,tr=Ut.Md5=Ai,er=Ut.Integer=Di;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nr.UNAUTHENTICATED=new nr(null),nr.GOOGLE_CREDENTIALS=new nr("google-credentials-uid"),nr.FIRST_PARTY=new nr("first-party-uid"),nr.MOCK_USER=new nr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let sr="9.23.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new X("@firebase/firestore");function rr(){return ir.logLevel}function or(t,...e){if(ir.logLevel<=K.DEBUG){const n=e.map(hr);ir.debug(`Firestore (${sr}): ${t}`,...n)}}function ar(t,...e){if(ir.logLevel<=K.ERROR){const n=e.map(hr);ir.error(`Firestore (${sr}): ${t}`,...n)}}function cr(t,...e){if(ir.logLevel<=K.WARN){const n=e.map(hr);ir.warn(`Firestore (${sr}): ${t}`,...n)}}function hr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t="Unexpected state"){const e=`FIRESTORE (${sr}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function lr(t,e){t||ur()}function dr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pr extends M{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(nr.UNAUTHENTICATED)))}shutdown(){}}class vr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class wr{constructor(t){this.t=t,this.currentUser=nr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{or("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(or("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(or("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(lr("string"==typeof e.accessToken),new mr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return lr(null===t||"string"==typeof t),new nr(t)}}class br{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=nr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Er{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new br(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(nr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Tr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cr{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&or("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,or("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{or("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):or("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(lr("string"==typeof t.token),this.T=t.token,new Tr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Sr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Ar(t,e){return t<e?-1:t>e?1:0}function _r(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new pr(fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new pr(fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new pr(fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new pr(fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Dr.fromMillis(Date.now())}static fromDate(t){return Dr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Dr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ar(this.nanoseconds,t.nanoseconds):Ar(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new kr(t)}static min(){return new kr(new Dr(0,0))}static max(){return new kr(new Dr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,n){void 0===e?e=0:e>t.length&&ur(),void 0===n?n=t.length-e:n>t.length-e&&ur(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class xr extends Nr{construct(t,e,n){return new xr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new pr(fr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new xr(e)}static emptyPath(){return new xr([])}}const Lr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rr extends Nr{construct(t,e,n){return new Rr(t,e,n)}static isValidIdentifier(t){return Lr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Rr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new pr(fr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new pr(fr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new pr(fr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new pr(fr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rr(e)}static emptyPath(){return new Rr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.path=t}static fromPath(t){return new Or(xr.fromString(t))}static fromName(t){return new Or(xr.fromString(t).popFirst(5))}static empty(){return new Or(xr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===xr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return xr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Or(new xr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Mr.UNKNOWN_ID=-1;function Pr(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=kr.fromTimestamp(1e9===s?new Dr(n+1,0):new Dr(n,s));return new Vr(i,Or.empty(),e)}function Fr(t){return new Vr(t.readTime,t.key,-1)}class Vr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Vr(kr.min(),Or.empty(),-1)}static max(){return new Vr(kr.max(),Or.empty(),-1)}}function Ur(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Or.comparator(t.documentKey,e.documentKey),0!==n?n:Ar(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Br{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t){if(t.code!==fr.FAILED_PRECONDITION||t.message!==jr)throw t;or("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ur(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new zr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof zr?e:zr.resolve(e)}catch(t){return zr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):zr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):zr.reject(e)}static resolve(t){return new zr(((e,n)=>{e(t)}))}static reject(t){return new zr(((e,n)=>{n(t)}))}static waitFor(t){return new zr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=zr.resolve(!1);for(const n of t)e=e.next((t=>t?zr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new zr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new zr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Hr(t){return null==t}function Gr(t){return 0===t&&1/t==-1/0}Kr.ct=-1;const Wr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Qr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Yr=Qr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,e){this.comparator=t,this.root=e||no.EMPTY}insert(t,e){return new to(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,no.BLACK,null,null))}remove(t){return new to(this.comparator,this.root.remove(t,this.comparator).copy(null,null,no.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new eo(this.root,t,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new eo(this.root,t,this.comparator,!0)}}class eo{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class no{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:no.RED,this.left=null!=s?s:no.EMPTY,this.right=null!=i?i:no.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new no(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return no.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return no.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,no.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,no.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ur();if(this.right.isRed())throw ur();const t=this.left.check();if(t!==this.right.check())throw ur();return t+(this.isRed()?0:1)}}no.EMPTY=null,no.RED=!0,no.BLACK=!1,no.EMPTY=new class{constructor(){this.size=0}get key(){throw ur()}get value(){throw ur()}get color(){throw ur()}get left(){throw ur()}get right(){throw ur()}copy(t,e,n,s,i){return this}insert(t,e,n){return new no(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{constructor(t){this.comparator=t,this.data=new to(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new io(this.data.getIterator())}getIteratorFrom(t){return new io(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof so))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new so(this.comparator);return e.data=t,e}}class io{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(t){this.fields=t,t.sort(Rr.comparator)}static empty(){return new ro([])}unionWith(t){let e=new so(Rr.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new ro(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _r(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new oo("Invalid base64 string: "+t):t}}(t);return new ao(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ao(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ar(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ao.EMPTY_BYTE_STRING=new ao("");const co=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ho(t){if(lr(!!t),"string"==typeof t){let e=0;const n=co.exec(t);if(lr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:uo(t.seconds),nanos:uo(t.nanos)}}function uo(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function lo(t){return"string"==typeof t?ao.fromBase64String(t):ao.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function po(t){const e=t.mapValue.fields.__previous_value__;return fo(e)?po(e):e}function go(t){const e=ho(t.mapValue.fields.__local_write_time__.timestampValue);return new Dr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,n,s,i,r,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class yo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof yo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fo(t)?4:Lo(t)?9007199254740991:10:ur()}function bo(t,e){if(t===e)return!0;const n=wo(t);if(n!==wo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ho(t.timestampValue),s=ho(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return lo(t.bytesValue).isEqual(lo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return uo(t.geoPointValue.latitude)===uo(e.geoPointValue.latitude)&&uo(t.geoPointValue.longitude)===uo(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return uo(t.integerValue)===uo(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=uo(t.doubleValue),s=uo(e.doubleValue);return n===s?Gr(n)===Gr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return _r(t.arrayValue.values||[],e.arrayValue.values||[],bo);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Xr(n)!==Xr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!bo(n[t],s[t])))return!1;return!0}(t,e);default:return ur()}}function Eo(t,e){return void 0!==(t.values||[]).find((t=>bo(t,e)))}function To(t,e){if(t===e)return 0;const n=wo(t),s=wo(e);if(n!==s)return Ar(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ar(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=uo(t.integerValue||t.doubleValue),s=uo(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Co(t.timestampValue,e.timestampValue);case 4:return Co(go(t),go(e));case 5:return Ar(t.stringValue,e.stringValue);case 6:return function(t,e){const n=lo(t),s=lo(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Ar(n[t],s[t]);if(0!==e)return e}return Ar(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ar(uo(t.latitude),uo(e.latitude));return 0!==n?n:Ar(uo(t.longitude),uo(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=To(n[t],s[t]);if(e)return e}return Ar(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===vo.mapValue&&e===vo.mapValue)return 0;if(t===vo.mapValue)return 1;if(e===vo.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Ar(s[t],r[t]);if(0!==e)return e;const o=To(n[s[t]],i[r[t]]);if(0!==o)return o}return Ar(s.length,r.length)}(t.mapValue,e.mapValue);default:throw ur()}}function Co(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ar(t,e);const n=ho(t),s=ho(e),i=Ar(n.seconds,s.seconds);return 0!==i?i:Ar(n.nanos,s.nanos)}function So(t){return Io(t)}function Io(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ho(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?lo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Or.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Io(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Io(t.fields[i])}`;return n+"}"}(t.mapValue):ur()}function Ao(t){return!!t&&"integerValue"in t}function _o(t){return!!t&&"arrayValue"in t}function Do(t){return!!t&&"nullValue"in t}function ko(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function No(t){return!!t&&"mapValue"in t}function xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=xo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(t){this.value=t}static empty(){return new Ro({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!No(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xo(e)}setAll(t){let e=Rr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=xo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());No(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bo(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Jr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Ro(xo(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oo{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new Oo(t,0,kr.min(),kr.min(),kr.min(),Ro.empty(),0)}static newFoundDocument(t,e,n,s){return new Oo(t,1,e,kr.min(),n,s,0)}static newNoDocument(t,e){return new Oo(t,2,e,kr.min(),kr.min(),Ro.empty(),0)}static newUnknownDocument(t,e){return new Oo(t,3,e,kr.min(),kr.min(),Ro.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(kr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ro.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ro.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=kr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Oo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Oo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t,e){this.position=t,this.inclusive=e}}function Po(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Or.comparator(Or.fromName(o.referenceValue),n.key):To(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Fo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bo(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Uo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{}class Bo extends jo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Qo(t,e,n):"array-contains"===e?new Zo(t,n):"in"===e?new ta(t,n):"not-in"===e?new ea(t,n):"array-contains-any"===e?new na(t,n):new Bo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Yo(t,n):new Xo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(To(e,this.value)):null!==e&&wo(this.value)===wo(e)&&this.matchesComparison(To(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ur()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class qo extends jo{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new qo(t,e)}matches(t){return zo(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function zo(t){return"and"===t.op}function $o(t){return Ko(t)&&zo(t)}function Ko(t){for(const e of t.filters)if(e instanceof qo)return!1;return!0}function Ho(t){if(t instanceof Bo)return t.field.canonicalString()+t.op.toString()+So(t.value);if($o(t))return t.filters.map((t=>Ho(t))).join(",");{const e=t.filters.map((t=>Ho(t))).join(",");return`${t.op}(${e})`}}function Go(t,e){return t instanceof Bo?function(t,e){return e instanceof Bo&&t.op===e.op&&t.field.isEqual(e.field)&&bo(t.value,e.value)}(t,e):t instanceof qo?function(t,e){return e instanceof qo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Go(n,e.filters[s])),!0)}(t,e):void ur()}function Wo(t){return t instanceof Bo?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(t):t instanceof qo?function(t){return t.op.toString()+" {"+t.getFilters().map(Wo).join(" ,")+"}"}(t):"Filter"}class Qo extends Bo{constructor(t,e,n){super(t,e,n),this.key=Or.fromName(n.referenceValue)}matches(t){const e=Or.comparator(t.key,this.key);return this.matchesComparison(e)}}class Yo extends Bo{constructor(t,e){super(t,"in",e),this.keys=Jo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Xo extends Bo{constructor(t,e){super(t,"not-in",e),this.keys=Jo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Jo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Or.fromName(t.referenceValue)))}class Zo extends Bo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _o(e)&&Eo(e.arrayValue,this.value)}}class ta extends Bo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Eo(this.value.arrayValue,e)}}class ea extends Bo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Eo(this.value.arrayValue,e)}}class na extends Bo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_o(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Eo(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.dt=null}}function ia(t,e=null,n=[],s=[],i=null,r=null,o=null){return new sa(t,e,n,s,i,r,o)}function ra(t){const e=dr(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Ho(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Hr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>So(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>So(t))).join(",")),e.dt=t}return e.dt}function oa(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Go(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fo(t.startAt,e.startAt)&&Fo(t.endAt,e.endAt)}function aa(t){return Or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function ha(t,e,n,s,i,r,o,a){return new ca(t,e,n,s,i,r,o,a)}function ua(t){return new ca(t)}function la(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function da(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fa(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function pa(t){return null!==t.collectionGroup}function ga(t){const e=dr(t);if(null===e.wt){e.wt=[];const t=fa(e),n=da(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Vo(t)),e.wt.push(new Vo(Rr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Vo(Rr.keyField(),t))}}}return e.wt}function ma(t){const e=dr(t);if(!e._t)if("F"===e.limitType)e._t=ia(e.path,e.collectionGroup,ga(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of ga(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Vo(n.field,e))}const n=e.endAt?new Mo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Mo(e.startAt.position,e.startAt.inclusive):null;e._t=ia(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function ya(t,e,n){return new ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function va(t,e){return oa(ma(t),ma(e))&&t.limitType===e.limitType}function wa(t){return`${ra(ma(t))}|lt:${t.limitType}`}function ba(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Wo(t))).join(", ")}]`),Hr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>So(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>So(t))).join(",")),`Target(${e})`}(ma(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Or.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ga(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Po(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,ga(t),e))&&!(t.endAt&&!function(t,e,n){const s=Po(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,ga(t),e))}(t,e)}function Ta(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ca(t){return(e,n)=>{let s=!1;for(const i of ga(t)){const t=Sa(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Sa(t,e,n){const s=t.field.isKeyField()?Or.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?To(s,i):ur()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ur()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Jr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Zr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new to(Or.comparator);function _a(){return Aa}const Da=new to(Or.comparator);function ka(...t){let e=Da;for(const n of t)e=e.insert(n.key,n);return e}function Na(t){let e=Da;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function xa(){return Ra()}function La(){return Ra()}function Ra(){return new Ia((t=>t.toString()),((t,e)=>t.isEqual(e)))}new to(Or.comparator);const Oa=new so(Or.comparator);function Ma(...t){let e=Oa;for(const n of t)e=e.add(n);return e}const Pa=new so(Ar);function Fa(){return Pa}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(e)?"-0":e}}function Ua(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this._=void 0}}function Ba(t,e,n){return t instanceof $a?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&fo(e)&&(e=po(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ka?Ha(t,e):t instanceof Ga?Wa(t,e):function(t,e){const n=za(t,e),s=Ya(n)+Ya(t.gt);return Ao(n)&&Ao(t.gt)?Ua(s):Va(t.serializer,s)}(t,e)}function qa(t,e,n){return t instanceof Ka?Ha(t,e):t instanceof Ga?Wa(t,e):n}function za(t,e){var n;return t instanceof Qa?Ao(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class $a extends ja{}class Ka extends ja{constructor(t){super(),this.elements=t}}function Ha(t,e){const n=Xa(e);for(const e of t.elements)n.some((t=>bo(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ga extends ja{constructor(t){super(),this.elements=t}}function Wa(t,e){let n=Xa(e);for(const e of t.elements)n=n.filter((t=>!bo(t,e)));return{arrayValue:{values:n}}}class Qa extends ja{constructor(t,e){super(),this.serializer=t,this.gt=e}}function Ya(t){return uo(t.integerValue||t.doubleValue)}function Xa(t){return _o(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ja}static exists(t){return new Ja(void 0,t)}static updateTime(t){return new Ja(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Za(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class tc{}function ec(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new uc(t.key,Ja.none()):new rc(t.key,t.data,Ja.none());{const n=t.data,s=Ro.empty();let i=new so(Rr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new oc(t.key,s,new ro(i.toArray()),Ja.none())}}function nc(t,e,n){t instanceof rc?function(t,e,n){const s=t.value.clone(),i=cc(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof oc?function(t,e,n){if(!Za(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=cc(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ac(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sc(t,e,n,s){return t instanceof rc?function(t,e,n,s){if(!Za(t.precondition,e))return n;const i=t.value.clone(),r=hc(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof oc?function(t,e,n,s){if(!Za(t.precondition,e))return n;const i=hc(t.fieldTransforms,s,e),r=e.data;return r.setAll(ac(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Za(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ic(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&_r(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ka&&e instanceof Ka||t instanceof Ga&&e instanceof Ga?_r(t.elements,e.elements,bo):t instanceof Qa&&e instanceof Qa?bo(t.gt,e.gt):t instanceof $a&&e instanceof $a}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class rc extends tc{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class oc extends tc{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ac(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function cc(t,e,n){const s=new Map;lr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,qa(o,a,n[i]))}return s}function hc(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Ba(t,r,e))}return s}class uc extends tc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lc{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&nc(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=La();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=ec(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(kr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ma())}isEqual(t){return this.batchId===t.batchId&&_r(this.mutations,t.mutations,((t,e)=>ic(t,e)))&&_r(this.baseMutations,t.baseMutations,((t,e)=>ic(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pc,gc;function mc(t){if(void 0===t)return ar("GRPC error has no .code"),fr.UNKNOWN;switch(t){case pc.OK:return fr.OK;case pc.CANCELLED:return fr.CANCELLED;case pc.UNKNOWN:return fr.UNKNOWN;case pc.DEADLINE_EXCEEDED:return fr.DEADLINE_EXCEEDED;case pc.RESOURCE_EXHAUSTED:return fr.RESOURCE_EXHAUSTED;case pc.INTERNAL:return fr.INTERNAL;case pc.UNAVAILABLE:return fr.UNAVAILABLE;case pc.UNAUTHENTICATED:return fr.UNAUTHENTICATED;case pc.INVALID_ARGUMENT:return fr.INVALID_ARGUMENT;case pc.NOT_FOUND:return fr.NOT_FOUND;case pc.ALREADY_EXISTS:return fr.ALREADY_EXISTS;case pc.PERMISSION_DENIED:return fr.PERMISSION_DENIED;case pc.FAILED_PRECONDITION:return fr.FAILED_PRECONDITION;case pc.ABORTED:return fr.ABORTED;case pc.OUT_OF_RANGE:return fr.OUT_OF_RANGE;case pc.UNIMPLEMENTED:return fr.UNIMPLEMENTED;case pc.DATA_LOSS:return fr.DATA_LOSS;default:return ur()}}(gc=pc||(pc={}))[gc.OK=0]="OK",gc[gc.CANCELLED=1]="CANCELLED",gc[gc.UNKNOWN=2]="UNKNOWN",gc[gc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gc[gc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gc[gc.NOT_FOUND=5]="NOT_FOUND",gc[gc.ALREADY_EXISTS=6]="ALREADY_EXISTS",gc[gc.PERMISSION_DENIED=7]="PERMISSION_DENIED",gc[gc.UNAUTHENTICATED=16]="UNAUTHENTICATED",gc[gc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gc[gc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gc[gc.ABORTED=10]="ABORTED",gc[gc.OUT_OF_RANGE=11]="OUT_OF_RANGE",gc[gc.UNIMPLEMENTED=12]="UNIMPLEMENTED",gc[gc.INTERNAL=13]="INTERNAL",gc[gc.UNAVAILABLE=14]="UNAVAILABLE",gc[gc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vc}static getOrCreateInstance(){return null===vc&&(vc=new yc),vc}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let vc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new er([4294967295,4294967295],0);function Ec(t){const e=wc().encode(t),n=new tr;return n.update(e),new Uint8Array(n.digest())}function Tc(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new er([n,s],0),new er([i,r],0)]}class Cc{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Sc(`Invalid padding: ${e}`);if(n<0)throw new Sc(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Sc(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Sc(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=er.fromNumber(this.It)}Et(t,e,n){let s=t.add(e.multiply(er.fromNumber(n)));return 1===s.compare(bc)&&(s=new er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Ec(t),[n,s]=Tc(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,s,t);if(!this.At(e))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),r=new Cc(i,s,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.It)return;const e=Ec(t),[n,s]=Tc(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,s,t);this.Rt(e)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Sc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Ac.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ic(kr.min(),s,new to(Ar),_a(),Ma())}}class Ac{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ac(n,e,Ma(),Ma(),Ma())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e,n,s){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=s}}class Dc{constructor(t,e){this.targetId=t,this.Vt=e}}class kc{constructor(t,e,n=ao.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Nc{constructor(){this.St=0,this.Dt=Rc(),this.Ct=ao.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=Ma(),e=Ma(),n=Ma();return this.Dt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:ur()}})),new Ac(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=Rc()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class xc{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=_a(),this.zt=Lc(),this.Wt=new to(Ar)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:ur()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,s=t.Vt.count,i=this.se(n);if(i){const r=i.target;if(aa(r))if(0===s){const t=new Or(r.path);this.Yt(n,t,Oo.newNoDocument(t,kr.min()))}else lr(1===s);else{const i=this.ie(n);if(i!==s){const s=this.re(t,i);if(0!==s){this.ee(n);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=yc.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var s,i,r,o,a,c;const h={localCacheCount:e,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(h.bloomFilter={applied:0===t,hashCount:null!==(s=null==u?void 0:u.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(o=null===(r=null===(i=null==u?void 0:u.bits)||void 0===i?void 0:i.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),h}(s,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:s}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=n;let a,c;try{a=lo(i).toUint8Array()}catch(t){if(t instanceof oo)return cr("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new Cc(a,r,o)}catch(t){return cr(t instanceof Sc?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:s!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let s=0;return n.forEach((n=>{const i=this.Gt.ue(),r=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(r)||(this.Yt(t,n,null),s++)})),s}ce(t){const e=new Map;this.Qt.forEach(((n,s)=>{const i=this.se(s);if(i){if(n.current&&aa(i.target)){const e=new Or(i.target.path);null!==this.jt.get(e)||this.ae(s,e)||this.Yt(s,e,Oo.newNoDocument(e,t))}n.Mt&&(e.set(s,n.Ot()),n.Ft())}}));let n=Ma();this.zt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const s=new Ic(t,e,this.Wt,this.jt,n);return this.jt=_a(),this.zt=Lc(),this.Wt=new to(Ar),s}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const s=this.Zt(t);this.ae(t,e)?s.Bt(e,1):s.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new Nc,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new so(Ar),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||or("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new Nc),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Lc(){return new to(Or.comparator)}function Rc(){return new to(Or.comparator)}const Oc={asc:"ASCENDING",desc:"DESCENDING"},Mc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Pc={and:"AND",or:"OR"};class Fc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Vc(t,e){return t.useProto3Json||Hr(e)?e:{value:e}}function Uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Bc(t){return lr(!!t),kr.fromTimestamp(function(t){const e=ho(t);return new Dr(e.seconds,e.nanos)}(t))}function qc(t,e){return function(t){return new xr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function zc(t){const e=xr.fromString(t);return lr(rh(e)),e}function $c(t,e){const n=zc(e);if(n.get(1)!==t.databaseId.projectId)throw new pr(fr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new pr(fr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Or(Wc(n))}function Kc(t,e){return qc(t.databaseId,e)}function Hc(t){const e=zc(t);return 4===e.length?xr.emptyPath():Wc(e)}function Gc(t){return new xr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wc(t){return lr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Qc(t,e){return{documents:[Kc(t,e.path)]}}function Yc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Kc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return ih(qo.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:nh(t.field),direction:Zc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Vc(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Xc(t){let e=Hc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){lr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Jc(t);return e instanceof qo&&$o(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Vo(sh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Hr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Mo(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new Mo(n,e)}(n.endAt)),ha(e,i,o,r,a,"F",c,h)}function Jc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=sh(t.unaryFilter.field);return Bo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=sh(t.unaryFilter.field);return Bo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=sh(t.unaryFilter.field);return Bo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=sh(t.unaryFilter.field);return Bo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ur()}}(t):void 0!==t.fieldFilter?function(t){return Bo.create(sh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ur()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return qo.create(t.compositeFilter.filters.map((t=>Jc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ur()}}(t.compositeFilter.op))}(t):ur()}function Zc(t){return Oc[t]}function th(t){return Mc[t]}function eh(t){return Pc[t]}function nh(t){return{fieldPath:t.canonicalString()}}function sh(t){return Rr.fromServerFormat(t.fieldPath)}function ih(t){return t instanceof Bo?function(t){if("=="===t.op){if(ko(t.value))return{unaryFilter:{field:nh(t.field),op:"IS_NAN"}};if(Do(t.value))return{unaryFilter:{field:nh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ko(t.value))return{unaryFilter:{field:nh(t.field),op:"IS_NOT_NAN"}};if(Do(t.value))return{unaryFilter:{field:nh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nh(t.field),op:th(t.op),value:t.value}}}(t):t instanceof qo?function(t){const e=t.getFilters().map((t=>ih(t)));return 1===e.length?e[0]:{compositeFilter:{op:eh(t.op),filters:e}}}(t):ur()}function rh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,e,n,s,i=kr.min(),r=kr.min(),o=ao.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new oh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new oh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new oh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new oh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t){this.fe=t}}function ch(t){const e=Xc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ya(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(uo(t.integerValue));else if("doubleValue"in t){const n=uo(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),Gr(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(lo(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?Lo(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):ur()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const t of Object.keys(n))this.Te(t,e),this.me(n[t],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const t of n)this.me(t,e)}ve(t,e){this.ye(e,37),Or.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}hh.Ve=new hh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(){this.rn=new lh}addToCollectionParentIndex(t,e){return this.rn.add(e),zr.resolve()}getCollectionParents(t,e){return zr.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return zr.resolve()}deleteFieldIndex(t,e){return zr.resolve()}getDocumentsMatchingTarget(t,e){return zr.resolve(null)}getIndexType(t,e){return zr.resolve(0)}getFieldIndexes(t,e){return zr.resolve([])}getNextCollectionGroupToUpdate(t){return zr.resolve(null)}getMinOffset(t,e){return zr.resolve(Vr.min())}getMinOffsetFromCollectionGroup(t,e){return zr.resolve(Vr.min())}updateCollectionGroup(t,e,n){return zr.resolve()}updateIndexEntries(t,e){return zr.resolve()}}class lh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new so(xr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new so(xr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class dh{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new dh(t,dh.DEFAULT_COLLECTION_PERCENTILE,dh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dh.DEFAULT_COLLECTION_PERCENTILE=10,dh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dh.DEFAULT=new dh(41943040,dh.DEFAULT_COLLECTION_PERCENTILE,dh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dh.DISABLED=new dh(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new fh(0)}static Mn(){return new fh(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(){this.changes=new Ia((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Oo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?zr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&sc(n.mutation,t,ro.empty(),Dr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ma()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ma()){const s=xa();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=ka();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=xa();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ma())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=_a();const r=Ra(),o=Ra();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof oc)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),sc(o.mutation,e,o.mutation.getFieldMask(),Dr.now())):r.set(e.key,ro.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new gh(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ra();let s=new to(((t,e)=>t-e)),i=Ma();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||ro.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||Ma()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,h=La();c.forEach((t=>{if(!i.has(t)){const s=ec(e.get(t),n.get(t));null!==s&&h.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return zr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):zr.resolve(xa());let o=-1,a=i;return r.next((e=>zr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?zr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ma()))).next((t=>({batchId:o,changes:Na(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Or(e)).next((t=>{let e=ka();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=ka();return this.indexManager.getCollectionParents(t,s).next((r=>zr.forEach(r,(r=>{const o=function(t,e){return new ca(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Oo.newInvalidDocument(s)))}));let n=ka();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&sc(r.mutation,i,ro.empty(),Dr.now()),Ea(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return zr.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:Bc(n.createTime)}),zr.resolve()}getNamedQuery(t,e){return zr.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:ch(t.bundledQuery),readTime:Bc(t.readTime)}}(e)),zr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.overlays=new to(Or.comparator),this.ls=new Map}getOverlay(t,e){return zr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=xa();return zr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.we(t,e,s)})),zr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),zr.resolve()}getOverlaysForCollection(t,e,n){const s=xa(),i=e.length+1,r=new Or(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return zr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new to(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=xa(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=xa(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return zr.resolve(o)}we(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new dc(e,n));let i=this.ls.get(e);void 0===i&&(i=Ma(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.fs=new so(bh.ds),this.ws=new so(bh._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new bh(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new bh(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new Or(new xr([])),n=new bh(e,t),s=new bh(e,t+1),i=[];return this.ws.forEachInRange([n,s],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new Or(new xr([])),n=new bh(e,t),s=new bh(e,t+1);let i=Ma();return this.ws.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new bh(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class bh{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return Or.comparator(t.key,e.key)||Ar(t.As,e.As)}static _s(t,e){return Ar(t.As,e.As)||Or.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new so(bh.ds)}checkEmpty(t){return zr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new lc(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.Rs=this.Rs.add(new bh(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return zr.resolve(r)}lookupMutationBatch(t,e){return zr.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.bs(n),i=s<0?0:s;return zr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return zr.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return zr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new bh(e,0),s=new bh(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,s],(t=>{const e=this.Ps(t.As);i.push(e)})),zr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new so(Ar);return e.forEach((t=>{const e=new bh(t,0),s=new bh(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,s],(t=>{n=n.add(t.As)}))})),zr.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Or.isDocumentKey(i)||(i=i.child(""));const r=new bh(new Or(i),0);let o=new so(Ar);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.As)),!0)}),r),zr.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){lr(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return zr.forEach(e.mutations,(s=>{const i=new bh(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new bh(e,0),s=this.Rs.firstAfterOrEqual(n);return zr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,zr.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.Ds=t,this.docs=new to(Or.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return zr.resolve(n?n.document.mutableCopy():Oo.newInvalidDocument(e))}getEntries(t,e){let n=_a();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Oo.newInvalidDocument(t))})),zr.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=_a();const r=e.path,o=new Or(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Ur(Fr(o),n)<=0||(s.has(o.key)||Ea(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return zr.resolve(i)}getAllFromCollectionGroup(t,e,n,s){ur()}Cs(t,e){return zr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ch(this)}getSize(t){return zr.resolve(this.size)}}class Ch extends ph{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.os.addEntry(t,s)):this.os.removeEntry(n)})),zr.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.persistence=t,this.xs=new Ia((t=>ra(t)),oa),this.lastRemoteSnapshotVersion=kr.min(),this.highestTargetId=0,this.Ns=0,this.ks=new wh,this.targetCount=0,this.Ms=fh.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),zr.resolve()}getLastRemoteSnapshotVersion(t){return zr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return zr.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),zr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),zr.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new fh(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,zr.resolve()}updateTargetData(t,e){return this.Fn(e),zr.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,zr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),zr.waitFor(i).next((()=>s))}getTargetCount(t){return zr.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return zr.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),zr.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),zr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),zr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return zr.resolve(n)}containsKey(t,e){return zr.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e){this.$s={},this.overlays={},this.Os=new Kr(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Sh(this),this.indexManager=new uh,this.remoteDocumentCache=function(t){return new Th(t)}((t=>this.referenceDelegate.Ls(t))),this.serializer=new ah(e),this.qs=new yh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new Eh(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){or("MemoryPersistence","Starting transaction:",t);const s=new Ah(this.Os.next());return this.referenceDelegate.Us(),n(s).next((t=>this.referenceDelegate.Ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Gs(t,e){return zr.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class Ah extends Br{constructor(t){super(),this.currentSequenceNumber=t}}class _h{constructor(t){this.persistence=t,this.Qs=new wh,this.js=null}static zs(t){return new _h(t)}get Ws(){if(this.js)return this.js;throw ur()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),zr.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),zr.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),zr.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return zr.forEach(this.Ws,(n=>{const s=Or.fromPath(n);return this.Hs(t,s).next((t=>{t||e.removeEntry(s,kr.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return zr.or([()=>zr.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=s}static Li(t,e){let n=Ma(),s=Ma();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Dh(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ki(t,e).next((i=>i||this.Gi(t,e,s,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(la(e))return zr.resolve(null);let n=ma(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=ya(e,null,"F"),n=ma(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=Ma(...s);return this.Ui.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.ji(e,s);return this.zi(e,r,i,n.readTime)?this.Ki(t,ya(e,null,"F")):this.Wi(t,r,e,n)}))))})))))}Gi(t,e,n,s){return la(e)||s.isEqual(kr.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const r=this.ji(e,i);return this.zi(e,r,n,s)?this.Qi(t,e):(rr()<=K.DEBUG&&or("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ba(e)),this.Wi(t,r,e,Pr(s,-1)))}))}ji(t,e){let n=new so(Ca(t));return e.forEach(((e,s)=>{Ea(t,s)&&(n=n.add(s))})),n}zi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(t,e){return rr()<=K.DEBUG&&or("QueryEngine","Using full collection scan to execute query:",ba(e)),this.Ui.getDocumentsMatchingQuery(t,e,Vr.min())}Wi(t,e,n,s){return this.Ui.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,e,n,s){this.persistence=t,this.Hi=e,this.serializer=s,this.Ji=new to(Ar),this.Yi=new Ia((t=>ra(t)),oa),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mh(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function xh(t,e,n,s){return new Nh(t,e,n,s)}async function Lh(t,e){const n=dr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Ma();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({er:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Rh(t){const e=dr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function Oh(t,e,n){let s=Ma(),i=Ma();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=_a();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(kr.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):or("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:s,sr:i}}))}function Mh(t,e){const n=dr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Bs.getTargetData(t,e).next((i=>i?(s=i,zr.resolve(s)):n.Bs.allocateTargetId(t).next((i=>(s=new oh(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ji.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Ph(t,e,n){const s=dr(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!$r(t))throw t;or("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function Fh(t,e,n){const s=dr(t);let i=kr.min(),r=Ma();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=dr(t),i=s.Yi.get(n);return void 0!==i?zr.resolve(s.Ji.get(i)):s.Bs.getTargetData(e,n)}(s,t,ma(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Hi.getDocumentsMatchingQuery(t,e,n?i:kr.min(),n?r:Ma()))).next((t=>(Vh(s,Ta(e),t),{documents:t,ir:r})))))}function Vh(t,e,n){let s=t.Xi.get(e)||kr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Xi.set(e,s)}class Uh{constructor(){this.activeTargetIds=Fa()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class jh{constructor(){this.Hr=new Uh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new Uh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){or("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){or("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh=null;function $h(){return null===zh?zh=268435456+Math.round(2147483648*Math.random()):zh++,"0x"+zh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Kh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,s,i){const r=$h(),o=this.To(t,e);or("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.Eo(a,s,i),this.Ao(t,o,a,n).then((e=>(or("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw cr("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,s,i,r){return this.Io(t,e,n,s,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+sr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=Kh[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,s){const i=$h();return new Promise(((r,o)=>{const a=new Zi;a.setWithCredentials(!0),a.listenOnce(Wi.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Gi.NO_ERROR:const e=a.getResponseJson();or("WebChannelConnection",`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case Gi.TIMEOUT:or("WebChannelConnection",`RPC '${t}' ${i} timed out`),o(new pr(fr.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const n=a.getStatus();if(or("WebChannelConnection",`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(fr).indexOf(e)>=0?e:fr.UNKNOWN}(e.status);o(new pr(t,e.message))}else o(new pr(fr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new pr(fr.UNAVAILABLE,"Connection failed."));break;default:ur()}}finally{or("WebChannelConnection",`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(s);or("WebChannelConnection",`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const s=$h(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ki(),o=Hi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Xi({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const h=i.join("");or("WebChannelConnection",`Creating RPC '${t}' stream ${s}: ${h}`,a);const u=r.createWebChannel(h,a);let l=!1,d=!1;const f=new Hh({ro:e=>{d?or("WebChannelConnection",`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(or("WebChannelConnection",`Opening RPC '${t}' stream ${s} transport.`),u.open(),l=!0),or("WebChannelConnection",`RPC '${t}' stream ${s} sending:`,e),u.send(e))},oo:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,Ji.EventType.OPEN,(()=>{d||or("WebChannelConnection",`RPC '${t}' stream ${s} transport opened.`)})),p(u,Ji.EventType.CLOSE,(()=>{d||(d=!0,or("WebChannelConnection",`RPC '${t}' stream ${s} transport closed`),f.wo())})),p(u,Ji.EventType.ERROR,(e=>{d||(d=!0,cr("WebChannelConnection",`RPC '${t}' stream ${s} transport errored:`,e),f.wo(new pr(fr.UNAVAILABLE,"The operation could not be completed")))})),p(u,Ji.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];lr(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){or("WebChannelConnection",`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=pc[t];if(void 0!==e)return mc(e)}(e),i=o.message;void 0===n&&(n=fr.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.wo(new pr(n,i)),u.close()}else or("WebChannelConnection",`RPC '${t}' stream ${s} received:`,i),f._o(i)}})),p(o,Qi.STAT_EVENT,(e=>{e.stat===Yi.PROXY?or("WebChannelConnection",`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===Yi.NOPROXY&&or("WebChannelConnection",`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){return new Fc(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,e-n);s>0&&or("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n,s,i,r,o,a){this.ii=t,this.$o=n,this.Oo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Yh(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===fr.RESOURCE_EXHAUSTED?(ar(e.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===fr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new pr(fr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return or("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(or("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Jh extends Xh{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ur()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(lr(void 0===e||"string"==typeof e),ao.fromBase64String(e||"")):(lr(void 0===e||e instanceof Uint8Array),ao.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?fr.UNKNOWN:mc(t.code);return new pr(e,t.message||"")}(o);n=new kc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=$c(t,s.document.name),r=Bc(s.document.updateTime),o=s.document.createTime?Bc(s.document.createTime):kr.min(),a=new Ro({mapValue:{fields:s.document.fields}}),c=Oo.newFoundDocument(i,r,o,a),h=s.targetIds||[],u=s.removedTargetIds||[];n=new _c(h,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=$c(t,s.document),r=s.readTime?Bc(s.readTime):kr.min(),o=Oo.newNoDocument(i,r),a=s.removedTargetIds||[];n=new _c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=$c(t,s.document),r=s.removedTargetIds||[];n=new _c([],r,i,null)}else{if(!("filter"in e))return ur();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:i}=t,r=new fc(s,i),o=t.targetId;n=new Dc(o,r)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return kr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?kr.min():e.readTime?Bc(e.readTime):kr.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=Gc(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=aa(s)?{documents:Qc(t,s)}:{query:Yc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=jc(t,e.resumeToken);const s=Vc(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(kr.min())>0){n.readTime=Uc(t,e.snapshotVersion.toTimestamp());const s=Vc(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ur()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=Gc(this.serializer),e.removeTarget=t,this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new pr(fr.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Io(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new pr(fr.UNKNOWN,t.toString())}))}vo(t,e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.vo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new pr(fr.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class tu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ar(e),this.mu=!1):or("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{uu(this)&&(or("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=dr(t);e.vu.add(4),await su(e),e.bu.set("Unknown"),e.vu.delete(4),await nu(e)}(this))}))})),this.bu=new tu(n,s)}}async function nu(t){if(uu(t))for(const e of t.Ru)await e(!0)}async function su(t){for(const e of t.Ru)await e(!1)}function iu(t,e){const n=dr(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),hu(n)?cu(n):vu(n).Ko()&&ou(n,e))}function ru(t,e){const n=dr(t),s=vu(n);n.Au.delete(e),s.Ko()&&au(n,e),0===n.Au.size&&(s.Ko()?s.jo():uu(n)&&n.bu.set("Unknown"))}function ou(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(kr.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vu(t).su(e)}function au(t,e){t.Vu.qt(e),vu(t).iu(e)}function cu(t){t.Vu=new xc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),vu(t).start(),t.bu.gu()}function hu(t){return uu(t)&&!vu(t).Uo()&&t.Au.size>0}function uu(t){return 0===dr(t).vu.size}function lu(t){t.Vu=void 0}async function du(t){t.Au.forEach(((e,n)=>{ou(t,e)}))}async function fu(t,e){lu(t),hu(t)?(t.bu.Iu(e),cu(t)):t.bu.set("Unknown")}async function pu(t,e,n){if(t.bu.set("Online"),e instanceof kc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Au.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Au.delete(s),t.Vu.removeTarget(s))}(t,e)}catch(n){or("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await gu(t,n)}else if(e instanceof _c?t.Vu.Ht(e):e instanceof Dc?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(kr.min()))try{const e=await Rh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(s);i&&t.Au.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.Au.get(e);if(!s)return;t.Au.set(e,s.withResumeToken(ao.EMPTY_BYTE_STRING,s.snapshotVersion)),au(t,e);const i=new oh(s.target,e,n,s.sequenceNumber);ou(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){or("RemoteStore","Failed to raise snapshot:",e),await gu(t,e)}}async function gu(t,e,n){if(!$r(e))throw e;t.vu.add(1),await su(t),t.bu.set("Offline"),n||(n=()=>Rh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{or("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await nu(t)}))}async function mu(t,e){const n=dr(t);n.asyncQueue.verifyOperationInProgress(),or("RemoteStore","RemoteStore received new credentials");const s=uu(n);n.vu.add(3),await su(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await nu(n)}async function yu(t,e){const n=dr(t);e?(n.vu.delete(2),await nu(n)):e||(n.vu.add(2),await su(n),n.bu.set("Unknown"))}function vu(t){return t.Su||(t.Su=function(t,e,n){const s=dr(t);return s.fu(),new Jh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{uo:du.bind(null,t),ao:fu.bind(null,t),nu:pu.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),hu(t)?cu(t):t.bu.set("Unknown")):(await t.Su.stop(),lu(t))}))),t.Su}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new wu(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new pr(fr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bu(t,e){if(ar("AsyncQueue",`${e}: ${t}`),$r(t))return new pr(fr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Or.comparator(e.key,n.key):(t,e)=>Or.comparator(t.key,e.key),this.keyedMap=ka(),this.sortedSet=new to(this.comparator)}static emptySet(t){return new Eu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Eu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Eu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.Cu=new to(Or.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):ur():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Cu{constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Cu(t,e,Eu.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&va(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.Nu=void 0,this.listeners=[]}}class Iu{constructor(){this.queries=new Ia((t=>wa(t)),va),this.onlineState="Unknown",this.ku=new Set}}async function Au(t,e){const n=dr(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Su),i)try{r.Nu=await n.onListen(s)}catch(t){const n=bu(t,`Initialization of query '${ba(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&Nu(n)}async function _u(t,e){const n=dr(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Du(t,e){const n=dr(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.$u(t)&&(s=!0);i.Nu=t}}s&&Nu(n)}function ku(t,e,n){const s=dr(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Nu(t){t.ku.forEach((t=>{t.next()}))}class xu{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Cu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=Cu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(t){this.key=t}}class Ru{constructor(t){this.key=t}}class Ou{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ma(),this.mutatedKeys=Ma(),this.tc=Ca(t),this.ec=new Eu(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new Tu,s=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),u=Ea(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||c&&this.tc(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:r,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ur()}};return n(t)-n(e)}(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const r=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Cu(this.query,t.ec,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Tu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=Ma(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new Ru(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new Lu(n))})),e}hc(t){this.Yu=t.ir,this.Zu=Ma();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return Cu.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Mu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Pu{constructor(t){this.key=t,this.fc=!1}}class Fu{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Ia((t=>wa(t)),va),this._c=new Map,this.mc=new Set,this.gc=new to(Or.comparator),this.yc=new Map,this.Ic=new wh,this.Tc={},this.Ec=new Map,this.Ac=fh.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Vu(t,e){const n=Ju(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const t=await Mh(n.localStore,ma(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Uu(n,e,s,"current"===r,t.resumeToken),n.isPrimaryClient&&iu(n.remoteStore,t)}return i}async function Uu(t,e,n,s,i){t.Rc=(e,n,s)=>async function(t,e,n,s){let i=e.view.sc(n);i.zi&&(i=await Fh(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Hu(t,e.targetId,o.cc),o.snapshot}(t,e,n,s);const r=await Fh(t.localStore,e,!0),o=new Ou(e,r.ir),a=o.sc(r.documents),c=Ac.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),h=o.applyChanges(a,t.isPrimaryClient,c);Hu(t,n,h.cc);const u=new Mu(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),h.snapshot}async function ju(t,e){const n=dr(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter((t=>!va(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ph(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ru(n.remoteStore,s.targetId),$u(n,s.targetId)})).catch(qr)):($u(n,s.targetId),await Ph(n.localStore,s.targetId,!0))}async function Bu(t,e){const n=dr(t);try{const t=await function(t,e){const n=dr(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,r.addedDocuments,a))));let h=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?h=h.withResumeToken(ao.EMPTY_BYTE_STRING,kr.min()).withLastLimboFreeSnapshotVersion(kr.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,s)),i=i.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,h,r)&&o.push(n.Bs.updateTargetData(t,h))}));let a=_a(),c=Ma();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Oh(t,r,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!s.isEqual(kr.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return zr.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.yc.get(e);s&&(lr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.fc=!0:t.modifiedDocuments.size>0?lr(s.fc):t.removedDocuments.size>0&&(lr(s.fc),s.fc=!1))})),await Qu(n,t,e)}catch(t){await qr(t)}}function qu(t,e,n){const s=dr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.wc.forEach(((n,s)=>{const i=s.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=dr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Mu(e)&&(s=!0)})),s&&Nu(n)}(s.eventManager,e),t.length&&s.dc.nu(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zu(t,e,n){const s=dr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let t=new to(Or.comparator);t=t.insert(r,Oo.newNoDocument(r,kr.min()));const n=Ma().add(r),i=new Ic(kr.min(),new Map,new to(Ar),t,n);await Bu(s,i),s.gc=s.gc.remove(r),s.yc.delete(e),Wu(s)}else await Ph(s.localStore,e,!1).then((()=>$u(s,e,n))).catch(qr)}function $u(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||Ku(t,e)}))}function Ku(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(ru(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Wu(t))}function Hu(t,e,n){for(const s of n)s instanceof Lu?(t.Ic.addReference(s.key,e),Gu(t,s)):s instanceof Ru?(or("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Ku(t,s.key)):ur()}function Gu(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(or("SyncEngine","New document in limbo: "+n),t.mc.add(s),Wu(t))}function Wu(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new Or(xr.fromString(e)),s=t.Ac.next();t.yc.set(s,new Pu(n)),t.gc=t.gc.insert(n,s),iu(t.remoteStore,new oh(ma(ua(n.path)),s,"TargetPurposeLimboResolution",Kr.ct))}}async function Qu(t,e,n){const s=dr(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach(((t,a)=>{o.push(s.Rc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Dh.Li(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.dc.nu(i),await async function(t,e){const n=dr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>zr.forEach(e,(e=>zr.forEach(e.Fi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>zr.forEach(e.Bi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!$r(t))throw t;or("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(e,i)}}}(s.localStore,r))}async function Yu(t,e){const n=dr(t);if(!n.currentUser.isEqual(e)){or("SyncEngine","User change. New user:",e.toKey());const t=await Lh(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach((t=>{t.forEach((t=>{t.reject(new pr(fr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Ec.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Qu(n,t.er)}}function Xu(t,e){const n=dr(t),s=n.yc.get(e);if(s&&s.fc)return Ma().add(s.key);{let t=Ma();const s=n._c.get(e);if(!s)return t;for(const e of s){const s=n.wc.get(e);t=t.unionWith(s.view.nc)}return t}}function Ju(t){const e=dr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xu.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zu.bind(null,e),e.dc.nu=Du.bind(null,e.eventManager),e.dc.Pc=ku.bind(null,e.eventManager),e}class Zu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return xh(this.persistence,new kh,t.initialUser,this.serializer)}createPersistence(t){return new Ih(_h.zs,this.serializer)}createSharedClientState(t){return new jh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yu.bind(null,this.syncEngine),await yu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Iu}createDatastore(t){const e=Qh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Gh(s));var s;return function(t,e,n,s){return new Zh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>qu(this.syncEngine,t,0),r=qh.D()?new qh:new Bh,new eu(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Fu(t,e,n,s,i,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=dr(t);or("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await su(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):ar("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=nr.UNAUTHENTICATED,this.clientId=Ir.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{or("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(or("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new pr(fr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function sl(t,e){t.asyncQueue.verifyOperationInProgress(),or("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Lh(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function il(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ol(t);or("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>mu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>mu(e.remoteStore,n))),t._onlineComponents=e}function rl(t){return"FirebaseError"===t.name?t.code===fr.FAILED_PRECONDITION||t.code===fr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function ol(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){or("FirestoreClient","Using user provided OfflineComponentProvider");try{await sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rl(n))throw n;cr("Error using user provided cache. Falling back to memory cache: "+n),await sl(t,new Zu)}}else or("FirestoreClient","Using default OfflineComponentProvider"),await sl(t,new Zu);return t._offlineComponents}async function al(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(or("FirestoreClient","Using user provided OnlineComponentProvider"),await il(t,t._uninitializedComponentsProvider._online)):(or("FirestoreClient","Using default OnlineComponentProvider"),await il(t,new tl))),t._onlineComponents}async function cl(t){const e=await al(t),n=e.eventManager;return n.onListen=Vu.bind(null,e.syncEngine),n.onUnlisten=ju.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ul=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){if(!n)throw new pr(fr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dl(t){if(!Or.isDocumentKey(t))throw new pr(fr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ur()}function pl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new pr(fr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new pr(fr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new pr(fr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new pr(fr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new pr(fr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new pr(fr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new pr(fr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new pr(fr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ml{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new pr(fr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new pr(fr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new yr;switch(t.type){case"firstParty":return new Er(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new pr(fr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ul.get(t);e&&(or("ComponentProvider","Removing Datastore"),ul.delete(t),e.terminate())}(this),Promise.resolve()}}function yl(t,e,n,s={}){var i;const r=(t=pl(t,ml))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&cr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=nr.MOCK_USER;else{e=R(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new pr(fr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new nr(r)}t._authCredentials=new vr(new mr(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new vl(this.firestore,t,this._key)}}class wl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wl(this.firestore,t,this._query)}}class bl extends wl{constructor(t,e,n){super(t,e,ua(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new vl(this.firestore,null,new Or(t))}withConverter(t){return new bl(this.firestore,t,this._path)}}function El(t,e,...n){if(t=j(t),1===arguments.length&&(e=Ir.A()),ll("doc","path",e),t instanceof ml){const s=xr.fromString(e,...n);return dl(s),new vl(t,null,new Or(s))}{if(!(t instanceof vl||t instanceof bl))throw new pr(fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xr.fromString(e,...n));return dl(s),new vl(t.firestore,t instanceof bl?t.converter:null,new Or(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Yh(this,"async_queue_retry"),this.Xc=()=>{const t=Wh();t&&or("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=Wh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=Wh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new gr;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!$r(t))throw t;or("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw ar("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const s=wu.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(s),s}Zc(){this.Wc&&ur()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}function Cl(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}(t)}class Sl extends ml{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Tl,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Al(this),this._firestoreClient.terminate()}}function Il(t){return t._firestoreClient||Al(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Al(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new mo(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hl(s.experimentalLongPollingOptions),s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nl(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _l{constructor(t){this._byteString=t}static fromBase64String(t){try{return new _l(ao.fromBase64String(t))}catch(t){throw new pr(fr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new _l(ao.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new pr(fr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new pr(fr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new pr(fr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ar(this._lat,t._lat)||Ar(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new RegExp("[~\\*/\\[\\]]");function xl(t,e,n){if(e.search(Nl)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dl(...e.split("."))._internalPath}catch(s){throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ll(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new pr(fr.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ol(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ml("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ol extends Rl{data(){return super.data()}}function Ml(t,e){return"string"==typeof e?xl(t,e):e instanceof Dl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new pr(fr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fl{convertValue(t,e="none"){switch(wo(t)){case 0:return null;case 1:return t.booleanValue;case 2:return uo(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(lo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ur()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Jr(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new kl(uo(t.latitude),uo(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=po(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(go(t));default:return null}}convertTimestamp(t){const e=ho(t);return new Dr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=xr.fromString(t);lr(rh(n));const s=new yo(n.get(1),n.get(3)),i=new Or(n.popFirst(5));return s.isEqual(e)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ul extends Rl{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ml("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class jl extends Ul{data(t={}){return super.data(t)}}class Bl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Vl(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new jl(this._firestore,this._userDataWriter,n.key,n,new Vl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new pr(fr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new jl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Vl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new jl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Vl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:ql(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ql(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ur()}}class zl extends Fl{constructor(t){super(),this.firestore=t}convertBytes(t){return new _l(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new vl(this.firestore,null,e)}}function $l(t,...e){var n,s,i;t=j(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Cl(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Cl(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,h,u;if(t instanceof vl)h=pl(t.firestore,Sl),u=ua(t._key.path),c={next:n=>{e[o]&&e[o](Kl(h,t,n))},error:e[o+1],complete:e[o+2]};else{const n=pl(t,wl);h=pl(n.firestore,Sl),u=n._query;const s=new zl(h);c={next:t=>{e[o]&&e[o](new Bl(h,s,n,t))},error:e[o+1],complete:e[o+2]},Pl(t._query)}return function(t,e,n,s){const i=new el(s),r=new xu(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Au(await cl(t),r))),()=>{i.Dc(),t.asyncQueue.enqueueAndForget((async()=>_u(await cl(t),r)))}}(Il(h),u,a,c)}function Kl(t,e,n){const s=n.docs.get(e._key),i=new zl(t);return new Ul(t,i,e._key,s,new Vl(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){sr="9.23.0",Et(new B("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new Sl(new wr(t.getProvider("auth-internal")),new Cr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new pr(fr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),_t("@firebase/firestore","3.13.0",t),_t("@firebase/firestore","3.13.0","esm2017")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_t("firebase","9.23.0","app");var Hl=(h=s("jQ7Zu")).forwardRef((function({title:t,titleId:e,...n},s){return h.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":e},n),t?h.createElement("title",{id:e},t):null,h.createElement("path",{fillRule:"evenodd",d:"M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",clipRule:"evenodd"}))})),Gl=s("aLBVI"),Wl=(Gl=s("aLBVI"),s("3hLxt"));async function Ql(){return Gl.default.get(Wl.paths.session).json()}async function Yl(t,e){const n={"x-session-id":e};await Gl.default.post(Wl.paths.session,{json:t,headers:n})}const Xl=window;function Jl(){return Object.entries(Xl.kilt).filter((([,t])=>t.specVersion.startsWith("3."))).map((([t])=>t))}async function Zl(t){if(!t)throw new Error("No provider");const{dAppEncryptionKeyUri:e,challenge:n,sessionId:s}=await Ql(),i=await t.startSession("Peranto Attest App",e,n),{encryptionKeyUri:r,encryptedChallenge:o,nonce:a}=i;await Yl({encryptionKeyUri:r,encryptedChallenge:o,nonce:a},s);const{name:c}=t;return{...i,sessionId:s,name:c}}function td(t){return t instanceof Error?t:new Error(String(t))}var ed=s("5jKHo");const nd=["email","twitter","id"],sd={email:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Email",properties:{Email:{type:"string"}},type:"object",$id:"kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac"},twitter:{$schema:"http://kilt-protocol.org/draft-01/ctype#",title:"Twitter",properties:{Twitter:{type:"string"}},type:"object",$id:"kilt:ctype:0x47d04c42bdf7fdd3fc5a194bcaa367b2f4766a6b16ae3df628927656d818f420"},id:{$schema:"http://kilt-protocol.org/draft-01/ctype#",properties:{email:{type:"string"},username:{type:"string"}},title:"Authorization",type:"object",$id:"kilt:ctype:0xdf952230c87e7fbdc8503a394540c8e99029180611e7107c4eee33f67f57aa57"}},id={id:2,email:2,twitter:3};function rd(t){return nd.includes(t)}Wl=s("3hLxt");const od=Array.from(vt.values()),ad=function(t,e){const n="string"==typeof t?t:e||"(default)",s=Tt("object"==typeof t?t:At(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=N("firestore");t&&yl(s,...t)}return s}(od.length>0?od[0]:It({apiKey:"AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc",authDomain:"peranto-test.firebaseapp.com",projectId:"peranto-test",storageBucket:"peranto-test.appspot.com",messagingSenderId:"777447831295",appId:"1:777447831295:web:6a987d7c8b307ecef43eca"})),cd={closed:(0,a.jsx)("p",{children:"Your wallet was closed. Please try again."}),unauthorized:(0,a.jsxs)("p",{children:["The authorization was rejected. Follow the instructions on our Tech Support site to establish the connection between this attester and your wallet.",(0,a.jsx)("a",{href:"https://support.kilt.io/support/solutions/articles/80000968082-how-to-grant-access-to-website",target:"_blank",rel:"noreferrer",children:"Tech Support"})]}),unknown:(0,a.jsx)("p",{children:"Something went wrong! Try again or reload the page or restart your browser."})};function hd({onConnect:t}){const{kilt:e}=Xl,[n,s]=(0,h.useState)(Jl()),[i,r]=(0,h.useState)(!1),[o,c]=(0,h.useState)();(0,h.useEffect)((()=>{function t(){s(Jl())}return window.dispatchEvent(new CustomEvent("kilt-dapp#initialized")),window.addEventListener("kilt-extension#initialized",t),()=>window.removeEventListener("kilt-extension#initialized",t)}),[]);const u=(0,h.useCallback)((async n=>{try{r(!0),c(void 0),t(await Zl(e[n]))}catch(t){const{message:e}=td(t);e.includes("closed")?c("closed"):e.includes("Not authorized")?c("unauthorized"):(c("unknown"),console.error(t)),r(!1)}}),[t,e]);return(0,a.jsxs)("section",{className:"flex flex-col items-center gap-4 text-justify",children:[0===n.length&&(0,a.jsx)("p",{children:"Looking for a wallet… To make a claim you need to have e.g. Sporran wallet installed and have an identity configured in it."}),n.map((t=>{return(0,a.jsxs)("button",{className:(n=!!o,(n?"btn-error":"btn-neutral")+" btn btn-active max-w-[200px]"),type:"button",onClick:()=>u(t),children:["Connect to ",e[t].name]},t);var n})),i&&(0,a.jsx)("button",{className:"btn btn-active btn-neutral max-w-[200px]",type:"button",children:(0,a.jsx)("span",{className:"loading loading-ring loading-md"})}),o&&cd[o]]})}function ud(){const{type:t}=(0,u.useParams)(),[e,n]=(0,h.useState)(""),[s,i]=(0,h.useState)(),[r,o]=(0,h.useState)("start"),[c,l]=(0,h.useState)();(0,h.useEffect)((()=>{e&&$l(El(ad,"metamap","testId_verification_completed"),(t=>{const e=t.data();if(!e)return;const n=JSON.parse(e.payload).documents[0],s=function(t){const e=Date.now()-t.getTime(),n=new Date(e);return Math.abs(n.getUTCFullYear()-1970)}(new Date(n.fields.dateOfBirth.value)),i=n.fields.fullName.value;document.querySelector('[name="email"]').value=i,document.querySelector('[name="username"]').value=s}))}),[e]);const d=(0,h.useCallback)((t=>{i(t)}),[]),f=(0,h.useCallback)((async e=>{if(e.preventDefault(),l(void 0),!s||!t||!rd(t))return;const n=Object.fromEntries(new FormData(e.currentTarget).entries());try{const{sessionId:e}=s,i={"x-session-id":e};await s.listen((async t=>{await Gl.default.post(Wl.paths.requestAttestation,{headers:i,json:t}),o("requested")}));const r=await Gl.default.post(Wl.paths.terms,{headers:i,json:{type:t,claimContents:n}}).json();await s.send(r)}catch(t){const{message:e}=td(t);e.includes("closed")||e.includes("Conflict")?l("closed"):e.includes("Not authorized")?l("unauthorized"):(l("unknown"),console.error(t))}}),[s,t]),p=(0,h.useCallback)((async t=>{if(t.preventDefault(),l(void 0),s)try{const{sessionId:t}=s,e={"x-session-id":t};await Gl.default.post(Wl.paths.pay,{headers:e}),o("paid")}catch(t){console.error(t),l("unknown")}}),[s]);if(!t||!rd(t))return(0,a.jsx)("p",{children:"Error - Unsupported CType"});const g=sd[t],{title:m,properties:y}=g;return(0,a.jsx)("section",{className:"bg-base-200 min-h-screen flex flex-col justify-center",children:(0,a.jsx)("div",{className:"container mx-auto max-w-5xl card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:(0,a.jsxs)("div",{className:"card-body flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)(u.Link,{to:ed.paths.home,className:"absolute -top-7 -left-2 text-xs flex items-center btn btn-link p-0 m-0",children:(0,a.jsx)(Hl,{className:"w-6"})})}),(0,a.jsxs)("div",{className:"flex justify-between items-end mt-2",children:[(0,a.jsx)("h2",{className:"text-xl",children:"Authorization"===m?"INE":m}),(0,a.jsxs)("span",{children:["Price: ",id[t]," KILT"]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:["start"===r&&"id"===t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"my-8",onMouseEnter:()=>{document.querySelector("mati-button")?.addEventListener("mati:userStartedSdk",(({detail:t})=>{n(t.verificationId)}))},children:(0,a.jsx)("mati-button",{clientid:"64811ce44d683b001b9013f0",flowId:"64811ce44d683b001b9013ef"})}),(0,a.jsxs)("form",{className:"my-2",onSubmit:f,children:[Object.keys(y).map((t=>(0,a.jsxs)("label",{className:"hidden",children:[t,":",(0,a.jsx)("input",{name:t,disabled:!s,required:!0})]},t))),!s&&(0,a.jsx)(hd,{onConnect:d}),s&&(0,a.jsx)("button",{className:"btn btn-active btn-primary",type:"submit",children:"Submit"})]})]}),"start"===r&&"id"!==t&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:f,children:[Object.keys(y).map((t=>(0,a.jsxs)("label",{children:[t,":",(0,a.jsx)("input",{name:t,disabled:!s,required:!0})]},t))),!s&&(0,a.jsx)(hd,{onConnect:d}),s&&(0,a.jsx)("button",{className:"btn btn-active btn-primary",type:"submit",children:"Submit"})]})}),"requested"===r&&(0,a.jsxs)("form",{onSubmit:p,children:[(0,a.jsx)("p",{children:"Thanks for your request. Please pay"}),(0,a.jsx)("button",{children:"Pay"})]}),"paid"===r&&(0,a.jsx)("p",{children:"Thanks for your payment! Your request has been sent to the attester for processing. You can check the attestation status in your wallet."}),c&&cd[c]]})]})})})}function ld(){return(0,a.jsx)("section",{className:"bg-base-200",children:(0,a.jsx)("div",{className:"hero min-h-screen container mx-auto max-w-5xl",children:(0,a.jsxs)("div",{className:"hero-content flex-col lg:flex-row",children:[(0,a.jsxs)("div",{className:"text-center lg:text-left",children:[(0,a.jsx)("h1",{className:"text-5xl font-bold text-[#1b2a51]",children:"Peranto Attest App"}),(0,a.jsx)("p",{className:"py-6 text-[#1b2a51]",children:"This KILT Attester Example demonstrates how to issue credentials for a couple basic claim types which already exist on the KILT blockchain. The user chooses a claim type, enters the claim data, makes a (mock) payment, and the claim is sent to the attester to be reviewed."})]}),(0,a.jsx)("div",{className:"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("p",{className:"text-[#1b2a51]",children:"Start selecting a claim type:"}),(0,a.jsx)("ul",{className:"menu w-56 rounded-box",children:nd.map(((t,e)=>(0,a.jsx)("li",{children:(0,a.jsxs)(u.Link,{className:"link text-[#1b2a51]",to:(0,u.generatePath)(ed.paths.claim,{type:t}),children:[0===e&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),1===e&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),2===e&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Authorization"===sd[t].title?"INE":sd[t].title]})},t)))})]})})]})})})}(0,c.createRoot)(document.querySelector("#app")).render((0,a.jsx)(u.BrowserRouter,{children:(0,a.jsxs)(u.Routes,{children:[(0,a.jsx)(u.Route,{path:ed.paths.home,element:(0,a.jsx)(ld,{})}),(0,a.jsx)(u.Route,{path:ed.paths.claim,element:(0,a.jsx)(ud,{})}),(0,a.jsx)(u.Route,{path:"*",element:(0,a.jsx)("p",{children:"404 - Not found"})})]})}));
//# sourceMappingURL=index.8f16e1a0.js.map
