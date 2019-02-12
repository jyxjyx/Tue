// 将template转化为VNode，TODO:模拟产生VNode
import VNode from './vnode';
export default function render(tm, tmp) {
    const parentNode = new VNode({
        tag: 'div',
        class: 'class1',
        style: '',
        text: 'this is VNode text',
        events: '',
        parent: document.querySelector('#app'),
        children: [],
        href: '',
        src: ''
    });
    const childNode = new VNode({
        tag: 'p',
        class: 'class2',
        style: '',
        text: 'this is child VNode text',
        events: '',
        parent: parentNode,
        children: '',
        href: '',
        src: ''
    })

    const childNode2 = new VNode({
        tag: 'span',
        class: 'class3',
        style: '',
        text: 'this is child VNode text',
        events: {
            click: function() {
                console.log('clicked')
            }
        },
        parent: parentNode,
        children: '',
        href: '',
        src: ''
    })
    const textNode1 = new VNode({
        tag: '',
        text: 'this is text testMsg: ' + tm.testMsg,
        parent: childNode2
    })
    childNode2.children = [textNode1]
    
    parentNode.children = [childNode, childNode2];
    if(!tmp) {
        return parentNode;
    } else {
        parentNode.children[1].children[0].text = 'this is changed'
        return parentNode;
    }
}