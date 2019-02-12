// 操作dom方法
import domAttributes from './domAttributes';
// 创建DOM
function createElement(vnode) {
    var dom = document.createElement(vnode.tag);
    // 渲染domAttributes中对应tag的属性
    domAttributes[vnode.tag].forEach(item => {
        vnode[item] && dom.setAttribute(item, vnode[item]);
    });
    return dom;
    
}
// 插入节点
function appendChild(parentDOM, childDOM) {
    parentDOM.appendChild(childDOM);
}
// 插入内容content，isHTML：Boolean表示是否将content作为HTML展示
function innerContent(dom, content, isHTML) {
    if(isHTML) {
        dom.innerHTML = content;
    } else {
        dom.innerText = content;
    }
}
// 创建文本节点
function createTextNode(text) {
    return document.createTextNode(text);
}
// 插入文本节点
function insertText(dom, text) {
    let textNode;
    if(typeof text === 'string') {
        // 如果传入文字
        textNode = createTextNode(text);
    } else {
        // 如果传入的是textNode
        textNode = text;
    }
    appendChild(dom, textNode);
}
// 绑定原生DOM事件
function addEventListener(dom, event, callback) {
    dom.addEventListener(event, callback);
}
function removeChild(dom, childDom) {
    dom.removeChild(childDom);
}
export {createElement, innerContent, insertText, appendChild, addEventListener, removeChild, createTextNode}

