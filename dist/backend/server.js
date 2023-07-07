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
})({"2ueMp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "83a6293885553881";
module.bundle.HMR_BUNDLE_ID = "d4be743537d14d4f";
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

},{}],"04veQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _bodyParser = require("body-parser");
var _bodyParserDefault = parcelHelpers.interopDefault(_bodyParser);
var _didDocument = require("./utilities/didDocument");
var _configuration = require("./utilities/configuration");
var _logger = require("./utilities/logger");
var _auth = require("./utilities/auth");
var _admin = require("./routers/admin");
var _user = require("./routers/user");
const initApp = async ()=>{
    await (0, _didDocument.didDocumentPromise);
    (0, _logger.logger).info("Blockchain connection initialized");
    const app = (0, _expressDefault.default)();
    app.use((0, _bodyParserDefault.default).json());
    app.use("/admin", (0, _auth.auth), (0, _admin.adminRouter));
    app.use("/", (0, _user.userRouter));
    (0, _logger.logger).info("Routes configured");
    const host = "0.0.0.0";
    const { port , baseUri  } = (0, _configuration.configuration);
    const started = app.listen(port, host, ()=>(0, _logger.logger).info(`Listening on ${baseUri} (host: ${host}, port: ${port})`));
    function stop() {
        started.close();
        process.exit(1);
    }
    process.on("unhandledRejection", stop);
    process.on("uncaughtException", stop);
    return app;
};
exports.default = initApp();

},{"./utilities/didDocument":"dnEJV","./utilities/configuration":"js8cz","./utilities/logger":"gJFlT","./utilities/auth":"5mlXp","./routers/admin":"7N1lA","./routers/user":"FKIBR","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"dnEJV":[function(require,module,exports) {
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

},{"./keypairs":"4KDdn","./configuration":"js8cz","./initKilt":"bIezm","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"4KDdn":[function(require,module,exports) {
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

},{"./configuration":"js8cz","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"js8cz":[function(require,module,exports) {
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

},{}],"bIezm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initKilt", ()=>initKilt);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _configuration = require("./configuration");
async function initKilt() {
    await (0, _sdkJs.connect)((0, _configuration.configuration).blockchainEndpoint);
}

},{"./configuration":"js8cz","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"gJFlT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logger", ()=>logger);
var _pino = require("pino");
var _pinoPretty = require("pino-pretty");
var _pinoPrettyDefault = parcelHelpers.interopDefault(_pinoPretty);
const stream = (0, _pinoPrettyDefault.default)({
    levelFirst: true,
    colorize: true,
    ignore: "time,hostname,pid"
});
const logger = (0, _pino.pino)({
    level: "trace"
}, stream);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"5mlXp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auth", ()=>auth);
var _expressBasicAuth = require("express-basic-auth");
var _expressBasicAuthDefault = parcelHelpers.interopDefault(_expressBasicAuth);
var _configuration = require("./configuration");
const { adminUsername , adminPassword  } = (0, _configuration.configuration);
const auth = (0, _expressBasicAuthDefault.default)({
    users: {
        [adminUsername]: adminPassword
    },
    challenge: true
});

},{"./configuration":"js8cz","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"7N1lA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "adminRouter", ()=>adminRouter);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _configuration = require("../utilities/configuration");
var _credentials = require("../endpoints/admin/credentials");
const adminRouter = (0, _express.Router)();
adminRouter.use((0, _credentials.credentials));
adminRouter.use(// eslint-disable-next-line import/no-named-as-default-member
(0, _expressDefault.default).static(`${(0, _configuration.configuration).distFolder}/admin`, {
    dotfiles: "allow",
    setHeaders (res) {
        res.set("Access-Control-Allow-Origin", "*");
    }
}));
adminRouter.get("*", (request, response)=>{
    response.sendFile(`${(0, _configuration.configuration).distFolder}/admin/index.html`);
});

},{"../utilities/configuration":"js8cz","../endpoints/admin/credentials":"jRVeT","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"jRVeT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "credentials", ()=>credentials);
var _express = require("express");
var _paths = require("../paths");
var _credentialStorage = require("../../utilities/credentialStorage");
var _httpStatusCodes = require("http-status-codes");
var _logger = require("../../utilities/logger");
var _attest = require("../../utilities/attest");
var _revoke = require("../../utilities/revoke");
function sendErrorResponse(error, response) {
    (0, _logger.logger).error(error);
    if (error instanceof (0, _credentialStorage.NotFoundError)) response.status((0, _httpStatusCodes.StatusCodes).NOT_FOUND).send(error);
    else response.status((0, _httpStatusCodes.StatusCodes).INTERNAL_SERVER_ERROR).send(error);
}
const credentials = (0, _express.Router)();
// Trigger deploy
credentials.get((0, _paths.paths).credentials.list, async (request, response)=>{
    (0, _logger.logger).debug("Getting list of credentials");
    response.send(await (0, _credentialStorage.listCredentials)());
});
credentials.get((0, _paths.paths).credentials.item, async (request, response)=>{
    try {
        const { id  } = request.params;
        (0, _logger.logger).debug(`Getting credential`);
        response.send(await (0, _credentialStorage.getCredential)(id));
    } catch (error) {
        sendErrorResponse(error, response);
    }
});
credentials.delete((0, _paths.paths).credentials.item, async (request, response)=>{
    try {
        const { id  } = request.params;
        (0, _logger.logger).debug("Deleting credential");
        await (0, _credentialStorage.deleteCredential)(id);
        response.sendStatus((0, _httpStatusCodes.StatusCodes).OK);
    } catch (error) {
        sendErrorResponse(error, response);
    }
});
credentials.post((0, _paths.paths).credentials.attest, async (request, response)=>{
    try {
        const { id  } = request.params;
        (0, _logger.logger).debug(`Getting credential`);
        const { claim  } = await (0, _credentialStorage.getCredential)(id);
        (0, _logger.logger).debug("Attesting credential");
        const attestation = await (0, _attest.attest)(claim);
        (0, _logger.logger).debug("Credential attested, updating database");
        const attestedCredential = await (0, _credentialStorage.addAttestation)(id, attestation);
        response.send(attestedCredential);
    } catch (error) {
        sendErrorResponse(error, response);
    }
});
credentials.post((0, _paths.paths).credentials.revoke, async (request, response)=>{
    try {
        const { id  } = request.params;
        (0, _logger.logger).debug("Getting credential");
        const { claim  } = await (0, _credentialStorage.getCredential)(id);
        (0, _logger.logger).debug("Revoking credential");
        const attestation = await (0, _revoke.revoke)(claim);
        (0, _logger.logger).debug("Credential revoked, updating database");
        const revokedCredential = await (0, _credentialStorage.addAttestation)(id, attestation);
        response.send(revokedCredential);
    } catch (error) {
        sendErrorResponse(error, response);
    }
});

},{"../paths":"hwfwK","../../utilities/credentialStorage":"2emiB","../../utilities/logger":"gJFlT","../../utilities/attest":"2qfnu","../../utilities/revoke":"kiqgG","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"hwfwK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paths", ()=>paths);
const paths = {
    session: "/api/session",
    terms: "/api/terms",
    requestAttestation: "/api/request-attestation",
    pay: "/api/pay",
    // admin
    credentials: {
        list: "/api/credentials",
        item: "/api/credentials/:id",
        attest: "/api/credentials/:id/attest",
        revoke: "/api/credentials/:id/revoke"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"2emiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotFoundError", ()=>NotFoundError);
// Maps are used for example purposes. A real database should be used in production.
// const credentials: Map<string, Credential> = new Map();
parcelHelpers.export(exports, "addClaim", ()=>addClaim);
parcelHelpers.export(exports, "listCredentials", ()=>listCredentials);
parcelHelpers.export(exports, "getCredential", ()=>getCredential);
parcelHelpers.export(exports, "deleteCredential", ()=>deleteCredential);
parcelHelpers.export(exports, "addAttestation", ()=>addAttestation);
/* eslint-disable import/no-extraneous-dependencies */ var _nodeCrypto = require("crypto");
var _firestore = require("firebase/firestore");
var _truora = require("../endpoints/user/truora");
class NotFoundError extends Error {
}
function addClaim(claim) {
    const id = (0, _nodeCrypto.randomUUID)();
    // credentials.set(id, { claim });
    (0, _firestore.setDoc)((0, _firestore.doc)((0, _truora.firestore), "credentials", id), {
        claim
    });
}
async function listCredentials() {
    // return Object.fromEntries(credentials.entries());
    let result = {};
    const docs = await (0, _firestore.getDocs)((0, _firestore.collection)((0, _truora.firestore), "credentials"));
    docs.forEach((doc)=>{
        result = {
            ...result,
            [doc.id]: {
                ...doc.data(),
                id: doc.id
            }
        };
    });
    return result;
}
async function getCredential(id) {
    // const credential = credentials.get(id);
    const _doc = await (0, _firestore.getDoc)((0, _firestore.doc)((0, _truora.firestore), "credentials", id));
    const credential = {
        ..._doc.data(),
        id
    };
    if (!credential) throw new NotFoundError("Credential not found");
    return credential;
}
async function deleteCredential(id) {
    await (0, _firestore.deleteDoc)((0, _firestore.doc)((0, _truora.firestore), "credentials", id));
// const deleted = credentials.delete(id);
// if (!deleted) {
//   throw new NotFoundError('Credential not found');
// }
}
async function addAttestation(id, attestation) {
    const credential = await getCredential(id);
    // credentials.set(id, { ...credential, attestation });
    await (0, _firestore.updateDoc)((0, _firestore.doc)((0, _truora.firestore), "credentials", id), {
        ...credential,
        attestation
    });
    return await getCredential(id);
}

},{"../endpoints/user/truora":"i74Sb","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"i74Sb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "firebase", ()=>firebase);
parcelHelpers.export(exports, "firestore", ()=>firestore);
parcelHelpers.export(exports, "truora", ()=>truora);
/* eslint-disable import/no-extraneous-dependencies */ var _express = require("express");
var _httpStatusCodes = require("http-status-codes");
var _app = require("firebase/app");
var _firestore = require("firebase/firestore");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _logger = require("../../utilities/logger");
const firebaseConfig = {
    apiKey: "AIzaSyAAwR5GvEUi3lLWy9bb1tz65jhvHI3vufc",
    authDomain: "peranto-test.firebaseapp.com",
    projectId: "peranto-test",
    storageBucket: "peranto-test.appspot.com",
    messagingSenderId: "777447831295",
    appId: "1:777447831295:web:6a987d7c8b307ecef43eca"
};
const apps = (0, _app.getApps)();
const firebase = apps.length > 0 ? apps[0] : (0, _app.initializeApp)(firebaseConfig);
const firestore = (0, _firestore.getFirestore)(firebase);
// WH SECRET oEI07pv3tHbQ1069H61r35C0K
async function handler(req, res) {
    try {
        const { accountId , validationId  } = req.body;
        const { data  } = await (0, _axiosDefault.default).get(`https://api.validations.truora.com/v1/validations/${validationId}`, {
            headers: {
                "Truora-API-Key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiIiwiYWRkaXRpb25hbF9kYXRhIjoie30iLCJjbGllbnRfaWQiOiJUQ0llNTEwMjRiOTlmN2YwZDc2NzZhYTFlOGI1NWY3YmI4MiIsImV4cCI6MzI2NTQ3OTQ2MywiZ3JhbnQiOiIiLCJpYXQiOjE2ODg2Nzk0NjMsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0xX1lZY2VRNXlxSSIsImp0aSI6ImVkMzZhMGQwLTYxYjgtNDQ0Ni04OWNmLWFiNDEwYWY5NDkyNCIsImtleV9uYW1lIjoicGVyYW50b3Rlc3QiLCJrZXlfdHlwZSI6ImJhY2tlbmQiLCJ1c2VybmFtZSI6InBlcmFudG9zZXJ2aWNlcy1wZXJhbnRvdGVzdCJ9.gVB8petsqNJAmwSUUF8AKwzx8UUezTpyqrsEIH36ses"
            }
        });
        const docRef = await (0, _firestore.setDoc)((0, _firestore.doc)(firestore, "truora", "testId_" + validationId), {
            ...data,
            accountId,
            validationId
        });
        res.json({
            docRef
        });
    } catch (error) {
        (0, _logger.logger).error(error);
        res.status((0, _httpStatusCodes.StatusCodes).INTERNAL_SERVER_ERROR).send(error);
    }
}
const truora = (0, _express.Router)();
truora.post("/api/truora", handler);

},{"../../utilities/logger":"gJFlT","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"2qfnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attest", ()=>attest);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _configuration = require("./configuration");
var _cryptoCallbacks = require("./cryptoCallbacks");
var _keypairs = require("./keypairs");
async function attest(credential) {
    const api = (0, _sdkJs.ConfigService).get("api");
    const attestation = (0, _sdkJs.Attestation).fromCredentialAndDid(credential, (0, _configuration.configuration).did);
    const { claimHash , cTypeHash  } = attestation;
    const { payer  } = await (0, _keypairs.keypairsPromise);
    const tx = api.tx.attestation.add(claimHash, cTypeHash, null);
    const authorized = await (0, _sdkJs.Did).authorizeTx((0, _configuration.configuration).did, tx, (0, _cryptoCallbacks.sign), payer.address);
    await (0, _sdkJs.Blockchain).signAndSubmitTx(authorized, payer);
    return attestation;
}

},{"./configuration":"js8cz","./cryptoCallbacks":"4y48h","./keypairs":"4KDdn","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"4y48h":[function(require,module,exports) {
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

},{"./keypairs":"4KDdn","./didDocument":"dnEJV","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"kiqgG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "revoke", ()=>revoke);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _configuration = require("./configuration");
var _cryptoCallbacks = require("./cryptoCallbacks");
var _keypairs = require("./keypairs");
async function revoke(credential) {
    const api = (0, _sdkJs.ConfigService).get("api");
    const { rootHash  } = credential;
    const tx = api.tx.attestation.revoke(rootHash, null);
    const { payer  } = await (0, _keypairs.keypairsPromise);
    const authorized = await (0, _sdkJs.Did).authorizeTx((0, _configuration.configuration).did, tx, (0, _cryptoCallbacks.sign), payer.address);
    await (0, _sdkJs.Blockchain).signAndSubmitTx(authorized, payer);
    const attestation = await api.query.attestation.attestations(rootHash);
    return (0, _sdkJs.Attestation).fromChain(attestation, rootHash);
}

},{"./configuration":"js8cz","./cryptoCallbacks":"4y48h","./keypairs":"4KDdn","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"FKIBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userRouter", ()=>userRouter);
var _express = require("express");
var _expressDefault = parcelHelpers.interopDefault(_express);
var _pay = require("../endpoints/user/pay");
var _requestAttestation = require("../endpoints/user/requestAttestation");
var _session = require("../endpoints/user/session");
var _terms = require("../endpoints/user/terms");
var _truora = require("../endpoints/user/truora");
var _configuration = require("../utilities/configuration");
const userRouter = (0, _express.Router)();
userRouter.use((0, _session.session));
userRouter.use((0, _terms.terms));
userRouter.use((0, _requestAttestation.requestAttestation));
userRouter.use((0, _pay.pay));
userRouter.use((0, _truora.truora));
userRouter.use(// eslint-disable-next-line import/no-named-as-default-member
(0, _expressDefault.default).static(`${(0, _configuration.configuration).distFolder}/user`, {
    dotfiles: "allow",
    setHeaders (res) {
        res.set("Access-Control-Allow-Origin", "*");
    }
}));
userRouter.get("*", (request, response)=>{
    response.sendFile(`${(0, _configuration.configuration).distFolder}/user/index.html`);
});

},{"../endpoints/user/pay":"6hBXU","../endpoints/user/requestAttestation":"kOrJk","../endpoints/user/session":"9afji","../endpoints/user/terms":"fA0Id","../endpoints/user/truora":"i74Sb","../utilities/configuration":"js8cz","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"6hBXU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pay", ()=>pay);
var _express = require("express");
var _httpStatusCodes = require("http-status-codes");
var _logger = require("../../utilities/logger");
var _sessionStorage = require("../../utilities/sessionStorage");
var _paths = require("../paths");
var _credentialStorage = require("../../utilities/credentialStorage");
async function handler(request, response) {
    // implement your payment logic here
    try {
        (0, _logger.logger).debug("Mock processing payment");
        const { session: { credential  } ,  } = request;
        if (!credential) throw new Error("Session credential not found");
        (0, _credentialStorage.addClaim)(credential);
        (0, _logger.logger).debug("Payment received, sent credential to attester");
        response.sendStatus((0, _httpStatusCodes.StatusCodes).NO_CONTENT);
    } catch (error) {
        (0, _logger.logger).error(error);
        response.status((0, _httpStatusCodes.StatusCodes).INTERNAL_SERVER_ERROR).send(error);
    }
}
const pay = (0, _express.Router)();
pay.post((0, _paths.paths).pay, (0, _sessionStorage.sessionMiddleware), handler);

},{"../../utilities/logger":"gJFlT","../../utilities/sessionStorage":"i6O7s","../paths":"hwfwK","../../utilities/credentialStorage":"2emiB","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"i6O7s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setSession", ()=>setSession);
parcelHelpers.export(exports, "basicSessionMiddleware", ()=>basicSessionMiddleware);
parcelHelpers.export(exports, "sessionMiddleware", ()=>sessionMiddleware);
var _httpStatusCodes = require("http-status-codes");
var _nodeCache = require("node-cache");
var _nodeCacheDefault = parcelHelpers.interopDefault(_nodeCache);
var _sessionHeader = require("../endpoints/user/sessionHeader");
const sessionStorage = new (0, _nodeCacheDefault.default)({
    stdTTL: 18000,
    useClones: false
});
function getSessionById(sessionId) {
    const session = sessionStorage.get(sessionId);
    if (!session) throw new Error(`Unknown or expired session ${sessionId}`);
    return session;
}
function getBasicSession(request) {
    const sessionId = request.get((0, _sessionHeader.sessionHeader));
    if (!sessionId) throw new Error(`Required header ${(0, _sessionHeader.sessionHeader)} is missing`);
    return getSessionById(sessionId);
}
function getSession(request) {
    const session = getBasicSession(request);
    const { did , didConfirmed , encryptionKeyUri  } = session;
    if (!did || !didConfirmed || !encryptionKeyUri) throw new Error("Unconfirmed DID");
    return {
        ...session,
        did,
        encryptionKeyUri
    };
}
function setSession(session) {
    sessionStorage.set(session.sessionId, session);
}
function basicSessionMiddleware(request, response, next) {
    try {
        const session = getBasicSession(request);
        request.session = session;
        next();
    } catch (error) {
        response.status((0, _httpStatusCodes.StatusCodes).FORBIDDEN).send(error);
    }
}
function sessionMiddleware(request, response, next) {
    try {
        const session = getSession(request);
        request.session = session;
        next();
    } catch (error) {
        response.status((0, _httpStatusCodes.StatusCodes).FORBIDDEN).send(error);
    }
}

},{"../endpoints/user/sessionHeader":"9MttD","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"9MttD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sessionHeader", ()=>sessionHeader);
const sessionHeader = "x-session-id";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"kOrJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requestAttestation", ()=>requestAttestation);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _express = require("express");
var _httpStatusCodes = require("http-status-codes");
var _cryptoCallbacks = require("../../utilities/cryptoCallbacks");
var _logger = require("../../utilities/logger");
var _sessionStorage = require("../../utilities/sessionStorage");
var _supportedCTypes = require("../../utilities/supportedCTypes");
var _paths = require("../paths");
async function handler(request, response) {
    try {
        (0, _logger.logger).debug("Handling attestation request");
        const message = await (0, _sdkJs.Message).decrypt(request.body, (0, _cryptoCallbacks.decrypt));
        const messageBody = message.body;
        (0, _logger.logger).debug("Request attestation message decrypted");
        (0, _sdkJs.Message).verifyMessageBody(messageBody);
        const { type  } = messageBody;
        if (type === "reject" || type === "reject-terms") {
            response.status((0, _httpStatusCodes.StatusCodes).CONFLICT).send("Message contains rejection");
            return;
        }
        if (type !== "request-attestation") throw new Error("Unexpected message type");
        const { quote , credential  } = messageBody.content;
        if (quote) {
            await (0, _sdkJs.Quote).verifyQuoteAgreement(quote);
            (0, _logger.logger).debug("Quote agreement verified");
        }
        const cTypes = Object.values((0, _supportedCTypes.supportedCTypes));
        const cTypeId = (0, _sdkJs.CType).hashToId(credential.claim.cTypeHash);
        const ctype = cTypes.find(({ $id  })=>$id === cTypeId);
        if (!ctype) response.status((0, _httpStatusCodes.StatusCodes).FORBIDDEN).send("Unsupported CType");
        (0, _logger.logger).debug("CType supported");
        await (0, _sdkJs.Credential).verifyWellFormed(credential, {
            ctype
        });
        (0, _logger.logger).debug("Credential data structure verified");
        const { session  } = request;
        (0, _sessionStorage.setSession)({
            ...session,
            credential
        });
        (0, _logger.logger).debug("Request attestation complete");
        response.sendStatus((0, _httpStatusCodes.StatusCodes).NO_CONTENT);
    } catch (error) {
        response.status((0, _httpStatusCodes.StatusCodes).INTERNAL_SERVER_ERROR).send(error);
    }
}
const requestAttestation = (0, _express.Router)();
requestAttestation.post((0, _paths.paths).requestAttestation, (0, _sessionStorage.sessionMiddleware), handler);

},{"../../utilities/cryptoCallbacks":"4y48h","../../utilities/logger":"gJFlT","../../utilities/sessionStorage":"i6O7s","../../utilities/supportedCTypes":"ejj16","../paths":"hwfwK","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"ejj16":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportedCTypeKeys", ()=>supportedCTypeKeys);
parcelHelpers.export(exports, "supportedCTypes", ()=>supportedCTypes);
parcelHelpers.export(exports, "kiltCost", ()=>kiltCost);
parcelHelpers.export(exports, "isSupportedCType", ()=>isSupportedCType);
var _emailCType = require("../cTypes/emailCType");
var _twitterCType = require("../cTypes/twitterCType");
var _ineCType = require("../cTypes/ineCType");
const supportedCTypeKeys = [
    "email",
    "twitter",
    "id"
];
const supportedCTypes = {
    email: (0, _emailCType.emailCType),
    twitter: (0, _twitterCType.twitterCType),
    id: (0, _ineCType.ineCType)
};
const kiltCost = {
    id: 2,
    email: 2,
    twitter: 3
};
function isSupportedCType(cType) {
    return supportedCTypeKeys.includes(cType);
}

},{"../cTypes/emailCType":"jMvua","../cTypes/twitterCType":"bahPB","../cTypes/ineCType":"bJJhJ","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"jMvua":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emailCType", ()=>emailCType);
const emailCType = {
    $schema: "http://kilt-protocol.org/draft-01/ctype#",
    title: "Email",
    properties: {
        Email: {
            type: "string"
        }
    },
    type: "object",
    $id: "kilt:ctype:0x3291bb126e33b4862d421bfaa1d2f272e6cdfc4f96658988fbcffea8914bd9ac"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"bahPB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "twitterCType", ()=>twitterCType);
const twitterCType = {
    $schema: "http://kilt-protocol.org/draft-01/ctype#",
    title: "Twitter",
    properties: {
        Twitter: {
            type: "string"
        }
    },
    type: "object",
    $id: "kilt:ctype:0x47d04c42bdf7fdd3fc5a194bcaa367b2f4766a6b16ae3df628927656d818f420"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"bJJhJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ineCType", ()=>ineCType);
const ineCType = {
    $schema: "http://kilt-protocol.org/draft-01/ctype#",
    properties: {
        email: {
            type: "string"
        },
        username: {
            type: "string"
        }
    },
    title: "Authorization",
    type: "object",
    $id: "kilt:ctype:0xdf952230c87e7fbdc8503a394540c8e99029180611e7107c4eee33f67f57aa57"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"9afji":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "session", ()=>session);
var _express = require("express");
var _httpStatusCodes = require("http-status-codes");
var _sdkJs = require("@kiltprotocol/sdk-js");
var _utilCrypto = require("@polkadot/util-crypto");
var _didDocument = require("../../utilities/didDocument");
var _cryptoCallbacks = require("../../utilities/cryptoCallbacks");
var _sessionStorage = require("../../utilities/sessionStorage");
var _logger = require("../../utilities/logger");
var _paths = require("../paths");
async function handler(request, response) {
    try {
        (0, _logger.logger).debug("Session confirmation started");
        const payload = request.body;
        const { encryptionKeyUri , encryptedChallenge , nonce  } = payload;
        const { session  } = request;
        const encryptionKey = await (0, _sdkJs.Did).resolveKey(encryptionKeyUri);
        (0, _logger.logger).debug("Session confirmation resolved DID encryption key");
        const { keyAgreementKey , did  } = await (0, _didDocument.didDocumentPromise);
        const { data  } = await (0, _cryptoCallbacks.decrypt)({
            data: (0, _sdkJs.Utils).Crypto.coToUInt8(encryptedChallenge),
            nonce: (0, _sdkJs.Utils).Crypto.coToUInt8(nonce),
            keyUri: `${did}${keyAgreementKey.id}`,
            peerPublicKey: encryptionKey.publicKey
        });
        (0, _logger.logger).debug("Session confirmation decrypted challenge");
        const decryptedChallenge = (0, _sdkJs.Utils).Crypto.u8aToHex(data);
        const originalChallenge = session.didChallenge;
        if (decryptedChallenge !== originalChallenge) {
            response.status((0, _httpStatusCodes.StatusCodes).FORBIDDEN).send("Challenge signature mismatch");
            return;
        }
        (0, _sessionStorage.setSession)({
            ...session,
            did: encryptionKey.controller,
            encryptionKeyUri,
            didConfirmed: true
        });
        (0, _logger.logger).debug("Challenge confirmation matches");
        response.sendStatus((0, _httpStatusCodes.StatusCodes).NO_CONTENT);
    } catch (error) {
        response.status((0, _httpStatusCodes.StatusCodes).INTERNAL_SERVER_ERROR).send(error);
    }
}
function startSession() {
    const sessionId = (0, _utilCrypto.randomAsHex)(24);
    const challenge = (0, _utilCrypto.randomAsHex)(24);
    (0, _sessionStorage.setSession)({
        sessionId,
        didChallenge: challenge
    });
    return {
        challenge,
        sessionId
    };
}
const path = (0, _paths.paths).session;
const session = (0, _express.Router)();
session.get(path, async (request, response)=>{
    const { did , keyAgreementKey  } = await (0, _didDocument.didDocumentPromise);
    const dAppEncryptionKeyUri = `${did}${keyAgreementKey.id}`;
    response.send({
        dAppEncryptionKeyUri,
        ...startSession()
    });
});
session.post(path, (0, _sessionStorage.basicSessionMiddleware), handler);

},{"../../utilities/didDocument":"dnEJV","../../utilities/cryptoCallbacks":"4y48h","../../utilities/sessionStorage":"i6O7s","../../utilities/logger":"gJFlT","../paths":"hwfwK","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"fA0Id":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "terms", ()=>terms);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _express = require("express");
var _httpStatusCodes = require("http-status-codes");
var _configuration = require("../../utilities/configuration");
var _cryptoCallbacks = require("../../utilities/cryptoCallbacks");
var _encryptMessage = require("../../utilities/encryptMessage");
var _logger = require("../../utilities/logger");
var _sessionStorage = require("../../utilities/sessionStorage");
var _supportedCTypes = require("../../utilities/supportedCTypes");
var _paths = require("../paths");
const TTL = 18000000;
const TERMS = "https://example.com/terms-and-conditions";
async function handler(request, response) {
    try {
        (0, _logger.logger).debug("Submit terms started");
        const { session  } = request;
        const { encryptionKeyUri  } = session;
        const { type , claimContents  } = request.body;
        (0, _logger.logger).info("ctype: " + JSON.stringify((0, _supportedCTypes.supportedCTypes)[type]));
        const claim = (0, _sdkJs.Claim).fromCTypeAndClaimContents((0, _supportedCTypes.supportedCTypes)[type], claimContents, session.did);
        (0, _logger.logger).debug("Generated claim");
        const quote = {
            attesterDid: (0, _configuration.configuration).did,
            cTypeHash: claim.cTypeHash,
            cost: {
                tax: {
                    VAT: 0
                },
                net: (0, _supportedCTypes.kiltCost)[type],
                gross: (0, _supportedCTypes.kiltCost)[type]
            },
            currency: "KILT",
            timeframe: new Date(Date.now() + TTL).toISOString(),
            termsAndConditions: TERMS
        };
        const signedQuote = await (0, _sdkJs.Quote).createAttesterSignedQuote(quote, (0, _cryptoCallbacks.sign));
        (0, _logger.logger).debug("Signed quote");
        const output = await (0, _encryptMessage.encryptMessageBody)(encryptionKeyUri, {
            content: {
                claim,
                legitimations: [],
                quote: signedQuote,
                cTypes: [
                    (0, _supportedCTypes.supportedCTypes)[type]
                ]
            },
            type: "submit-terms"
        });
        (0, _logger.logger).debug("Submit terms complete");
        response.send(output);
    } catch (error) {
        response.status((0, _httpStatusCodes.StatusCodes).INTERNAL_SERVER_ERROR).send(error);
    }
}
const terms = (0, _express.Router)();
terms.post((0, _paths.paths).terms, (0, _sessionStorage.sessionMiddleware), handler);

},{"../../utilities/configuration":"js8cz","../../utilities/cryptoCallbacks":"4y48h","../../utilities/encryptMessage":"lwbZE","../../utilities/logger":"gJFlT","../../utilities/sessionStorage":"i6O7s","../../utilities/supportedCTypes":"ejj16","../paths":"hwfwK","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}],"lwbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encryptMessageBody", ()=>encryptMessageBody);
var _sdkJs = require("@kiltprotocol/sdk-js");
var _cryptoCallbacks = require("./cryptoCallbacks");
var _configuration = require("./configuration");
async function encryptMessageBody(encryptionKeyUri, messageBody) {
    const { did  } = (0, _sdkJs.Did).parse(encryptionKeyUri);
    const message = (0, _sdkJs.Message).fromBody(messageBody, (0, _configuration.configuration).did, did);
    return (0, _sdkJs.Message).encrypt(message, (0, _cryptoCallbacks.encrypt), encryptionKeyUri);
}

},{"./cryptoCallbacks":"4y48h","./configuration":"js8cz","@parcel/transformer-js/src/esmodule-helpers.js":"jV6S9"}]},["2ueMp","04veQ"], "04veQ", "parcelRequire94c2")

//# sourceMappingURL=server.js.map
