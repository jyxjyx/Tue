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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixin_stateMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixin/stateMixin */ \"./mixin/stateMixin.js\");\n/* harmony import */ var _mixin_initMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixin/initMixin */ \"./mixin/initMixin.js\");\n/* harmony import */ var _mixin_lifecycleMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin/lifecycleMixin */ \"./mixin/lifecycleMixin.js\");\n\r\n\r\n\r\nfunction Tue(options) {\r\n    this._init(options);\r\n}\r\nObject(_mixin_stateMixin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Tue);\r\nObject(_mixin_initMixin__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tue);\r\nObject(_mixin_lifecycleMixin__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Tue);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tue);\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./mixin/initMixin.js":
/*!****************************!*\
  !*** ./mixin/initMixin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMixin; });\n/* harmony import */ var _vdom_renderVnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom/renderVnode */ \"./vdom/renderVnode.js\");\n/* harmony import */ var _vdom_renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom/renderDOM */ \"./vdom/renderDOM.js\");\n// 初始化处理\r\n\r\n\r\nfunction initMixin(Tue) {\r\n    Tue.prototype._init = function (options) {\r\n        // 初始化生命周期\r\n        this._initLifecycle(options);\r\n        // 触发beforeCreated钩子\r\n        this.beforeCreated();\r\n        // 初始化数据\r\n        this._initState(options);\r\n\r\n        // TODO:...待补充部分，如事件处理\r\n\r\n        // 触发created钩子\r\n        this.created();\r\n\r\n        // TODO:compile template into render function\r\n        // TODO:模拟返回了一个VNode\r\n        const vnodeTree = Object(_vdom_renderVnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options.template);\r\n        // 初次渲染DOM\r\n        Object(_vdom_renderDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vnodeTree);\r\n        \r\n        // 触发beforeMounted钩子\r\n        this.beforeMounted();\r\n        \r\n        // TODO:渲染DOM\r\n        \r\n        // 触发mounted钩子\r\n        this.mounted();\r\n        \r\n        // TODO:将data、prop对象变为响应式对象\r\n\r\n        // TODO:响应式对象更新后触发DOM重绘\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/initMixin.js?");

/***/ }),

/***/ "./mixin/lifecycleMixin.js":
/*!*********************************!*\
  !*** ./mixin/lifecycleMixin.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lifecycleMixin; });\n/* harmony import */ var _utils_proxyData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/proxyData */ \"./utils/proxyData.js\");\n// 初始化生命周期\r\n\r\n\r\nconst lifecycleKeys = [\r\n    'beforeCreated', \r\n    'created', \r\n    'beforeMounted', \r\n    'mounted', \r\n    'beforeUpdate',\r\n    'update', \r\n    'beforeDestoryed',\r\n    'destoryed',\r\n]\r\nfunction lifecycleMixin(Tue) {\r\n    Tue.prototype._initLifecycle = function (options) {\r\n        // 向实例上添加lifecycle属性存储生命周期函数\r\n        this._lifecycle = {};\r\n        // 向lifecycle添加生命周期函数\r\n        lifecycleKeys.forEach(lifecycleName => {\r\n            // 检查有无定义生命周期\r\n            if(!options[lifecycleName]) {\r\n                options[lifecycleName] = new Function();\r\n            }\r\n            // 检查其是否为函数\r\n            if(typeof options[lifecycleName] !== 'function') {\r\n                throw(`${lifecycleName} should be a function`);\r\n            }    \r\n            this._lifecycle[lifecycleName] = options[lifecycleName];\r\n            Object(_utils_proxyData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, '_lifecycle', lifecycleName);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/lifecycleMixin.js?");

/***/ }),

