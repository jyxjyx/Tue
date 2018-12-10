// watcher观察者类
import renderVnode from '../vdom/renderVnode';
import compareNode from '../vdom/compareNode';
import VNode from '../vdom/vnode';
let id = 0;
class Watcher {
    constructor(tm, value, cb) {
        this.id = id++;
        this.tm = tm;
        this.cb = cb;
        this.value = value;
        tm._watchers.push(this);
    }
    update(newValue, oldValue) {
        console.log('should be updated')
        if(this.value instanceof VNode) {
            // 更新DOM
            this.cb(newValue, oldValue);
        } else {
            // 用户自定义watcher
            this.cb(newValue, oldValue)
        }
        // 模拟值的变化
        // const newVNodeTree = renderVnode(this.tm, true);
        // 比较新旧VNode，并作出更新
        // compareNode(newVNodeTree, this.tm._vnodeTree);

    }
}
export default Watcher;