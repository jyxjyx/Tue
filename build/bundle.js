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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initMixin; });\n/* harmony import */ var _vdom_renderVnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom/renderVnode */ \"./vdom/renderVnode.js\");\n/* harmony import */ var _vdom_renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom/renderDOM */ \"./vdom/renderDOM.js\");\n/* harmony import */ var _state_defineReactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/defineReactive */ \"./state/defineReactive.js\");\n/* harmony import */ var _state_defineReactive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_state_defineReactive__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_watcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/watcher */ \"./state/watcher.js\");\n/* harmony import */ var _state_observe_observe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/observe/observe */ \"./state/observe/observe.js\");\n/* harmony import */ var _render_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/parse */ \"./render/parse.js\");\n/* harmony import */ var _render_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render/render */ \"./render/render.js\");\n// 初始化处理\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction initMixin(Tue) {\r\n    Tue.prototype._init = function (options) {\r\n        // 初始化生命周期\r\n        this._initLifecycle(options);\r\n        // 触发beforeCreated钩子\r\n        this.beforeCreated();\r\n        // 初始化数据\r\n        this._initState(options);\r\n\r\n        // TODO:...待补充部分，如事件处理\r\n\r\n        // 触发created钩子\r\n        this.created();\r\n\r\n        // TODO:compile template into render function\r\n\r\n        // TODO:模拟返回了一个VNode\r\n        const vnodeTree = Object(_vdom_renderVnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this);\r\n        this._vnodeTree = vnodeTree;\r\n\r\n        // 解析template\r\n        const astTree = Object(_render_parse__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this.template);\r\n        // 渲染为vnode\r\n        Object(_render_render__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(astTree, this)\r\n        // 初次渲染DOM\r\n        Object(_vdom_renderDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(vnodeTree);\r\n        console.log(this)\r\n        \r\n        // 触发beforeMounted钩子\r\n        this.beforeMounted();\r\n        \r\n        // TODO:渲染DOM\r\n        \r\n        // 触发mounted钩子\r\n        this.mounted();\r\n        // 生成实例的渲染watcher\r\n        this._watchers = [];\r\n        // new Watcher(this);\r\n\r\n        setTimeout( () => {\r\n            this._watchers[0].update();\r\n        }, 5000 )\r\n\r\n\r\n\r\n        // TODO:将data、prop对象变为响应式对象\r\n        Object(_state_observe_observe__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, this._data);\r\n        _state_defineReactive__WEBPACK_IMPORTED_MODULE_2___default()(this, '_data', 'Watcher');\r\n\r\n        // TODO:响应式对象更新后触发DOM重绘\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./mixin/initMixin.js?");

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

/***/ "./render/ast.js":
/*!***********************!*\
  !*** ./render/ast.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AstLeave; });\n// ast叶子\r\nclass AstLeave {\r\n    constructor() {\r\n        this.tag = null;\r\n        this.attr_normal = {};\r\n        this.attr_variable = {};\r\n        this.events = {};\r\n        this.children = [];\r\n        this.parent = null;\r\n    }\r\n    // 添加普通属性\r\n    addNormalAttribute(name, value) {\r\n        if(!this.attr_normal[name]) {\r\n            this.attr_normal[name] = [];\r\n        }\r\n        this.attr_normal[name].push(value);\r\n    }\r\n    // 添加字面量属性\r\n    addVariableAttribute(name, value) {\r\n        if(!this.attr_variable[name]) {\r\n            this.attr_variable[name] = [];\r\n        }\r\n        this.attr_variable[name].push(value);\r\n    }\r\n    // 添加事件\r\n    addEvent(name, func) {\r\n        this.events[name] = func;\r\n    }\r\n    // 添加标签名\r\n    addTagName(name) {\r\n        this.tag = name;\r\n    }\r\n    // 添加子节点\r\n    addChild(child) {\r\n        this.children.push(child);\r\n    }\r\n    // 添加父节点\r\n    addParent(parent) {\r\n        this.parent = parent;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./render/ast.js?");

/***/ }),

