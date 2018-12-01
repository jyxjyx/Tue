// 将template转化为VNode
const VNode = require('./vnode')
module.exports = function render() {
    const parentNode = new VNode({
        tag: 'div',
        class: 'class1',
        style: '',
        text: 'this is VNode text',
        events: '',
        parent: '#app',
        child: '',
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
    parentNode.child = childNode;
    
    return parentNode;
}