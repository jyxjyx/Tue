// 将template转化为VNode，TODO:模拟产生VNode
const VNode = require('./vnode')
module.exports = function render(tempalte) {
    const parentNode = new VNode({
        tag: 'div',
        class: 'class1',
        style: '',
        text: 'this is VNode text',
        events: '',
        parent: document.querySelector('#app'),
        child: [],
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
        child: '',
        href: '',
        src: ''
    })

    const childNode2 = new VNode({
        tag: 'span',
        class: 'class3',
        style: '',
        text: 'this is child VNode text',
        events: '',
        parent: parentNode,
        child: '',
        href: '',
        src: ''
    })
    const textNode1 = new VNode({
        tag: '',
        text: 'this is text VNode1',
        parent: childNode2
    })
    childNode2.child = [textNode1]
    
    parentNode.child = [childNode, childNode2];
    
    return parentNode;
}