/***/ "./render/parse.js":
/*!*************************!*\
  !*** ./render/parse.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast */ \"./render/ast.js\");\n\r\n\r\nfunction advance(html, n) {\r\n    const tmp = html.substr(n);\r\n    return tmp;\r\n}\r\n\r\nfunction parse(html) { \r\n    let _html = html;\r\n    \r\n    // 当前匹配的状态end_tag,start_tag,in_tag\r\n    const tagState = {\r\n        start: 'start_tag',\r\n        in: 'in_tag',\r\n        end: 'end_tag'\r\n    }\r\n    let curMatchTag = null;\r\n    \r\n    // 存储匹配到的开始标签以及标签状态 tagState   \r\n    const tagStack = [];\r\n\r\n    // 最终形成的ast\r\n    const astTree = new _ast__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    // 当前操作的ast\r\n    let curAstLeave = astTree;\r\n\r\n    \r\n    while(_html.length > 0) {\r\n        \r\n        // 匹配顶层开始标签名\r\n        if(tagStack.length === 0) {\r\n            let tagStartReg = /<([a-zA-Z0-9-])+[ >]/;\r\n            const matchResult = _html.match(tagStartReg);\r\n            // 尝试匹配开始标签\r\n            if(matchResult && matchResult.index === 0) {\r\n                const startTag = matchResult[0].slice(1, -1);\r\n                if(curAstLeave.tag === null) {\r\n                    // 当前ast为顶层节点时\r\n                    curAstLeave.addTagName(startTag);\r\n                } else {\r\n                    // 当前ast为子节点时\r\n                    const tmpAst = curAstLeave;\r\n                    curAstLeave = new _ast__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n                    curAstLeave.addTagName(startTag);\r\n                    curAstLeave.addParent(tmpAst);\r\n                    tmpAst.addChild(curAstLeave);\r\n                }\r\n                tagStack.push({\r\n                    tag: startTag,\r\n                    tagState: tagState.start\r\n                });\r\n                curMatchTag = tagStack.slice(-1)[0];\r\n                _html = advance(_html, matchResult[0].length - 1);\r\n            }\r\n        }\r\n        // 匹配开始标签中的属性和事件\r\n        else if(curMatchTag && (curMatchTag.tagState === tagState.start)) {\r\n            if(_html[0] === '>') {\r\n                curMatchTag.tagState = tagState.in;\r\n                _html = advance(_html, 1);\r\n            } else {\r\n                const attrReg = / ([:@]?[a-zA-Z0-9]+)=\"([a-zA-Z0-9_-]+)\"[ >]/;\r\n                const matchResult = _html.match(attrReg);\r\n                if(matchResult && matchResult.index === 0) {   \r\n                    let attrName = matchResult[1];\r\n                    let attrValue = matchResult[2];\r\n                    // 字面量属性\r\n                    if(attrName[0] === ':') {\r\n                        attrName = attrName.slice(1);\r\n                        curAstLeave.addVariableAttribute(attrName, attrValue);\r\n                    }\r\n                    // 事件\r\n                    else if(attrName[0] === '@') {\r\n                        attrName = attrName.slice(1);\r\n                        curAstLeave.addEvent(attrName, attrValue);\r\n                    }\r\n                    // 普通属性\r\n                    else {\r\n                        curAstLeave.addNormalAttribute(attrName, attrValue);\r\n                    }\r\n                    _html = advance(_html, matchResult[0].length - 1)\r\n                }\r\n            }\r\n        }\r\n        // 匹配文本节点以及子节点\r\n        else if(curMatchTag && (curMatchTag.tagState === tagState.in)) {\r\n            \r\n            // 找到下一个新的标签或者当前标签的结束标签\r\n            const tagReg = new RegExp(`(<([a-zA-Z0-9-])+[ >])|(</${tagStack.slice(-1)[0].tag}>)`);\r\n            const matchResult = _html.match(tagReg);\r\n            if(matchResult && matchResult.index > 0) {\r\n                const text = _html.slice(0, matchResult.index);\r\n                // 进行非空验证,去除只有回车和空格的情况\r\n                const tmp_result = text.match(/\\s+/);\r\n                if(!(tmp_result && tmp_result[0].length === text.length)) {\r\n                    curAstLeave.addChild(text);\r\n                }\r\n                // if(!text.match(/\\s+/)) {\r\n                    // 如果不是只有一个换行符，则插入文本节点\r\n                    // curAstLeave.addChild(text);\r\n                // }\r\n                // 直接前进至下一个标签位置\r\n                _html = advance(_html, matchResult.index);\r\n            }\r\n            // 如果碰到了新的子标签头 \r\n            else if(matchResult && matchResult.index === 0 && !matchResult[0].includes('/')) {\r\n                const startTag = matchResult[0].slice(1, -1);\r\n                const tmpAst = curAstLeave;\r\n                curAstLeave = new _ast__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n                curAstLeave.addTagName(startTag);\r\n                // tmpAst为非顶层标签时\r\n                // if(tmpAst.parent) {\r\n                //     curAstLeave.addParent(tmpAst.parent);\r\n                //     tmpAst.parent.addChild(curAstLeave);\r\n                // }\r\n                // tmpAst为顶层标签时\r\n                // else {\r\n                    curAstLeave.addParent(tmpAst);\r\n                    tmpAst.addChild(curAstLeave);\r\n                // }\r\n                tagStack.push({\r\n                    tag: startTag,\r\n                    tagState: tagState.start\r\n                });\r\n                curMatchTag = tagStack.slice(-1)[0];\r\n                _html = advance(_html, matchResult[0].length - 1);\r\n            }\r\n            // 如果碰到标签尾\r\n            else if(matchResult && matchResult.index === 0 && matchResult[0].includes('/')) {\r\n                // 当前标签匹配结束并且将其出栈\r\n                curMatchTag.tagState = tagState.end;\r\n                tagStack.pop();\r\n                // 更新当前匹配的标签\r\n                curMatchTag = tagStack.slice(-1)[0];\r\n                // 更新当前ast\r\n                curAstLeave = curAstLeave.parent;\r\n\r\n                _html = advance(_html, matchResult[0].length);\r\n            }\r\n\r\n\r\n        }\r\n    }\r\n\r\n    return astTree;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (parse);\n\n//# sourceURL=webpack:///./render/parse.js?");

