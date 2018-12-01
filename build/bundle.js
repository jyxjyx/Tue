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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const stateMixin = __webpack_require__(/*! ./mixin/stateMixin */ \"./mixin/stateMixin.js\");\r\nconst initMixin = __webpack_require__(/*! ./mixin/initMixin */ \"./mixin/initMixin.js\");\r\nconst lifehookMixin = __webpack_require__(/*! ./mixin/lifehookMixin */ \"./mixin/lifehookMixin.js\");\r\nfunction Tue(options) {\r\n    this._init(options);\r\n}\r\nstateMixin(Tue);\r\ninitMixin(Tue);\r\nlifehookMixin(Tue);\r\nmodule.exports = Tue;\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./mixin/initMixin.js":
/*!****************************!*\
  !*** ./mixin/initMixin.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 初始化处理\r\nconst render = __webpack_require__(/*! ../vdom/render */ \"./vdom/render.js\")\r\nmodule.exports = function initMixin(Tue) {\r\n    Tue.prototype._init = function (options) {\r\n        // 触发beforeCreated钩子\r\n        const beforeCreatedFn = this.options.beforeCreated;\r\n        if(beforeCreatedFn) {\r\n            if(typeof beforeCreatedFn === 'function') {\r\n                this.beforeCreated();\r\n            } else {\r\n                throw(`beforeCreated should be a function`)\r\n            }\r\n        }\r\n        // 初始化生命周期\r\n        this._initLifehook(options);\r\n        \r\n        // 初始化数据\r\n        this._initState(options);\r\n\r\n        // TODO:...待补充部分，如事件处理\r\n\r\n        // 触发created钩子\r\n        this.created();\r\n\r\n        // TODO:compile template into render function\r\n        // TODO:模拟返回了一个VNode\r\n        const vnode = render();\r\n        \r\n        // 触发beforeMounted钩子\r\n        this.beforeMounted();\r\n        \r\n        // TODO:渲染DOM\r\n        \r\n        // 触发mounted钩子\r\n        this.mounted();\r\n        \r\n        // TODO:将data、prop对象变为响应式对象\r\n\r\n        // TODO:响应式对象更新后触发DOM重绘\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/initMixin.js?");

/***/ }),

/***/ "./mixin/lifehookMixin.js":
/*!********************************!*\
  !*** ./mixin/lifehookMixin.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 初始化生命周期\r\nconst proxyData = __webpack_require__(/*! ../utils/proxyData */ \"./utils/proxyData.js\");\r\n\r\nconst lifehookKeys = [\r\n    'beforeCreated', \r\n    'created', \r\n    'beforeMounted', \r\n    'mounted', \r\n    'beforeUpdate',\r\n    'update', \r\n    'beforeDestoryed',\r\n    'destoryed',\r\n]\r\nmodule.exports = function lifehookMixin(Tue) {\r\n    Tue.prototype._initLifehook = function (options) {\r\n        // 向实例上添加lifehooks属性存储生命周期函数\r\n        this._lifehooks = {};\r\n        // 向lifehooks添加生命周期函数\r\n        lifehookKeys.forEach(lifehookName => {\r\n            // 检查有无定义生命周期\r\n            if(!options[lifehookName]) {\r\n                options[lifehookName] = new Function();\r\n            }\r\n            // 检查其是否为函数\r\n            if(typeof options[lifehookName] !== 'function') {\r\n                throw(`${lifehookName} should be a function`);\r\n            }    \r\n            this._lifehooks[lifehookName] = options[lifehookName];\r\n            proxyData(this, '_lifehooks', lifehookName);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/lifehookMixin.js?");

/***/ }),

