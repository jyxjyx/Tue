// 将VNode tree转化为真实dom
import { insertText, createElement, appendChild, addEventListener, createTextNode } from './domFn';
export default function renderDOM(vnode) {
    if(!vnode) return;
    // 如果是文本节点
    if(vnode.tag === '') {
        vnode.ele = createTextNode(vnode.text);

        // 插入内容
        insertText(vnode.parent.ele || vnode.parent, vnode.ele);
    } else {   //VNode类型
        vnode.ele = createElement(vnode);
        vnode.children && vnode.children.forEach(child => {
            renderDOM(child);
        })
        // DOM原生事件绑定
        let events = Object.keys(vnode.events);
        events.forEach(item => {
            addEventListener(vnode.ele, item, vnode.events[item]);
        })
        
        // 插入子节点
        appendChild(vnode.parent.ele || vnode.parent, vnode.ele);
    }

}