/***/ }),

/***/ "./render/render.js":
/*!**************************!*\
  !*** ./render/render.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction render(ast, tue, parentVNode) {\r\n    // 初始化vnode配置\r\n    const nodeOpt = {\r\n        tag: '',\r\n        parent: parentVNode,\r\n        text: '',\r\n        children: [],\r\n        class: '',\r\n        style: '',\r\n        events: {}\r\n    }\r\n    const vnode = new VNode(nodeOpt);\r\n    // 如果为文本节点，则创建一个文本vnode\r\n    if(typeof ast === 'string') {\r\n        nodeOpt.tag = '';\r\n        nodeOpt.text = ast;\r\n    }\r\n    // 如果为ast，则进行解析\r\n    else if(ast instanceof AstLeave) {\r\n        nodeOpt.tag = ast.tag;\r\n        // 解析style\r\n        ast.attr_normal.style && ast.attr_normal.style.forEach(item => {\r\n            if(!nodeOpt.style) {\r\n                nodeOpt.style = '';\r\n            }\r\n            nodeOpt.style += item;\r\n        })\r\n        ast.attr_variable.style && ast.attr_variable.style.forEach(item => {\r\n            if(!nodeOpt.style) {\r\n                nodeOpt.style = '';\r\n            }\r\n            nodeOpt.style += tue[item];\r\n        })\r\n\r\n        // 解析class\r\n        ast.attr_normal.class && ast.attr_normal.class.forEach(item => {\r\n            if(!nodeOpt.class) {\r\n                nodeOpt.class = '';\r\n            } else {\r\n                nodeOpt.class += ' ';\r\n            }\r\n            nodeOpt.class += item;\r\n        })\r\n        ast.attr_variable.class && ast.attr_variable.class.forEach(item => {\r\n            if(!nodeOpt.class) {\r\n                nodeOpt.class = '';\r\n            } else {\r\n                nodeOpt.class += ' ';\r\n            }\r\n            nodeOpt.class += tue[item];\r\n        })\r\n\r\n        // 解析event\r\n        Object.keys(ast.events).forEach(item => {\r\n            nodeOpt.events[item] = tue[ast.events[item]];\r\n        })\r\n\r\n        ast.children && ast.children.forEach(item => {\r\n            nodeOpt.children.push(render(item, tue, vnode));\r\n        })\r\n    }\r\n    \r\n    // 重新配置vnode\r\n    vnode.setVNode(nodeOpt);\r\n    console.log(nodeOpt)\r\n    \r\n    return vnode; \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./render/render.js?");

/***/ }),

/***/ "./state/defineReactive.js":
/*!*********************************!*\
  !*** ./state/defineReactive.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Identifier 'watcher' has already been declared (37:18)\\nYou may need an appropriate loader to handle this file type.\\n|                 ob._watchers[prop] = [];\\r\\n|             }\\r\\n>             const watcher = new Watcher();\\r\\n|             ob._watchers[prop].push(watcher);\\r\\n|             return val;\\r\");\n\n//# sourceURL=webpack:///./state/defineReactive.js?");

/***/ }),

