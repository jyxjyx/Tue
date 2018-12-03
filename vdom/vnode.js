// VNode类
import vnodeAttributes from './vnodeAttributes';
class VNode {
    constructor(nodeOpt) {
        // 设置默认值
        this.ele = null;
        this.isTextHTML = false;

        vnodeAttributes.forEach(attr => {
            if(nodeOpt[attr])
                this[attr] = nodeOpt[attr];
        })

    }
}
export default  VNode;