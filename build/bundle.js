/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tue; });\n/* harmony import */ var _mixin_stateMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixin/stateMixin */ \"./mixin/stateMixin.js\");\n/* harmony import */ var _mixin_initMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixin/initMixin */ \"./mixin/initMixin.js\");\n\r\n\r\nfunction Tue(options) {\r\n    this._init(options);\r\n    console.log(this)\r\n    // this.mounted();\r\n}\r\nObject(_mixin_stateMixin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Tue);\r\nObject(_mixin_initMixin__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tue);\r\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./mixin/initMixin.js":
/*!****************************!*\
  !*** ./mixin/initMixin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMixin; });\nfunction initMixin(Tue) {\r\n    Tue.prototype._init = function (options) {\r\n        this._initState(options);\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/initMixin.js?");

/***/ }),

/***/ "./mixin/stateMixin.js":
/*!*****************************!*\
  !*** ./mixin/stateMixin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return stateMixin; });\n/* harmony import */ var _utils_deepclone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deepclone */ \"./utils/deepclone.js\");\n/* harmony import */ var _utils_proxyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/proxyData */ \"./utils/proxyData.js\");\n\r\n\r\nfunction stateMixin(Tue) {\r\n    Tue.prototype._initState = function (options) {\r\n        const data = Tue._data =  Object(_utils_deepclone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options.data);\r\n        const dataKeys = Object.getOwnPropertyNames(data);\r\n        dataKeys.forEach(key => {\r\n            Object(_utils_proxyData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tue, '_data', key);\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/stateMixin.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\n\r\n// import typeCheck from './utils/typeCheck'\r\nconst typeCheck = __webpack_require__(/*! ./utils/typeCheck */ \"./utils/typeCheck.js\")\r\n// let Tan = new Tue({\r\n//     data: {\r\n//         testMsg: 'hello tan'\r\n//     },\r\n//     mounted() {\r\n//         console.log(this.testMsg)\r\n//     }\r\n// })\r\ndebugger\r\nclass A{};\r\nlet a = new A();\r\ntypeCheck(a, 'A');\n\n//# sourceURL=webpack:///./test.js?");

/***/ }),

/***/ "./utils/deepclone.js":
/*!****************************!*\
  !*** ./utils/deepclone.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deepclone; });\nfunction deepclone(obj) {\r\n    if(typeof obj !== 'object' || obj === null) return obj;\r\n    const cloneObj = new Object();\r\n    Object.getOwnPropertyNames(obj).forEach(nameItem => {\r\n        if(typeof obj[nameItem] === 'object')\r\n            cloneObj[nameItem] = deepclone(obj[nameItem]);\r\n        else\r\n            cloneObj[nameItem] = obj[nameItem];\r\n    })\r\n    return cloneObj;\r\n}\n\n//# sourceURL=webpack:///./utils/deepclone.js?");

/***/ }),

/***/ "./utils/proxyData.js":
/*!****************************!*\
  !*** ./utils/proxyData.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return proxyData; });\nfunction proxyData(tm, sourceKey, key) {\r\n    Object.defineProperty(tm, key, {\r\n        get() {\r\n            return tm[sourceKey][key];\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./utils/proxyData.js?");

/***/ }),

/***/ "./utils/typeCheck.js":
/*!****************************!*\
  !*** ./utils/typeCheck.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// export default function typeCheck (variable, expectType) {\r\n//     debugger\r\n//     let variableType = typeof variable;\r\n//     if(variable === null) {\r\n//         if(variableType === expectType) return true;\r\n//         else return false;\r\n//     } else {\r\n//         if(variableType !== 'object') {\r\n//             if(variableType === expectType) return true;\r\n//             else return false;\r\n//         } else {\r\n//             if(eval(`variable instanceof ${expectType}`)) return true;\r\n//             else return false;\r\n//         }\r\n//     }\r\n// }\r\nmodule.exports = function typeCheck (variable, expectType) {\r\n        debugger\r\n        let variableType = typeof variable;\r\n        if(variable === null) {\r\n            if(variableType === expectType) return true;\r\n            else return false;\r\n        } else {\r\n            if(variableType !== 'object') {\r\n                if(variableType === expectType) return true;\r\n                else return false;\r\n            } else {\r\n                if(eval(`variable instanceof ${expectType}`)) return true;\r\n                else return false;\r\n            }\r\n        }\r\n    }\r\n\n\n//# sourceURL=webpack:///./utils/typeCheck.js?");

/***/ })

/******/ });