/***/ "./mixin/stateMixin.js":
/*!*****************************!*\
  !*** ./mixin/stateMixin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return stateMixin; });\n/* harmony import */ var _utils_deepclone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deepclone */ \"./utils/deepclone.js\");\n/* harmony import */ var _utils_proxyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/proxyData */ \"./utils/proxyData.js\");\n// 初始化state：data、props、methods\r\n\r\n\r\nfunction stateMixin(Tue) {\r\n    Tue.prototype._initState = function (options) {\r\n        // 将data挂到实例的_data上\r\n        const data = this._data =  Object(_utils_deepclone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options.data);\r\n        const dataKeys = Object.getOwnPropertyNames(data);\r\n        // 将props挂到实例的_props上\r\n        const props = this._props = Object(_utils_deepclone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options.props);\r\n        const propKeys = Object.getOwnPropertyNames(props);\r\n        // 将methods挂到实例的_methods上\r\n        const methods = this._methods = Object(_utils_deepclone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options.methods);\r\n        const methodKeys = Object.getOwnPropertyNames(methods);\r\n        \r\n        // 检查是否有属性重复命名\r\n        dataKeys.forEach( dataName => {\r\n            if(propKeys.includes(dataName)) {\r\n                throw(`data name ${dataName} and props name ${dataName} should not have a same name`);\r\n            }\r\n            if(methodKeys.includes(dataName)) {\r\n                throw(`data name ${dataName} and methods name ${dataName} should not have a same name`);\r\n            }\r\n        })\r\n        propKeys.forEach( propName => {\r\n            if(methodKeys.includes(propName)) {\r\n                throw(`props name ${propName} and methods name ${propName} should not have a same name`);\r\n            }\r\n        })\r\n        // 代理data,methods,props\r\n        dataKeys.forEach(key => {\r\n            Object(_utils_proxyData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, '_data', key);\r\n        });\r\n        propKeys.forEach(key => {\r\n            Object(_utils_proxyData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, '_props', key)\r\n        });\r\n        methodKeys.forEach(key => {\r\n            Object(_utils_proxyData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, '_methods', key)\r\n        });\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/stateMixin.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\n\r\n// import typeCheck from './utils/typeCheck'\r\n// const typeCheck = require('./utils/typeCheck')\r\nlet Tan = new _main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    data: {\r\n        testMsg: 'hello tan'\r\n    },\r\n    props: {\r\n        testProp: 'I am prop'\r\n    },\r\n    methods: {\r\n        testFn() {\r\n            console.log('I am fn')\r\n        },\r\n        // testMsg() {}\r\n    },\r\n    mounted() {\r\n        console.log(this.testMsg)\r\n    }\r\n})\r\nconsole.log(Tan)\n\n//# sourceURL=webpack:///./test.js?");

/***/ }),

/***/ "./utils/deepclone.js":
/*!****************************!*\
  !*** ./utils/deepclone.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deepclone; });\n// 对对象的深拷贝\r\nfunction deepclone(data) {\r\n    if(!data || typeof data !== 'object' || typeof data === 'function') return data;\r\n    const CP_constructor = data.constructor;\r\n    let cloneObj = new CP_constructor();\r\n    Object.getOwnPropertyNames(data).forEach(nameItem => {\r\n        // if(typeof data[nameItem] === 'object')\r\n        cloneObj[nameItem] = deepclone(data[nameItem]);\r\n        // else\r\n        //     cloneObj[nameItem] = data[nameItem];\r\n    })\r\n    return cloneObj;\r\n}\n\n//# sourceURL=webpack:///./utils/deepclone.js?");

/***/ }),

/***/ "./utils/proxyData.js":
/*!****************************!*\
  !*** ./utils/proxyData.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return proxyData; });\n// 将对实例tm的key属性的访问改为对tm[sourceKey][key]的访问\r\nfunction proxyData(tm, sourceKey, key) {\r\n    Object.defineProperty(tm, key, {\r\n        get() {\r\n            return tm[sourceKey][key];\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./utils/proxyData.js?");

/***/ }),

/***/ "./vdom/domAttributes.js":
/*!*******************************!*\
  !*** ./vdom/domAttributes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 原生dom及对应的属性\r\n// 原生dom具有的属性名\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    div: ['style', 'class'],\r\n    p: ['style', 'class'],\r\n    ul: ['style', 'class'],\r\n    li: ['style', 'class'],\r\n    span: ['style', 'class'],\r\n    a: ['style', 'class', 'href', 'target'],\r\n    img: ['style', 'class', 'src', 'width', 'height'],\r\n\r\n});\n\n//# sourceURL=webpack:///./vdom/domAttributes.js?");

/***/ }),

/***/ "./vdom/domFn.js":
/*!***********************!*\
  !*** ./vdom/domFn.js ***!
  \***********************/
