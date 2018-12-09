import Dep from '../dep';
import defineReactive from '../defineReactive';
import Watcher from '../watcher';
let id = 0;
export default class Observe {
    constructor(value) {
        this.value = value;
        Object.defineProperty(value, '__ob__', {
            configurable: true,
            enumerable: false,
            value: this,
            writable: true
        });
        this.dep = new Dep();


        // TODO:一些逻辑
        this.define();
    }
    define() {
        const keys = Object.keys(this.value);
        this._watchers = {};
        keys.forEach((key, index) => {
            
            defineReactive(this.value, key, this);
        })
    }
}