/***/ "./state/dep.js":
/*!**********************!*\
  !*** ./state/dep.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 收集watcher\r\nclass Dep {\r\n    constructor() {\r\n        this.subs = [];\r\n        \r\n    }\r\n    addWatcher(watcher) {\r\n        this.subs.push(watcher);\r\n    }\r\n    removeWatcher(watcher) {\r\n        let index = this.subs.indexOf(watcher);\r\n        this.subs.splice(index, 1);\r\n    }\r\n    notify() {\r\n        for(let i = 0; i < this.subs.length; i++) {\r\n            this.subs[i].update();\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dep);\n\n//# sourceURL=webpack:///./state/dep.js?");

/***/ }),

/***/ "./state/observe/index.js":
/*!********************************!*\
  !*** ./state/observe/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Observe; });\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dep */ \"./state/dep.js\");\n/* harmony import */ var _defineReactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defineReactive */ \"./state/defineReactive.js\");\n/* harmony import */ var _defineReactive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_defineReactive__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../watcher */ \"./state/watcher.js\");\n\r\n\r\n\r\nlet id = 0;\r\nclass Observe {\r\n    constructor(value) {\r\n        this.value = value;\r\n        Object.defineProperty(value, '__ob__', {\r\n            configurable: true,\r\n            enumerable: false,\r\n            value: this,\r\n            writable: true\r\n        });\r\n        this.dep = new _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\n        // TODO:一些逻辑\r\n        this.define();\r\n    }\r\n    define() {\r\n        const keys = Object.keys(this.value);\r\n        this._watchers = {};\r\n        keys.forEach((key, index) => {\r\n            \r\n            _defineReactive__WEBPACK_IMPORTED_MODULE_1___default()(this.value, key, this);\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./state/observe/index.js?");

/***/ }),

/***/ "./state/observe/observe.js":
/*!**********************************!*\
  !*** ./state/observe/observe.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return observe; });\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../watcher */ \"./state/watcher.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./state/observe/index.js\");\n\r\n\r\n\r\nfunction observe(value, isRootData) {\r\n    // TODO:cb待添加\r\n    // const watch = new Watcher(vm, obj);\r\n\r\n    // Object.defineProperty(obj, '__ob__', {\r\n    //     configurable: true,\r\n    //     enumerable: false,\r\n    //     value: this,\r\n    //     writable: true\r\n    // });\r\n    if(obj.__ob__ || typeof value !== 'object') {\r\n        return\r\n    }\r\n    const ob = new _index__WEBPACK_IMPORTED_MODULE_1__[\"default\"](value);\r\n    return ob;\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./state/observe/observe.js?");

/***/ }),

/***/ "./state/watcher.js":
/*!**************************!*\
  !*** ./state/watcher.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vdom_renderVnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vdom/renderVnode */ \"./vdom/renderVnode.js\");\n/* harmony import */ var _vdom_compareNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vdom/compareNode */ \"./vdom/compareNode.js\");\n// watcher观察者类\r\n\r\n\r\nlet id = 0;\r\nclass Watcher {\r\n    constructor(tm, value, cb) {\r\n        this.id = id++;\r\n        this.tm = tm;\r\n        this.cb = cb;\r\n        this.value = value;\r\n        tm._watchers.push(this);\r\n    }\r\n    update() {\r\n        console.log('should be updated')\r\n        // 模拟值的变化\r\n        // const newVNodeTree = renderVnode(this.tm, true);\r\n        // 比较新旧VNode，并作出更新\r\n        // compareNode(newVNodeTree, this.tm._vnodeTree);\r\n\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);\n\n//# sourceURL=webpack:///./state/watcher.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\n\r\nlet Tan = new _main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    template: `<div class=\"c1\" :class=\"testclass\" :style=\"teststyle\" @click=\"handlerClick\">\r\n                    我是div的文字内容\r\n                    <span :class=\"testclass\">我是行内span</span>\r\n                    <div>\r\n                        我是1号二级div\r\n                        <div @click=\"handlerClick\">我是三级div</div>\r\n                    </div>\r\n                    <div>我是2号二级div</div>\r\n                </div>`,\r\n    data: {\r\n        testMsg: 'hello tan'\r\n    },\r\n    props: {\r\n        testProp: 'I am prop'\r\n    },\r\n    methods: {\r\n        testFn() {\r\n            console.log('I am fn')\r\n        },\r\n        // testMsg() {}\r\n    },\r\n    mounted() {\r\n        console.log(this.testMsg)\r\n        setTimeout( () => {\r\n            this.testMsg = 'tan changed';\r\n        }, 5000 )\r\n    }\r\n})\r\nconsole.log(Tan)\n\n//# sourceURL=webpack:///./test.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return proxyData; });\n// 将对实例tm的key属性的访问改为对tm[sourceKey][key]的访问\r\nfunction proxyData(tm, sourceKey, key) {\r\n    Object.defineProperty(tm, key, {\r\n        enumerable: true,\r\n        configurable: true,\r\n        get() {\r\n            return tm[sourceKey][key];\r\n        },\r\n        // set() {}\r\n    })\r\n}\n\n//# sourceURL=webpack:///./utils/proxyData.js?");