/*! exports provided: createElement, innerContent, insertText, appendChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"innerContent\", function() { return innerContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertText\", function() { return insertText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendChild\", function() { return appendChild; });\n/* harmony import */ var _domAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domAttributes */ \"./vdom/domAttributes.js\");\n// 操作dom方法\r\n\r\n// 创建DOM\r\nfunction createElement(vnode) {\r\n    var dom = document.createElement(vnode.tag);\r\n    // 渲染domAttributes中对应tag的属性\r\n    _domAttributes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][vnode.tag].forEach(item => {\r\n        vnode[item] && dom.setAttribute(item, vnode[item]);\r\n    });\r\n    return dom;\r\n    \r\n}\r\n// 插入节点\r\nfunction appendChild(parentDOM, childDOM) {\r\n    parentDOM.appendChild(childDOM);\r\n}\r\n// 插入内容content，isHTML：Boolean表示是否将content作为HTML展示\r\nfunction innerContent(dom, content, isHTML) {\r\n    if(isHTML) {\r\n        dom.innerHTML = content;\r\n    } else {\r\n        dom.innerText = content;\r\n    }\r\n}\r\n// 插入文本节点\r\nfunction insertText(dom, text) {\r\n    const textNode = document.createTextNode(text);\r\n    appendChild(dom, textNode);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./vdom/domFn.js?");

/***/ }),

/***/ "./vdom/renderDOM.js":
/*!***************************!*\
  !*** ./vdom/renderDOM.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderDOM; });\n/* harmony import */ var _domFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFn */ \"./vdom/domFn.js\");\n// 将VNode tree转化为真实dom\r\n\r\nfunction renderDOM(vnode) {\r\n    if(!vnode) return;\r\n    // 如果是文本节点\r\n    if(!vnode.tag) {\r\n        // 插入内容\r\n        Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"insertText\"])(vnode.parent.ele || vnode.parent, vnode.text);\r\n    } else {   //VNode类型\r\n        vnode.ele = Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(vnode);\r\n        vnode.child && vnode.child.forEach(child => {\r\n            renderDOM(child);\r\n        })\r\n        \r\n        // 插入子节点\r\n        Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"appendChild\"])(vnode.parent.ele || vnode.parent, vnode.ele);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./vdom/renderDOM.js?");

/***/ }),

/***/ "./vdom/renderVnode.js":
/*!*****************************!*\
  !*** ./vdom/renderVnode.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./vdom/vnode.js\");\n// 将template转化为VNode，TODO:模拟产生VNode\r\n\r\nfunction render(tempalte) {\r\n    const parentNode = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: 'div',\r\n        class: 'class1',\r\n        style: '',\r\n        text: 'this is VNode text',\r\n        events: '',\r\n        parent: document.querySelector('#app'),\r\n        child: [],\r\n        href: '',\r\n        src: ''\r\n    });\r\n    const childNode = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: 'p',\r\n        class: 'class2',\r\n        style: '',\r\n        text: 'this is child VNode text',\r\n        events: '',\r\n        parent: parentNode,\r\n        child: '',\r\n        href: '',\r\n        src: ''\r\n    })\r\n\r\n    const childNode2 = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: 'span',\r\n        class: 'class3',\r\n        style: '',\r\n        text: 'this is child VNode text',\r\n        events: '',\r\n        parent: parentNode,\r\n        child: '',\r\n        href: '',\r\n        src: ''\r\n    })\r\n    const textNode1 = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: '',\r\n        text: 'this is text VNode1',\r\n        parent: childNode2\r\n    })\r\n    childNode2.child = [textNode1]\r\n    \r\n    parentNode.child = [childNode, childNode2];\r\n    \r\n    return parentNode;\r\n}\n\n//# sourceURL=webpack:///./vdom/renderVnode.js?");

/***/ }),

/***/ "./vdom/vnode.js":
/*!***********************!*\
  !*** ./vdom/vnode.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vnodeAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnodeAttributes */ \"./vdom/vnodeAttributes.js\");\n// VNode类\r\n\r\nclass VNode {\r\n    constructor(nodeOpt) {\r\n        // 设置默认值\r\n        this.ele = null;\r\n        this.isTextHTML = false;\r\n\r\n        _vnodeAttributes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(attr => {\r\n            if(nodeOpt[attr])\r\n                this[attr] = nodeOpt[attr];\r\n        })\r\n\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (VNode);\n\n//# sourceURL=webpack:///./vdom/vnode.js?");

/***/ }),

/***/ "./vdom/vnodeAttributes.js":
/*!*********************************!*\
  !*** ./vdom/vnodeAttributes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// VNode具有的属性名\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    'tag',  //标签名称，若不存在则为文本节点\r\n    'class',  //\r\n    'style',  //\r\n    'text',  //文本节点的文本内容\r\n    'isTextHTML',  //是否需要将内容作为html格式显示\r\n    'events',  //时间\r\n    'parent',  //父VNode\r\n    'child',  //子VNode\r\n    'href',  //\r\n    'src',  //\r\n    'ele',  //存储真实DOM\r\n]);\n\n//# sourceURL=webpack:///./vdom/vnodeAttributes.js?");

/***/ })

/******/ });