/***/ "./mixin/stateMixin.js":
/*!*****************************!*\
  !*** ./mixin/stateMixin.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 初始化state：data、props、methods\r\nconst deepclone = __webpack_require__(/*! ../utils/deepclone */ \"./utils/deepclone.js\");\r\nconst proxyData = __webpack_require__(/*! ../utils/proxyData */ \"./utils/proxyData.js\");\r\nmodule.exports = function stateMixin(Tue) {\r\n    Tue.prototype._initState = function (options) {\r\n        // 将data挂到实例的_data上\r\n        const data = this._data =  deepclone(options.data);\r\n        const dataKeys = Object.getOwnPropertyNames(data);\r\n        // 将props挂到实例的_props上\r\n        const props = this._props = deepclone(options.props);\r\n        const propKeys = Object.getOwnPropertyNames(props);\r\n        // 将methods挂到实例的_methods上\r\n        const methods = this._methods = deepclone(options.methods);\r\n        const methodKeys = Object.getOwnPropertyNames(methods);\r\n        \r\n        // 检查是否有属性重复命名\r\n        dataKeys.forEach( dataName => {\r\n            if(propKeys.includes(dataName)) {\r\n                throw(`data name ${dataName} and props name ${dataName} should not have a same name`);\r\n            }\r\n            if(methodKeys.includes(dataName)) {\r\n                throw(`data name ${dataName} and methods name ${dataName} should not have a same name`);\r\n            }\r\n        })\r\n        propKeys.forEach( propName => {\r\n            if(methodKeys.includes(propName)) {\r\n                throw(`props name ${propName} and methods name ${propName} should not have a same name`);\r\n            }\r\n        })\r\n        // 代理data,methods,props\r\n        dataKeys.forEach(key => {\r\n            proxyData(this, '_data', key);\r\n        });\r\n        propKeys.forEach(key => {\r\n            proxyData(this, '_props', key)\r\n        });\r\n        methodKeys.forEach(key => {\r\n            proxyData(this, '_methods', key)\r\n        });\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/stateMixin.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Tue = __webpack_require__(/*! ./main */ \"./main.js\");\r\n// import typeCheck from './utils/typeCheck'\r\n// const typeCheck = require('./utils/typeCheck')\r\nlet Tan = new Tue({\r\n    data: {\r\n        testMsg: 'hello tan'\r\n    },\r\n    props: {\r\n        testProp: 'I am prop'\r\n    },\r\n    methods: {\r\n        testFn() {\r\n            console.log('I am fn')\r\n        },\r\n        // testMsg() {}\r\n    },\r\n    mounted() {\r\n        console.log(this.testMsg)\r\n    }\r\n})\r\nconsole.log(Tan)\n\n//# sourceURL=webpack:///./test.js?");

/***/ }),

/***/ "./utils/deepclone.js":
/*!****************************!*\
  !*** ./utils/deepclone.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 对对象的深拷贝\r\nmodule.exports = function deepclone(data) {\r\n    if(!data || typeof data !== 'object' || typeof data === 'function') return data;\r\n    const CP_constructor = data.constructor;\r\n    let cloneObj = new CP_constructor();\r\n    Object.getOwnPropertyNames(data).forEach(nameItem => {\r\n        // if(typeof data[nameItem] === 'object')\r\n        cloneObj[nameItem] = deepclone(data[nameItem]);\r\n        // else\r\n        //     cloneObj[nameItem] = data[nameItem];\r\n    })\r\n    return cloneObj;\r\n}\n\n//# sourceURL=webpack:///./utils/deepclone.js?");

/***/ }),

/***/ "./utils/proxyData.js":
/*!****************************!*\
  !*** ./utils/proxyData.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 将对实例tm的key属性的访问改为对tm[sourceKey][key]的访问\r\nmodule.exports = function proxyData(tm, sourceKey, key) {\r\n    Object.defineProperty(tm, key, {\r\n        get() {\r\n            return tm[sourceKey][key];\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./utils/proxyData.js?");

/***/ }),

/***/ "./vdom/render.js":
/*!************************!*\
  !*** ./vdom/render.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 将template转化为VNode\r\nconst VNode = __webpack_require__(/*! ./vnode */ \"./vdom/vnode.js\")\r\nmodule.exports = function render() {\r\n    return new VNode({\r\n        tag: 'div',\r\n        class: 'class1',\r\n        style: '',\r\n        text: 'this is VNode text',\r\n        events: '',\r\n        parent: '#app',\r\n        child: '',\r\n        href: '',\r\n        src: ''\r\n    });\r\n}\n\n//# sourceURL=webpack:///./vdom/render.js?");

/***/ }),

/***/ "./vdom/vnode.js":
/*!***********************!*\
  !*** ./vdom/vnode.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const vnodeAttributes = __webpack_require__(/*! ./vnodeAttributes */ \"./vdom/vnodeAttributes.js\");\r\nclass VNode {\r\n    constructor(nodeOpt) {\r\n        vnodeAttributes.forEach(attr => {\r\n            this[attr] = nodeOpt[attr];\r\n        })\r\n    }\r\n}\r\nmodule.exports = VNode;\n\n//# sourceURL=webpack:///./vdom/vnode.js?");

/***/ }),

/***/ "./vdom/vnodeAttributes.js":
/*!*********************************!*\
  !*** ./vdom/vnodeAttributes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\r\n    'tag',\r\n    'class',\r\n    'style',\r\n    'text',\r\n    'events',\r\n    'parent',\r\n    'child',\r\n    'href',\r\n    'src'\r\n]\n\n//# sourceURL=webpack:///./vdom/vnodeAttributes.js?");

/***/ })

/******/ });