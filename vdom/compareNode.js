// 比较新旧节点
import { removeChild, appendChild } from './domFn';
import renderDOM from './renderDOM';
export default function compareNode(newNode, oldNode) {
    // if(newNode.tag === oldNode.tag) {
    //     // 更新文本节点
    //     if(newNode.text !== oldNode.text) {
    //         oldNode.text = newNode.text;
    //     }
    // } else {

    // }
    // if(newNode.children[0] && oldNode.children[0]) {
    //     compareNode(newNode.children[0], oldNode.children[0])
    // }
    // TODO:模拟更换整个DOM
    removeChild(document.getElementById('app'), document.getElementById('app').children[0]);
    renderDOM(newNode);
}