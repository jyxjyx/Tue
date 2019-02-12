// ast叶子
export default class AstLeave {
    constructor() {
        this.tag = null;
        this.attr_normal = {};
        this.attr_variable = {};
        this.events = {};
        this.children = [];
        this.parent = null;
    }
    // 添加普通属性
    addNormalAttribute(name, value) {
        if(!this.attr_normal[name]) {
            this.attr_normal[name] = [];
        }
        this.attr_normal[name].push(value);
    }
    // 添加字面量属性
    addVariableAttribute(name, value) {
        if(!this.attr_variable[name]) {
            this.attr_variable[name] = [];
        }
        this.attr_variable[name].push(value);
    }
    // 添加事件
    addEvent(name, func) {
        this.events[name] = func;
    }
    // 添加标签名
    addTagName(name) {
        this.tag = name;
    }
    // 添加子节点
    addChild(child) {
        this.children.push(child);
    }
    // 添加父节点
    addParent(parent) {
        this.parent = parent;
    }
}