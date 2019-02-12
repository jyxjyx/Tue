// Observe类，观测数据变化
import defineReactive from './defineReactive';

let id = 0;
export default class Observe {
    constructor(value, tm) {
        this.value = value;
        this.id = id++;
        this.tm = tm;
        value.__ob__ = this;
        Object.defineProperty(value, '__ob__', {
            configurable: true,
            enumerable: false,
            value: this,
            writable: true
        });
        if(!value._watchers) {
            value._watchers = [];
            Object.defineProperty(value, '_watchers', {
                configurable: true,
                enumerable: false
            });
        }

        // TODO:一些逻辑
        this.define();
    }
    define() {
        const keys = Object.keys(this.value);

        keys.forEach(key => {
            defineReactive(this.value, key, this.tm);
        })
    }
}