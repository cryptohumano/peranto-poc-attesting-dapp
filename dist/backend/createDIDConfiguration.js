// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gGDoX":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "83a6293885553881";
module.bundle.HMR_BUNDLE_ID = "50d718c075073c10";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7L8HI":[function(require,module,exports) {
var _promises = require("fs/promises");
var _nodePath = require("path");
var _sdkJs = require("@kiltprotocol/sdk-js");
var _configuration = require("./utilities/configuration");
var _domainLinkageCredential = require("./utilities/domainLinkageCredential");
(async ()=>{
    console.log(`Generating the .well-known/did-configuration.json file for DID ${(0, _configuration.configuration).did} and host ${(0, _configuration.configuration).baseUri}`);
    const wellKnown = (0, _nodePath.join)((0, _configuration.configuration).distFolder, "user", ".well-known");
    try {
        await (0, _promises.lstat)(wellKnown);
    } catch (error) {
        console.warn("Looks like the .well-known folder doesn’t exist, creating", error.message);
        await (0, _promises.mkdir)(wellKnown);
    }
    const credential = await (0, _domainLinkageCredential.attestDomainLinkage)();
    const domainLinkageCredential = (0, _domainLinkageCredential.fromCredential)(credential);
    const didConfigurationResource = {
        "@context": "https://identity.foundation/.well-known/did-configuration/v1",
        linked_dids: [
            domainLinkageCredential
        ]
    };
    const json = JSON.stringify(didConfigurationResource);
    const path = (0, _nodePath.join)(wellKnown, "did-configuration.json");
    await (0, _promises.writeFile)(path, json);
    await (0, _sdkJs.disconnect)();
})();

},{"./utilities/configuration":"js8cz","./utilities/domainLinkageCredential":"8ytRK"}],"js8cz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "configuration", ()=>configuration);
var _nodeProcess = require("process");
var _nodePath = require("path");
var _nodePathDefault = parcelHelpers.interopDefault(_nodePath);
var _dotenv = require("dotenv");
var _pino = require("pino");
(0, _dotenv.config)();
class ConfigurationError extends Error {
    constructor(message){
        super(message);
        (0, _pino.pino)().fatal(message);
        process.exit(1);
    }
}
const { env  } = process;
const baseUri = env.URL;
if (!baseUri) throw new ConfigurationError("URL is not provided");
const did = env.DID;
const payerMnemonic = env.SECRET_PAYER_MNEMONIC;
if (!payerMnemonic) throw new ConfigurationError("SECRET_PAYER_MNEMONIC is not provided");
const authenticationMnemonic = env.SECRET_AUTHENTICATION_MNEMONIC;
if (!authenticationMnemonic) throw new ConfigurationError("SECRET_AUTHENTICATION_MNEMONIC is not provided");
const assertionMethodMnemonic = env.SECRET_ASSERTION_METHOD_MNEMONIC;
if (!assertionMethodMnemonic) throw new ConfigurationError("SECRET_ASSERTION_METHOD_MNEMONIC is not provided");
const keyAgreementMnemonic = env.SECRET_KEY_AGREEMENT_MNEMONIC;
if (!keyAgreementMnemonic) throw new ConfigurationError("SECRET_KEY_AGREEMENT_MNEMONIC is not provided");
const blockchainEndpoint = env.BLOCKCHAIN_ENDPOINT;
if (!blockchainEndpoint) throw new ConfigurationError("No blockchain endpoint provided");
const adminUsername = env.ADMIN_USERNAME;
const adminPassword = env.ADMIN_PASSWORD;
if (!adminUsername || !adminPassword) throw new ConfigurationError("Admin credentials missing");
const configuration = {
    port: parseInt(env.PORT) || 3000,
    blockchainEndpoint,
    baseUri,
    distFolder: (0, _nodePathDefault.default).join((0, _nodeProcess.cwd)(), "dist", "frontend"),
    did,
    payerMnemonic,
    authenticationMnemonic,
    assertionMethodMnemonic,
    keyAgreementMnemonic,
    adminUsername,
    adminPassword
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"jV6S9":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8ytRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attestDomainLinkage", ()=>attestDomainLinkage);
parcelHelpers.export(exports, "fromCredential", ()=>fromCredential);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _vcExport = require("@kiltprotocol/vc-export");
var _configuration = require("./configuration");
var _domainLinkageCType = require("../cTypes/domainLinkageCType");
var _cryptoCallbacks = require("./cryptoCallbacks");
const { DEFAULT_VERIFIABLECREDENTIAL_CONTEXT , DEFAULT_VERIFIABLECREDENTIAL_TYPE , KILT_SELF_SIGNED_PROOF_TYPE , KILT_VERIFIABLECREDENTIAL_TYPE ,  } = (0, _vcExport.constants);
const context = [
    DEFAULT_VERIFIABLECREDENTIAL_CONTEXT,
    "https://identity.foundation/.well-known/did-configuration/v1", 
];
const TTL = 157680000000; // 5 years
async function attestDomainLinkage() {
    const claimContents = {
        id: (0, _configuration.configuration).did,
        origin: (0, _configuration.configuration).baseUri
    };
    const claim = (0, _sdkJs.Claim).fromCTypeAndClaimContents((0, _domainLinkageCType.domainLinkageCType), claimContents, (0, _configuration.configuration).did);
    const credential = (0, _sdkJs.Credential).fromClaim(claim);
    return (0, _sdkJs.Credential).createPresentation({
        credential,
        // the domain linkage credential is special in that it is signed with the assertionMethod key
        signCallback: (0, _cryptoCallbacks.signWithAssertionMethod)
    });
}
function fromCredential(input) {
    const credentialSubject = {
        ...input.claim.contents,
        rootHash: input.rootHash
    };
    const issuer = input.claim.owner;
    const issuanceDate = new Date().toISOString();
    const expirationDate = new Date(Date.now() + TTL).toISOString();
    const { claimerSignature  } = input;
    // add self-signed proof
    const proof = {
        type: KILT_SELF_SIGNED_PROOF_TYPE,
        proofPurpose: "assertionMethod",
        verificationMethod: claimerSignature.keyUri,
        signature: claimerSignature.signature,
        challenge: claimerSignature.challenge
    };
    return {
        "@context": context,
        issuer,
        issuanceDate,
        expirationDate,
        type: [
            DEFAULT_VERIFIABLECREDENTIAL_TYPE,
            "DomainLinkageCredential",
            KILT_VERIFIABLECREDENTIAL_TYPE, 
        ],
        credentialSubject,
        proof
    };
}

},{"./configuration":"js8cz","../cTypes/domainLinkageCType":"jzZML","./cryptoCallbacks":"4y48h","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"jzZML":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "domainLinkageCType", ()=>domainLinkageCType);
const domainLinkageCType = {
    $schema: "http://kilt-protocol.org/draft-01/ctype#",
    title: "Domain Linkage Credential",
    properties: {
        id: {
            type: "string"
        },
        origin: {
            type: "string"
        }
    },
    type: "object",
    $id: "kilt:ctype:0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"4y48h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sign", ()=>sign);
parcelHelpers.export(exports, "signWithAssertionMethod", ()=>signWithAssertionMethod);
parcelHelpers.export(exports, "encrypt", ()=>encrypt);
parcelHelpers.export(exports, "decrypt", ()=>decrypt);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _keypairs = require("./keypairs");
var _didDocument = require("./didDocument");
async function sign({ data , keyRelationship  }) {
    if (keyRelationship === "capabilityDelegation") throw new Error("Delegation not supported");
    const { authentication , assertionMethod  } = await (0, _keypairs.keypairsPromise);
    const { did , authenticationKey , assertionMethodKey  } = await (0, _didDocument.didDocumentPromise);
    const [keypair, publicKey] = keyRelationship === "authentication" ? [
        authentication,
        authenticationKey
    ] : [
        assertionMethod,
        assertionMethodKey
    ];
    const keyUri = `${did}${publicKey.id}`;
    return {
        signature: keypair.sign(data, {
            withType: false
        }),
        keyType: keypair.type,
        keyUri
    };
}
async function signWithAssertionMethod({ data  }) {
    const { assertionMethod  } = await (0, _keypairs.keypairsPromise);
    const { did , assertionMethodKey  } = await (0, _didDocument.didDocumentPromise);
    const keyUri = `${did}${assertionMethodKey.id}`;
    return {
        signature: assertionMethod.sign(data, {
            withType: false
        }),
        keyType: assertionMethod.type,
        keyUri
    };
}
async function encrypt({ data , peerPublicKey  }) {
    const { keyAgreement  } = await (0, _keypairs.keypairsPromise);
    const { did , keyAgreementKey  } = await (0, _didDocument.didDocumentPromise);
    const keyUri = `${did}${keyAgreementKey.id}`;
    const { box , nonce  } = (0, _sdkJs.Utils).Crypto.encryptAsymmetric(data, peerPublicKey, keyAgreement.secretKey);
    return {
        data: box,
        nonce,
        keyUri
    };
}
async function decrypt({ data: box , nonce , peerPublicKey  }) {
    const { keyAgreement  } = await (0, _keypairs.keypairsPromise);
    const data = (0, _sdkJs.Utils).Crypto.decryptAsymmetric({
        box,
        nonce
    }, peerPublicKey, keyAgreement.secretKey);
    if (!data) throw new Error("Failed to decrypt with given key");
    return {
        data
    };
}

},{"./keypairs":"4KDdn","./didDocument":"dnEJV","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"4KDdn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "keypairsPromise", ()=>keypairsPromise);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _utilCrypto = require("@polkadot/util-crypto");
var _configuration = require("./configuration");
const keypairsPromise = (async ()=>{
    await (0, _utilCrypto.cryptoWaitReady)();
    const payer = (0, _sdkJs.Utils).Crypto.makeKeypairFromUri((0, _configuration.configuration).payerMnemonic);
    const authentication = (0, _sdkJs.Utils).Crypto.makeKeypairFromUri((0, _configuration.configuration).authenticationMnemonic);
    const assertionMethod = (0, _sdkJs.Utils).Crypto.makeKeypairFromUri((0, _configuration.configuration).assertionMethodMnemonic);
    const keyAgreement = (0, _sdkJs.Utils).Crypto.makeEncryptionKeypairFromSeed((0, _sdkJs.Utils).Crypto.mnemonicToMiniSecret((0, _configuration.configuration).keyAgreementMnemonic));
    return {
        payer,
        authentication,
        assertionMethod,
        keyAgreement
    };
})();

},{"./configuration":"js8cz","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"dnEJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "didDocumentPromise", ()=>didDocumentPromise);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _keypairs = require("./keypairs");
var _configuration = require("./configuration");
var _initKilt = require("./initKilt");
async function compareKeys(configured, resolved, relationship) {
    if (!resolved) throw new Error(`Your on-chain DID is broken: the resolved key for ${relationship} is undefined`);
    const derivedHex = (0, _sdkJs.Utils).Crypto.u8aToHex(configured.publicKey);
    const resolvedHex = (0, _sdkJs.Utils).Crypto.u8aToHex(resolved.publicKey);
    if (derivedHex !== resolvedHex) throw new Error(`Your on-chain DID is broken: the configured key for ${relationship} does not match resolved one`);
}
async function compareAllKeys(fullDid) {
    const keypairs = await (0, _keypairs.keypairsPromise);
    await compareKeys(keypairs.authentication, fullDid.authentication[0], "authentication");
    await compareKeys(keypairs.assertionMethod, fullDid.assertionMethod?.[0], "assertionMethod");
    await compareKeys(keypairs.keyAgreement, fullDid.keyAgreement?.[0], "keyAgreement");
}
const didDocumentPromise = (async ()=>{
    await (0, _initKilt.initKilt)();
    const { did  } = (0, _configuration.configuration);
    if (!did) throw new Error("DID not configured, have you run createDID script?");
    const resolved = await (0, _sdkJs.Did).resolve(did);
    if (!resolved || !resolved.document) throw new Error(`Could not resolve the configured DID ${did}, have you run createDID script?`);
    const { document  } = resolved;
    await compareAllKeys(document);
    const authenticationKey = document.authentication?.[0];
    if (!authenticationKey) throw new Error("Impossible: authentication key not found");
    const assertionMethodKey = document.assertionMethod?.[0];
    if (!assertionMethodKey) throw new Error("Impossible: assertion method key not found");
    const keyAgreementKey = document.keyAgreement?.[0];
    if (!keyAgreementKey) throw new Error("Impossible: key agreement key not found");
    return {
        did,
        didDocument: document,
        authenticationKey,
        assertionMethodKey,
        keyAgreementKey
    };
})();

},{"./keypairs":"4KDdn","./configuration":"js8cz","./initKilt":"bIezm","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"bIezm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initKilt", ()=>initKilt);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _configuration = require("./configuration");
async function initKilt() {
    await (0, _sdkJs.connect)((0, _configuration.configuration).blockchainEndpoint);
}

},{"./configuration":"js8cz","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}]},["gGDoX","7L8HI"], "7L8HI", "parcelRequire94c2")

//# sourceMappingURL=createDIDConfiguration.js.map
