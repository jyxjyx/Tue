// watcher观察者类
import renderVnode from '../vdom/renderVnode';
import compareNode from '../vdom/compareNode';
let id = 0;
class Watcher {
    constructor(tm, value, cb) {
        this.id = id++;
        this.tm = tm;
        this.cb = cb;
        this.value = value;
        tm._watchers.push(this);
    }
    update() {
        console.log('should be updated')
        // 模拟值的变化
        // const newVNodeTree = renderVnode(this.tm, true);
        // 比较新旧VNode，并作出更新
        // compareNode(newVNodeTree, this.tm._vnodeTree);

    }
}
export default Watcher;