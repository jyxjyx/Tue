// 将VNode tree转化为真实dom
// const VNode = require('./vnode');
const domFn = require('./domFn');
module.exports = function renderDOM(vnode) {
    if(!vnode) return;
    // 如果是文本节点
    if(vnode.tag === '') {
        // 插入内容
        domFn.insertText(vnode.parent.ele || vnode.parent, vnode.text);
    } else {   //VNode类型
        vnode.ele = domFn.createElement(vnode);
        vnode.child && vnode.child.forEach(child => {
            renderDOM(child);
        })
        
        // 插入子节点
        domFn.appendChild(vnode.parent.ele || vnode.parent, vnode.ele);
    }

}