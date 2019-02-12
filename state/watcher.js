// watcher观察者类
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
            setTimeout(() => {                
                this.cb();
            }, 0)
        } else {
            // 用户自定义watcher
            this.cb(newValue, oldValue)
        }

    }
}
export default Watcher;