/***/ }),

/***/ "./vdom/compareNode.js":
/*!*****************************!*\
  !*** ./vdom/compareNode.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return compareNode; });\n/* harmony import */ var _domFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFn */ \"./vdom/domFn.js\");\n/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDOM */ \"./vdom/renderDOM.js\");\n// 比较新旧节点\r\n\r\n\r\nfunction compareNode(newNode, oldNode) {\r\n    // if(newNode.tag === oldNode.tag) {\r\n    //     // 更新文本节点\r\n    //     if(newNode.text !== oldNode.text) {\r\n    //         oldNode.text = newNode.text;\r\n    //     }\r\n    // } else {\r\n\r\n    // }\r\n    // if(newNode.children[0] && oldNode.children[0]) {\r\n    //     compareNode(newNode.children[0], oldNode.children[0])\r\n    // }\r\n    // TODO:模拟更换整个DOM\r\n    Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"removeChild\"])(document.getElementById('app'), document.getElementById('app').children[0]);\r\n    Object(_renderDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newNode);\r\n}\n\n//# sourceURL=webpack:///./vdom/compareNode.js?");

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
/*! exports provided: createElement, innerContent, insertText, appendChild, addEventListener, removeChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"innerContent\", function() { return innerContent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertText\", function() { return insertText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendChild\", function() { return appendChild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventListener\", function() { return addEventListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChild\", function() { return removeChild; });\n/* harmony import */ var _domAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domAttributes */ \"./vdom/domAttributes.js\");\n// 操作dom方法\r\n\r\n// 创建DOM\r\nfunction createElement(vnode) {\r\n    var dom = document.createElement(vnode.tag);\r\n    // 渲染domAttributes中对应tag的属性\r\n    _domAttributes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][vnode.tag].forEach(item => {\r\n        vnode[item] && dom.setAttribute(item, vnode[item]);\r\n    });\r\n    return dom;\r\n    \r\n}\r\n// 插入节点\r\nfunction appendChild(parentDOM, childDOM) {\r\n    parentDOM.appendChild(childDOM);\r\n}\r\n// 插入内容content，isHTML：Boolean表示是否将content作为HTML展示\r\nfunction innerContent(dom, content, isHTML) {\r\n    if(isHTML) {\r\n        dom.innerHTML = content;\r\n    } else {\r\n        dom.innerText = content;\r\n    }\r\n}\r\n// 插入文本节点\r\nfunction insertText(dom, text) {\r\n    const textNode = document.createTextNode(text);\r\n    appendChild(dom, textNode);\r\n}\r\n// 绑定原生DOM事件\r\nfunction addEventListener(dom, event, callback) {\r\n    dom.addEventListener(event, callback);\r\n}\r\nfunction removeChild(dom, childDom) {\r\n    dom.removeChild(childDom);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./vdom/domFn.js?");

/***/ }),

