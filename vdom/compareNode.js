// 比较新旧节点
import { removeChild, insertText, createTextNode } from './domFn';
import renderDOM from './renderDOM';
export default function compareNode(newNode, oldNode) {
    // 假定只改变数据层， newNode和oldNode结构保持一致
    if(newNode.tag === oldNode.tag) {
        // 更新文本节点
        if(newNode.text !== oldNode.text && newNode.tag === '') {
            // 移除旧的文本节点
            removeChild(oldNode.parent.ele, oldNode.ele);
            // 将新节点插入VNodeTree
            
            oldNode.text = newNode.text;
            oldNode.ele = createTextNode(newNode.text);
            // 插入新的文本节点
            insertText(oldNode.parent.ele, oldNode.ele);
            // innerContent(oldNode.parent.ele, newNode.text);
        }
        
    }
    if(newNode.children) {
        for(let i = 0, length = newNode.children.length; i < length; i++) {
            compareNode(newNode.children[i], oldNode.children[i]);
            
        }
    }
    // if(newNode.children[0] && oldNode.children[0]) {
    //     compareNode(newNode.children[0], oldNode.children[0])
    // }
    // TODO:模拟更换整个DOM
    // removeChild(document.getElementById('app'), document.getElementById('app').children[0]);
    // renderDOM(newNode);

}