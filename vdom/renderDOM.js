// 将VNode tree转化为真实dom
import {insertText, createElement, appendChild} from './domFn';
export default function renderDOM(vnode) {
    if(!vnode) return;
    // 如果是文本节点
    if(!vnode.tag) {
        // 插入内容
        insertText(vnode.parent.ele || vnode.parent, vnode.text);
    } else {   //VNode类型
        vnode.ele = createElement(vnode);
        vnode.child && vnode.child.forEach(child => {
            renderDOM(child);
        })
        
        // 插入子节点
        appendChild(vnode.parent.ele || vnode.parent, vnode.ele);
    }

}