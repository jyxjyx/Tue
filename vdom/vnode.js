const vnodeAttributes = require('./vnodeAttributes');
class VNode {
    constructor(nodeOpt) {
        vnodeAttributes.forEach(attr => {
            this[attr] = nodeOpt[attr];
        })
    }
}
module.exports = VNode;