/***/ "./vdom/renderDOM.js":
/*!***************************!*\
  !*** ./vdom/renderDOM.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderDOM; });\n/* harmony import */ var _domFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFn */ \"./vdom/domFn.js\");\n// 将VNode tree转化为真实dom\r\n\r\nfunction renderDOM(vnode) {\r\n    if(!vnode) return;\r\n    // 如果是文本节点\r\n    if(!vnode.tag) {\r\n        // 插入内容\r\n        Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"insertText\"])(vnode.parent.ele || vnode.parent, vnode.text);\r\n    } else {   //VNode类型\r\n        vnode.ele = Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(vnode);\r\n        vnode.children && vnode.children.forEach(child => {\r\n            renderDOM(child);\r\n        })\r\n        // DOM原生事件绑定\r\n        let events = Object.keys(vnode.events);\r\n        events.forEach(item => {\r\n            Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"addEventListener\"])(vnode.ele, item, vnode.events[item]);\r\n        })\r\n        \r\n        // 插入子节点\r\n        Object(_domFn__WEBPACK_IMPORTED_MODULE_0__[\"appendChild\"])(vnode.parent.ele || vnode.parent, vnode.ele);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./vdom/renderDOM.js?");

/***/ }),

/***/ "./vdom/renderVnode.js":
/*!*****************************!*\
  !*** ./vdom/renderVnode.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./vdom/vnode.js\");\n// 将template转化为VNode，TODO:模拟产生VNode\r\n\r\nfunction render(tm, tmp) {\r\n    const parentNode = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: 'div',\r\n        class: 'class1',\r\n        style: '',\r\n        text: 'this is VNode text',\r\n        events: '',\r\n        parent: document.querySelector('#app'),\r\n        children: [],\r\n        href: '',\r\n        src: ''\r\n    });\r\n    const childNode = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: 'p',\r\n        class: 'class2',\r\n        style: '',\r\n        text: 'this is child VNode text',\r\n        events: '',\r\n        parent: parentNode,\r\n        children: '',\r\n        href: '',\r\n        src: ''\r\n    })\r\n\r\n    const childNode2 = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: 'span',\r\n        class: 'class3',\r\n        style: '',\r\n        text: 'this is child VNode text',\r\n        events: {\r\n            click: function() {\r\n                console.log('clicked')\r\n            }\r\n        },\r\n        parent: parentNode,\r\n        children: '',\r\n        href: '',\r\n        src: ''\r\n    })\r\n    const textNode1 = new _vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        tag: '',\r\n        text: 'this is text VNode1' + tm.testMsg,\r\n        parent: childNode2\r\n    })\r\n    childNode2.children = [textNode1]\r\n    \r\n    parentNode.children = [childNode, childNode2];\r\n    if(!tmp) {\r\n        return parentNode;\r\n    } else {\r\n        parentNode.children[1].children[0].text = 'this is changed'\r\n        return parentNode;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./vdom/renderVnode.js?");

/***/ }),

/***/ "./vdom/vnode.js":
/*!***********************!*\
  !*** ./vdom/vnode.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vnodeAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnodeAttributes */ \"./vdom/vnodeAttributes.js\");\n/* harmony import */ var _domAttributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domAttributes */ \"./vdom/domAttributes.js\");\n// VNode类\r\n\r\n\r\nclass VNode {\r\n    constructor(nodeOpt) {       \r\n        this.setVNode(nodeOpt)\r\n    }\r\n    setVNode(nodeOpt) {\r\n        // 设置默认值\r\n        this.ele = null;\r\n        this.isTextHTML = false;\r\n        // 默认文本节点\r\n        if(nodeOpt.tag) {\r\n            // 初始化对应属性\r\n            _domAttributes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][nodeOpt.tag].forEach(item => {\r\n                this[item] = null;\r\n            })\r\n        } else { \r\n            //文本节点\r\n            this.tag = '';\r\n            this.text = nodeOpt.text\r\n        }\r\n        // 初始化事件类型\r\n        this.events = {};\r\n        // 对已有属性赋值\r\n        _vnodeAttributes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(attr => {\r\n            if(nodeOpt[attr])\r\n                this[attr] = nodeOpt[attr];\r\n        })\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (VNode);\n\n//# sourceURL=webpack:///./vdom/vnode.js?");

/***/ }),

/***/ "./vdom/vnodeAttributes.js":
/*!*********************************!*\
  !*** ./vdom/vnodeAttributes.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// VNode具有的属性名\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\r\n    'tag',  //标签名称，若不存在则为文本节点\r\n    'class',  //\r\n    'style',  //\r\n    'text',  //文本节点的文本内容\r\n    'isTextHTML',  //是否需要将内容作为html格式显示\r\n    'events',  //时间\r\n    'parent',  //父VNode\r\n    'children',  //子VNode\r\n    'href',  //\r\n    'src',  //\r\n    'ele',  //存储真实DOM\r\n]);\n\n//# sourceURL=webpack:///./vdom/vnodeAttributes.js?");

/***/ })

/******/ });