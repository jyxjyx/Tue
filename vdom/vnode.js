// VNode类
import vnodeAttributes from './vnodeAttributes';
import domAttributes from './domAttributes'
class VNode {
    constructor(nodeOpt) {       
        this.setVNode(nodeOpt)
    }
    setVNode(nodeOpt) {
        // 设置默认值
        this.ele = null;
        this.isTextHTML = false;
        // 默认文本节点
        if(nodeOpt.tag) {
            // 初始化对应属性
            domAttributes[nodeOpt.tag].forEach(item => {
                this[item] = null;
            })
        } else { 
            //文本节点
            this.tag = '';
            this.text = nodeOpt.text
        }
        // 初始化事件类型
        this.events = {};
        // 对已有属性赋值
        vnodeAttributes.forEach(attr => {
            if(nodeOpt[attr])
                this[attr] = nodeOpt[attr];
        })
    }
}
export default  VNode;