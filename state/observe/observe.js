import Watcher from "../watcher";
import Observe from './index';

export default function observe(value, isRootData) {
    // TODO:cb待添加
    // const watch = new Watcher(vm, obj);

    // Object.defineProperty(obj, '__ob__', {
    //     configurable: true,
    //     enumerable: false,
    //     value: this,
    //     writable: true
    // });
    if(obj.__ob__ || typeof value !== 'object') {
        return
    }
    const ob = new Observe(value);
    return ob;


}