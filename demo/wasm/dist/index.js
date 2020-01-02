(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){if(true)module.exports=e();else { var t, r; }}(window,(function(){return function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}({0:function(n,e,r){n.exports=r("tjUo")},"0nz7":function(n,e,r){(function(n){var t;function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var i=r("1RbP"),a=function(n){n=void 0!==(n=n||{})?n:{};n={onRuntimeInitialized:function(){setSrcImage=n.cwrap("setSrcImage","number",["number","number"]),decode_qr=n.cwrap("decode_qr","string",["number","number","number"])},locateFile:function(n,e){return n}};var e,r={};for(e in n)n.hasOwnProperty(e)&&(r[e]=n[e]);n.arguments=[],n.thisProgram="./this.program",n.quit=function(n,e){throw e},n.preRun=[],n.postRun=[];var t=!0,a=!1,u="";(t||a)&&(a?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",n.read=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.send(null),e.responseText},a&&(n.readBinary=function(n){var e=new XMLHttpRequest;return e.open("GET",n,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),n.readAsync=function(n,e,r){var t=new XMLHttpRequest;t.open("GET",n,!0),t.responseType="arraybuffer",t.onload=function(){200==t.status||0==t.status&&t.response?e(t.response):r()},t.onerror=r,t.send(null)},n.setWindowTitle=function(n){document.title=n});var f=n.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),c=n.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||f);for(e in r)r.hasOwnProperty(e)&&(n[e]=r[e]);r=void 0;var l,s={"f64-rem":function(n,e){return n%e},debugger:function(){}},p=(new Array(0),0);"object"!==("undefined"==typeof WebAssembly?"undefined":o(WebAssembly))&&c("no native wasm support detected");var y=!1;function d(e){var r,t=n["_"+e];return r="Cannot call unknown function "+e+", make sure it is exported",t||mn("Assertion failed: "+r),t}function m(n,e,r,t,o){var i={string:function(n){var e=0;if(null!=n&&0!==n){var r=1+(n.length<<2);(function(n,e,r){w(n,T,e,r)})(n,e=on(r),r)}return e},array:function(n){var e=on(n.length);return _(n,e),e}};var a=d(n),u=[],f=0;if(t)for(var c=0;c<t.length;c++){var l=i[r[c]];l?(0===f&&(f=un()),u[c]=l(t[c])):u[c]=t[c]}var s=a.apply(null,u);return s=function(n){return"string"===e?g(n):"boolean"===e?Boolean(n):n}(s),0!==f&&an(f),s}function b(n){return U?rn(n):function(n){var e=x[I>>2],r=e+n+15&-16;return r>J()&&mn(),x[I>>2]=r,e}(n)}var v="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function h(n,e,r){for(var t=e+r,o=e;n[o]&&!(o>=t);)++o;if(o-e>16&&n.subarray&&v)return v.decode(n.subarray(e,o));for(var i="";e<o;){var a=n[e++];if(128&a){var u=63&n[e++];if(192!=(224&a)){var f=63&n[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|f:(7&a)<<18|u<<12|f<<6|63&n[e++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function g(n,e){return n?h(T,n,e):""}function w(n,e,r,t){if(!(t>0))return 0;for(var o=r,i=r+t-1,a=0;a<n.length;++a){var u=n.charCodeAt(a);if(u>=55296&&u<=57343)u=65536+((1023&u)<<10)|1023&n.charCodeAt(++a);if(u<=127){if(r>=i)break;e[r++]=u}else if(u<=2047){if(r+1>=i)break;e[r++]=192|u>>6,e[r++]=128|63&u}else if(u<=65535){if(r+2>=i)break;e[r++]=224|u>>12,e[r++]=128|u>>6&63,e[r++]=128|63&u}else{if(r+3>=i)break;e[r++]=240|u>>18,e[r++]=128|u>>12&63,e[r++]=128|u>>6&63,e[r++]=128|63&u}}return e[r]=0,r-o}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");function _(n,e){E.set(n,e)}function A(n,e,r){for(var t=0;t<n.length;++t)E[e++>>0]=n.charCodeAt(t);r||(E[e>>0]=0)}var S,E,T,R,x,P,C;function j(n,e){return n%e>0&&(n+=e-n%e),n}function O(){n.HEAP8=E=new Int8Array(S),n.HEAP16=R=new Int16Array(S),n.HEAP32=x=new Int32Array(S),n.HEAPU8=T=new Uint8Array(S),n.HEAPU16=new Uint16Array(S),n.HEAPU32=new Uint32Array(S),n.HEAPF32=P=new Float32Array(S),n.HEAPF64=C=new Float64Array(S)}var I=16720,M=n.TOTAL_MEMORY||16777216;function F(e){for(;e.length>0;){var r=e.shift();if("function"!=typeof r){var t=r.func;"number"==typeof t?void 0===r.arg?n.dynCall_v(t):n.dynCall_vi(t,r.arg):t(void 0===r.arg?null:r.arg)}else r()}}M<5242880&&c("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+M+"! (TOTAL_STACK=5242880)"),n.buffer?S=n.buffer:"object"===("undefined"==typeof WebAssembly?"undefined":o(WebAssembly))&&"function"==typeof WebAssembly.Memory?(l=new WebAssembly.Memory({initial:M/65536}),S=l.buffer):S=new ArrayBuffer(M),O(),x[I>>2]=5259632;var W=[],k=[],B=[],H=[],U=!1;var L=0,D=null,q=null;n.preloadedImages={},n.preloadedAudios={};var N="data:application/octet-stream;base64,";function z(n){return String.prototype.startsWith?n.startsWith(N):0===n.indexOf(N)}var G,V=i;function Y(){try{if(n.wasmBinary)return new Uint8Array(n.wasmBinary);if(n.readBinary)return n.readBinary(V);throw"both async and sync fetching of the wasm failed"}catch(n){mn(n)}}function X(e){var r={env:e,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:s};function o(e,r){var t=e.exports;n.asm=t,function(e){if(L--,n.monitorRunDependencies&&n.monitorRunDependencies(L),0==L&&(null!==D&&(clearInterval(D),D=null),q)){var r=q;q=null,r()}}()}function i(n){o(n.instance)}function u(e){return(n.wasmBinary||!t&&!a||"function"!=typeof fetch?new Promise((function(n,e){n(Y())})):fetch(V,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+V+"'";return n.arrayBuffer()})).catch((function(){return Y()}))).then((function(n){return WebAssembly.instantiate(n,r)})).then(e,(function(n){c("failed to asynchronously prepare wasm: "+n),mn(n)}))}if(L++,n.monitorRunDependencies&&n.monitorRunDependencies(L),n.instantiateWasm)try{return n.instantiateWasm(r,o)}catch(n){return c("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(n.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||z(V)||"function"!=typeof fetch)return u(i);fetch(V,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,r).then(i,(function(n){c("wasm streaming compile failed: "+n),c("falling back to ArrayBuffer instantiation"),u(i)}))}))}(),{}}z(V)||(G=V,V=n.locateFile?n.locateFile(G,u):u+G),n.asm=function(n,e,r){return e.memory=l,e.table=new WebAssembly.Table({initial:228,maximum:228,element:"anyfunc"}),e.__memory_base=1024,e.__table_base=0,X(e)},k.push({func:function(){nn()}});var K={};var Z={buffers:[null,[],[]],printChar:function(n,e){var r=Z.buffers[n];0===e||10===e?((1===n?f:c)(h(r,0)),r.length=0):r.push(e)},varargs:0,get:function(n){return Z.varargs+=4,x[Z.varargs-4>>2]},getStr:function(){return g(Z.get())},get64:function(){var n=Z.get();Z.get();return n},getZero:function(){Z.get()}};function J(){return E.length}var Q={c:mn,b:function(n){p=n},d:function(){return p},f:function(n,e){var r=un();try{return fn(n,e)}catch(n){if(an(r),n!==n+0&&"longjmp"!==n)throw n;tn(1,0)}},m:function(n,e,r){var t=un();try{return cn(n,e,r)}catch(n){if(an(t),n!==n+0&&"longjmp"!==n)throw n;tn(1,0)}},l:function(n,e,r,t){var o=un();try{return ln(n,e,r,t)}catch(n){if(an(o),n!==n+0&&"longjmp"!==n)throw n;tn(1,0)}},i:function(n,e){var r=un();try{sn(n,e)}catch(n){if(an(r),n!==n+0&&"longjmp"!==n)throw n;tn(1,0)}},h:function(n,e,r,t){var o=un();try{pn(n,e,r,t)}catch(n){if(an(o),n!==n+0&&"longjmp"!==n)throw n;tn(1,0)}},k:function e(r){var t,o;e.called?(o=x[r>>2],t=x[o>>2]):(e.called=!0,K.USER=K.LOGNAME="web_user",K.PATH="/",K.PWD="/",K.HOME="/home/web_user",K.LANG="C.UTF-8",K._=n.thisProgram,t=b(1024),o=b(256),x[o>>2]=t,x[r>>2]=o);var i=[],a=0;for(var u in K)if("string"==typeof K[u]){var f=u+"="+K[u];i.push(f),a+=f.length}if(a>1024)throw new Error("Environment size exceeded TOTAL_ENV_SIZE!");for(var c=0;c<i.length;c++){A(f=i[c],t),x[o+4*c>>2]=t,t+=f.length+1}x[o+4*i.length>>2]=0},g:function(e){return n.___errno_location&&(x[n.___errno_location()>>2]=e),e},u:function(n,e){Z.varargs=e;try{Z.getStreamFromFD(),Z.get(),Z.get(),Z.get(),Z.get();return 0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||mn(n),-n.errno}},j:function(n,e){Z.varargs=e;try{for(var r=Z.get(),t=Z.get(),o=Z.get(),i=0,a=0;a<o;a++){for(var u=x[t+8*a>>2],f=x[t+(8*a+4)>>2],c=0;c<f;c++)Z.printChar(r,T[u+c]);i+=f}return i}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||mn(n),-n.errno}},t:function(n,e){Z.varargs=e;try{Z.getStreamFromFD();return 0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||mn(n),-n.errno}},s:J,r:function(n,e,r){T.set(T.subarray(e,e+r),n)},q:function(n){var e=J();if(n>2147418112)return!1;for(var r=Math.max(e,16777216);r<n;)r=r<=536870912?j(2*r,65536):Math.min(j((3*r+2147483648)/4,65536),2147418112);return!!function(n){n=j(n,65536);var e=S.byteLength;try{return-1!==l.grow((n-e)/65536)&&(S=l.buffer,!0)}catch(n){return!1}}(r)&&(O(),!0)},p:function(e){!function(e,r){if(r&&n.noExitRuntime&&0===e)return;n.noExitRuntime||(y=!0,e,!0,n.onExit&&n.onExit(e));n.quit(e,new yn(e))}(e)},o:function n(e){return 0===e?0:(e=g(e),K.hasOwnProperty(e)?(n.ret&&en(n.ret),n.ret=(r=K[e],t=function(n){for(var e=0,r=0;r<n.length;++r){var t=n.charCodeAt(r);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++r)),t<=127?++e:e+=t<=2047?2:t<=65535?3:4}return e}(r)+1,(o=rn(t))&&w(r,E,o,t),o)):0);var r,t,o},e:function(n,e){throw tn(n,e||1),"longjmp"},n:function(n){mn("OOM")},a:I},$=n.asm({},Q,S);n.asm=$;var nn=n.___emscripten_environ_constructor=function(){return n.asm.v.apply(null,arguments)},en=(n.___errno_location=function(){return n.asm.w.apply(null,arguments)},n._decode_qr=function(){return n.asm.x.apply(null,arguments)},n._free=function(){return n.asm.y.apply(null,arguments)}),rn=n._malloc=function(){return n.asm.z.apply(null,arguments)},tn=(n._setSrcImage=function(){return n.asm.A.apply(null,arguments)},n._setThrew=function(){return n.asm.B.apply(null,arguments)}),on=n.stackAlloc=function(){return n.asm.H.apply(null,arguments)},an=n.stackRestore=function(){return n.asm.I.apply(null,arguments)},un=n.stackSave=function(){return n.asm.J.apply(null,arguments)},fn=n.dynCall_ii=function(){return n.asm.C.apply(null,arguments)},cn=n.dynCall_iii=function(){return n.asm.D.apply(null,arguments)},ln=n.dynCall_iiii=function(){return n.asm.E.apply(null,arguments)},sn=n.dynCall_vi=function(){return n.asm.F.apply(null,arguments)},pn=n.dynCall_viii=function(){return n.asm.G.apply(null,arguments)};function yn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function dn(e){function r(){n.calledRun||(n.calledRun=!0,y||(U=!0,F(k),F(B),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)e=n.postRun.shift(),H.unshift(e);var e;F(H)}()))}e=e||n.arguments,L>0||(!function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)e=n.preRun.shift(),W.unshift(e);var e;F(W)}(),L>0||n.calledRun||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),r()}),1)):r()))}function mn(e){throw n.onAbort&&n.onAbort(e),void 0!==e?(f(e),c(e),e='"'+e+'"'):e="",y=!0,1,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}if(n.asm=$,n.cwrap=function(n,e,r,t){var o=(r=r||[]).every((function(n){return"number"===n}));return"string"!==e&&o&&!t?d(n):function(){return m(n,e,r,arguments)}},n.getValue=function(n,e,r){switch("*"===(e=e||"i8").charAt(e.length-1)&&(e="i32"),e){case"i1":case"i8":return E[n>>0];case"i16":return R[n>>1];case"i32":case"i64":return x[n>>2];case"float":return P[n>>2];case"double":return C[n>>3];default:mn("invalid type for getValue: "+e)}return null},n.writeArrayToMemory=_,yn.prototype=new Error,yn.prototype.constructor=yn,q=function e(){n.calledRun||dn(),n.calledRun||(q=e)},n.run=dn,n.abort=mn,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return n.noExitRuntime=!0,dn(),n}("object"===o(a)?a:{});"object"===o(e)&&"object"===o(n)?n.exports=a:void 0===(t=function(){return a}.apply(e,[]))||(n.exports=t)}).call(this,r("YuTi")(n))},"1RbP":function(n,e){n.exports="http://localhost:8000/"+"quirc-wasm-emcc/171dde9bf2f9ef5845b319725df95eb2.wasm"},YuTi:function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},tjUo:function(n,e,r){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var o=r("0nz7");n.exports={decodeQrCode:function(n){var e={};e.asTypedArray=new Uint8Array(n);var r=o._malloc(e.asTypedArray.length*e.asTypedArray.BYTES_PER_ELEMENT);o.writeArrayToMemory(e.asTypedArray,r);for(var t=o._setSrcImage(r,e.asTypedArray.length),i=o.getValue(t+0,"i32"),a=o.getValue(t+4,"i32"),u=o.getValue(t+8,"i32"),f=o._decode_qr(u,i,a),c=[],l=0;l<8896;l++){var s=o.HEAP8[f/Uint8Array.BYTES_PER_ELEMENT+l];if(0===s)break;c.push(s)}var p=String.fromCharCode.apply(null,c);return o._free(r),o._free(u),o._free(t),delete e.asTypedArray,p},isReady:function(){return new Promise((function(n){setInterval((function(){var e,r=o.asm;e=r,(0!==Object.entries(e).length||"object"!==t(e))&&n()}),100)}))}}}})}));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _publish_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _publish_dist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_publish_dist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendor_fpsmeter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _vendor_fpsmeter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_fpsmeter__WEBPACK_IMPORTED_MODULE_3__);



 // setup an FPS meter

var fpsMeter = new FPSMeter();
fpsMeter.tickStart();

var nextTick = function nextTick() {
  fpsMeter.tick();
  requestAnimationFrame(nextTick);
};

requestAnimationFrame(nextTick);

_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var $output, video, toggle, scale, shouldRedirect, constraints, decodeQr, captureImage, initialize;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _publish_dist__WEBPACK_IMPORTED_MODULE_2__["isReady"]();

        case 2:
          $output = document.getElementById("output");
          video = document.getElementById("video");
          toggle = document.getElementById("toggle");
          scale = 0.25;
          shouldRedirect = true;
          constraints = {
            video: {
              facingMode: "environment"
            }
          };

          decodeQr =
          /*#__PURE__*/
          function () {
            var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(byteArray) {
              var start, output, usedOutput, timeTaken;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      start = new Date().getTime();
                      output = _publish_dist__WEBPACK_IMPORTED_MODULE_2__["decodeQrCode"](byteArray);
                      usedOutput = output.includes("]") ? "N/A" : output;
                      timeTaken = new Date().getTime() - start;
                      requestAnimationFrame(function () {
                        $output.innerHTML = usedOutput;
                        document.getElementById("time").innerHTML = timeTaken + " ms";
                      });
                      console.log({
                        output: usedOutput,
                        timeTaken: timeTaken
                      });

                      if (shouldRedirect) {
                        if (/^https?:/.test(usedOutput)) {
                          toggle.dispatchEvent(new Event("click"));
                          window.open(usedOutput);
                        }
                      }

                      window.decoded = output;

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function decodeQr(_x) {
              return _ref2.apply(this, arguments);
            };
          }();

          captureImage = function captureImage() {
            var canvas = document.createElement("canvas");
            canvas.width = video.videoWidth * scale;
            canvas.height = video.videoHeight * scale;
            canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
            window.myCanvas = canvas;
            canvas.toBlob(function (blob) {
              var reader = new FileReader();
              reader.addEventListener("loadend", function () {
                var arrayBuffer = reader.result;
                window.ab = arrayBuffer;
                decodeQr(new Uint8Array(arrayBuffer));
              });
              reader.readAsArrayBuffer(blob);
            }, "image/jpeg");
          };

          initialize = function initialize() {
            navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
              video.srcObject = stream;
            });
            toggle.addEventListener("click", function () {
              shouldRedirect = !shouldRedirect;

              if (shouldRedirect) {
                toggle.style = "";
                toggle.innerText = "Redirect: true";
              } else {
                toggle.style = "background: red";
                toggle.innerText = "Redirect: false";
              }
            });
            setInterval(captureImage, 300);
          };

          initialize();

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*! FPSMeter 0.3.0 - 24th Apr 2013 | https://github.com/Darsain/fpsmeter */
(function (r, j) {
  function s(a, e) {
    for (var g in e) {
      try {
        a.style[g] = e[g];
      } catch (j) {}
    }

    return a;
  }

  function H(a) {
    return Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function R(a, e) {
    if ("array" !== H(e)) return -1;
    if (e.indexOf) return e.indexOf(a);

    for (var g = 0, j = e.length; g < j; g++) {
      if (e[g] === a) return g;
    }

    return -1;
  }

  function I() {
    var a = arguments,
        e;

    for (e in a[1]) {
      if (a[1].hasOwnProperty(e)) switch (H(a[1][e])) {
        case "object":
          a[0][e] = I({}, a[0][e], a[1][e]);
          break;

        case "array":
          a[0][e] = a[1][e].slice(0);
          break;

        default:
          a[0][e] = a[1][e];
      }
    }

    return 2 < a.length ? I.apply(null, [a[0]].concat(Array.prototype.slice.call(a, 2))) : a[0];
  }

  function N(a) {
    a = Math.round(255 * a).toString(16);
    return 1 === a.length ? "0" + a : a;
  }

  function S(a, e, g, j) {
    if (a.addEventListener) a[j ? "removeEventListener" : "addEventListener"](e, g, !1);else if (a.attachEvent) a[j ? "detachEvent" : "attachEvent"]("on" + e, g);
  }

  function D(a, e) {
    function g(b, a, d, c) {
      return y[0 | b][Math.round(Math.min((a - d) / (c - d) * J, J))];
    }

    function r() {
      f.legend.fps !== q && (f.legend.fps = q, f.legend[T] = q ? "FPS" : "ms");
      K = q ? b.fps : b.duration;
      f.count[T] = 999 < K ? "999+" : K.toFixed(99 < K ? 0 : d.decimals);
    }

    function m() {
      z = A();
      L < z - d.threshold && (b.fps -= b.fps / Math.max(1, 60 * d.smoothing / d.interval), b.duration = 1E3 / b.fps);

      for (c = d.history; c--;) {
        E[c] = 0 === c ? b.fps : E[c - 1], F[c] = 0 === c ? b.duration : F[c - 1];
      }

      r();

      if (d.heat) {
        if (w.length) for (c = w.length; c--;) {
          w[c].el.style[h[w[c].name].heatOn] = q ? g(h[w[c].name].heatmap, b.fps, 0, d.maxFps) : g(h[w[c].name].heatmap, b.duration, d.threshold, 0);
        }
        if (f.graph && h.column.heatOn) for (c = u.length; c--;) {
          u[c].style[h.column.heatOn] = q ? g(h.column.heatmap, E[c], 0, d.maxFps) : g(h.column.heatmap, F[c], d.threshold, 0);
        }
      }

      if (f.graph) for (p = 0; p < d.history; p++) {
        u[p].style.height = (q ? E[p] ? Math.round(O / d.maxFps * Math.min(E[p], d.maxFps)) : 0 : F[p] ? Math.round(O / d.threshold * Math.min(F[p], d.threshold)) : 0) + "px";
      }
    }

    function k() {
      20 > d.interval ? (x = M(k), m()) : (x = setTimeout(k, d.interval), P = M(m));
    }

    function G(a) {
      a = a || window.event;
      a.preventDefault ? (a.preventDefault(), a.stopPropagation()) : (a.returnValue = !1, a.cancelBubble = !0);
      b.toggle();
    }

    function U() {
      d.toggleOn && S(f.container, d.toggleOn, G, 1);
      a.removeChild(f.container);
    }

    function V() {
      f.container && U();
      h = D.theme[d.theme];
      y = h.compiledHeatmaps || [];

      if (!y.length && h.heatmaps.length) {
        for (p = 0; p < h.heatmaps.length; p++) {
          y[p] = [];

          for (c = 0; c <= J; c++) {
            var b = y[p],
                e = c,
                g;
            g = 0.33 / J * c;
            var j = h.heatmaps[p].saturation,
                m = h.heatmaps[p].lightness,
                n = void 0,
                k = void 0,
                l = void 0,
                t = l = void 0,
                v = n = k = void 0,
                v = void 0,
                l = 0.5 >= m ? m * (1 + j) : m + j - m * j;
            0 === l ? g = "#000" : (t = 2 * m - l, k = (l - t) / l, g *= 6, n = Math.floor(g), v = g - n, v *= l * k, 0 === n || 6 === n ? (n = l, k = t + v, l = t) : 1 === n ? (n = l - v, k = l, l = t) : 2 === n ? (n = t, k = l, l = t + v) : 3 === n ? (n = t, k = l - v) : 4 === n ? (n = t + v, k = t) : (n = l, k = t, l -= v), g = "#" + N(n) + N(k) + N(l));
            b[e] = g;
          }
        }

        h.compiledHeatmaps = y;
      }

      f.container = s(document.createElement("div"), h.container);
      f.count = f.container.appendChild(s(document.createElement("div"), h.count));
      f.legend = f.container.appendChild(s(document.createElement("div"), h.legend));
      f.graph = d.graph ? f.container.appendChild(s(document.createElement("div"), h.graph)) : 0;
      w.length = 0;

      for (var q in f) {
        f[q] && h[q].heatOn && w.push({
          name: q,
          el: f[q]
        });
      }

      u.length = 0;

      if (f.graph) {
        f.graph.style.width = d.history * h.column.width + (d.history - 1) * h.column.spacing + "px";

        for (c = 0; c < d.history; c++) {
          u[c] = f.graph.appendChild(s(document.createElement("div"), h.column)), u[c].style.position = "absolute", u[c].style.bottom = 0, u[c].style.right = c * h.column.width + c * h.column.spacing + "px", u[c].style.width = h.column.width + "px", u[c].style.height = "0px";
        }
      }

      s(f.container, d);
      r();
      a.appendChild(f.container);
      f.graph && (O = f.graph.clientHeight);
      d.toggleOn && ("click" === d.toggleOn && (f.container.style.cursor = "pointer"), S(f.container, d.toggleOn, G));
    }

    "object" === H(a) && a.nodeType === j && (e = a, a = document.body);
    a || (a = document.body);
    var b = this,
        d = I({}, D.defaults, e || {}),
        f = {},
        u = [],
        h,
        y,
        J = 100,
        w = [],
        W = 0,
        B = d.threshold,
        Q = 0,
        L = A() - B,
        z,
        E = [],
        F = [],
        x,
        P,
        q = "fps" === d.show,
        O,
        K,
        c,
        p;
    b.options = d;
    b.fps = 0;
    b.duration = 0;
    b.isPaused = 0;

    b.tickStart = function () {
      Q = A();
    };

    b.tick = function () {
      z = A();
      W = z - L;
      B += (W - B) / d.smoothing;
      b.fps = 1E3 / B;
      b.duration = Q < L ? B : z - Q;
      L = z;
    };

    b.pause = function () {
      x && (b.isPaused = 1, clearTimeout(x), C(x), C(P), x = P = 0);
      return b;
    };

    b.resume = function () {
      x || (b.isPaused = 0, k());
      return b;
    };

    b.set = function (a, c) {
      d[a] = c;
      q = "fps" === d.show;
      -1 !== R(a, X) && V();
      -1 !== R(a, Y) && s(f.container, d);
      return b;
    };

    b.showDuration = function () {
      b.set("show", "ms");
      return b;
    };

    b.showFps = function () {
      b.set("show", "fps");
      return b;
    };

    b.toggle = function () {
      b.set("show", q ? "ms" : "fps");
      return b;
    };

    b.hide = function () {
      b.pause();
      f.container.style.display = "none";
      return b;
    };

    b.show = function () {
      b.resume();
      f.container.style.display = "block";
      return b;
    };

    b.destroy = function () {
      b.pause();
      U();

      b.tick = b.tickStart = function () {};
    };

    V();
    k();
  }

  var A,
      m = r.performance;
  A = m ? m[m.now ? "now" : "webkitNow"].bind(m) : function () {
    return +new Date();
  };

  for (var C = r.cancelAnimationFrame || r.cancelRequestAnimationFrame, M = r.requestAnimationFrame, m = ["moz", "webkit", "o"], G = 0, k = 0, Z = m.length; k < Z && !C; ++k) {
    M = (C = r[m[k] + "CancelAnimationFrame"] || r[m[k] + "CancelRequestAnimationFrame"]) && r[m[k] + "RequestAnimationFrame"];
  }

  C || (M = function M(a) {
    var e = A(),
        g = Math.max(0, 16 - (e - G));
    G = e + g;
    return r.setTimeout(function () {
      a(e + g);
    }, g);
  }, C = function C(a) {
    clearTimeout(a);
  });
  var T = "string" === H(document.createElement("div").textContent) ? "textContent" : "innerText";
  D.extend = I;
  window.FPSMeter = D;
  D.defaults = {
    interval: 100,
    smoothing: 10,
    show: "fps",
    toggleOn: "click",
    decimals: 1,
    maxFps: 60,
    threshold: 100,
    position: "absolute",
    zIndex: 10,
    left: "5px",
    top: "5px",
    right: "auto",
    bottom: "auto",
    margin: "0 0 0 0",
    theme: "dark",
    heat: 0,
    graph: 0,
    history: 20
  };
  var X = ["toggleOn", "theme", "heat", "graph", "history"],
      Y = "position zIndex left top right bottom margin".split(" ");
})(window);

(function (r, j) {
  j.theme = {};
  var s = j.theme.base = {
    heatmaps: [],
    container: {
      heatOn: null,
      heatmap: null,
      padding: "5px",
      minWidth: "95px",
      height: "30px",
      lineHeight: "30px",
      textAlign: "right",
      textShadow: "none"
    },
    count: {
      heatOn: null,
      heatmap: null,
      position: "absolute",
      top: 0,
      right: 0,
      padding: "5px 10px",
      height: "30px",
      fontSize: "24px",
      fontFamily: "Consolas, Andale Mono, monospace",
      zIndex: 2
    },
    legend: {
      heatOn: null,
      heatmap: null,
      position: "absolute",
      top: 0,
      left: 0,
      padding: "5px 10px",
      height: "30px",
      fontSize: "12px",
      lineHeight: "32px",
      fontFamily: "sans-serif",
      textAlign: "left",
      zIndex: 2
    },
    graph: {
      heatOn: null,
      heatmap: null,
      position: "relative",
      boxSizing: "padding-box",
      MozBoxSizing: "padding-box",
      height: "100%",
      zIndex: 1
    },
    column: {
      width: 4,
      spacing: 1,
      heatOn: null,
      heatmap: null
    }
  };
  j.theme.dark = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.8,
      lightness: 0.8
    }],
    container: {
      background: "#222",
      color: "#fff",
      border: "1px solid #1a1a1a",
      textShadow: "1px 1px 0 #222"
    },
    count: {
      heatOn: "color"
    },
    column: {
      background: "#3f3f3f"
    }
  });
  j.theme.light = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.5,
      lightness: 0.5
    }],
    container: {
      color: "#666",
      background: "#fff",
      textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
    },
    count: {
      heatOn: "color"
    },
    column: {
      background: "#eaeaea"
    }
  });
  j.theme.colorful = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.5,
      lightness: 0.6
    }],
    container: {
      heatOn: "backgroundColor",
      background: "#888",
      color: "#fff",
      textShadow: "1px 1px 0 rgba(0,0,0,.2)",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
    },
    column: {
      background: "#777",
      backgroundColor: "rgba(0,0,0,.2)"
    }
  });
  j.theme.transparent = j.extend({}, s, {
    heatmaps: [{
      saturation: 0.8,
      lightness: 0.5
    }],
    container: {
      padding: 0,
      color: "#fff",
      textShadow: "1px 1px 0 rgba(0,0,0,.5)"
    },
    count: {
      padding: "0 5px",
      height: "40px",
      lineHeight: "40px"
    },
    legend: {
      padding: "0 5px",
      height: "40px",
      lineHeight: "42px"
    },
    graph: {
      height: "40px"
    },
    column: {
      width: 5,
      background: "#999",
      heatOn: "backgroundColor",
      opacity: 0.5
    }
  });
})(window, FPSMeter);

/***/ })
/******/ ]);
});