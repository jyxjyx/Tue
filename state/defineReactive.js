
import Watcher from "./watcher";
import Observe from "./observe";

// 将对象变为响应式对象
export default function defineReactive(obj, prop, tm) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    if(!descriptor.enumerable) {
        return ;
    }
    let val = obj[prop];
    if(typeof val === 'object') {
        new Observe(obj[prop], tm);
    }
    const watchKeys = Object.getOwnPropertyNames(tm._watch);
    let userWatcher = null;
    if(watchKeys.find(watchkey => watchkey === prop)) {
        userWatcher = new Watcher(tm, val, tm._watch[prop]);
    }
    Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: true,
        get() {
            // 如果添加自定义watcher
            if(userWatcher) {
                obj._watchers.push(userWatcher);
            }
            return val;
        },
        set(newValue) {
            const oldValue = val;
            // 遍历执行用户watcher
            obj._watchers.forEach(watcher => {
                watcher.update(newValue, oldValue);
            });
            // 执行渲染watcher
            tm._watcher.update();
            val = newValue;
        }
    })
}